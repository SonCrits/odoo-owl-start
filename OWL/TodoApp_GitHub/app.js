const { Component, xml, mount, useRef, onMounted, useState} = owl;

// ==================================================
// Task Component
// ==================================================

class Task extends Component {
    static template = xml /* xml */`
        <div class="task" t-att-class="props.task.isCompleted ? 'done' : '' ">
            <input type="checkbox" t-att-checked="props.task.isCompleted" t-on-click="toggleTask"/>
            <span><t t-esc="props.task.text"/></span>
            <span class="delete" t-on-click="deleteTask">🗑</span>
        </div>
    `;

    static props = ["task", "onDelete"];

    deleteTask() {
        this.props.onDelete(this.props.task);
    }

    toggleTask() {
        this.props.task.isCompleted = !this.props.task.isCompleted;
    }
}
// ==================================================
// Root Components
// ==================================================
class Root extends Component {
    static template = xml /* xml */`
        <div class="todo-app">
            <input placeholder="Enter a new task" t-on-keyup="addTask" t-ref="add-input"/>
            <div class="task-list">
                <t t-foreach="tasks" t-as="task" t-key="task.id">
                    <Task task="task" onDelete.bind="deleteTask"/>
                </t>
            </div>
        </div>
    `;

    static components = {Task};

    // Khi nhập tên task sau đó enter từ `input`, luồng hoạt động trong hàm `addTask` vẫn thực hiện
    // Tuy nhiên do owl không hiểu cần kết xuất dữ liệu cho người dùng (interface)
    // Sử dụng `useState` làm cho các tác vụ hoạt động trở lại
    nextId = 1;
    tasks = useState([]);

    addTask(ev) {
        // 13 is keycode for Enter
        if (ev.keyCode === 13) {
            const text = ev.target.value.trim();
            ev.target.value = "";
            if (text){
                const newTask = {
                    id: this.nextId++,
                    text: text,
                    isCompleted: false,
                };
                this.tasks.push(newTask);
            }       
        }
    }

    deleteTask(task) {
        const index = this.tasks.findIndex(t => t.id === task.id);
        this.tasks.splice(index, 1)
    }

    // khi trang load, Root components được sẵn sàng sẽ gọi onMounted(), sau đó sẽ chỉ con trỏ focus tới inputRef
    // useRef dùng để tham chiếu tới phần tử html có thuộc tính t-ref = add-input
    setup() {
        const inputRef = useRef("add-input");
        onMounted(() => inputRef.el.focus());
    }
} 

// ====================================================
// Setup
// ====================================================

mount(Root, document.body, {dev: true});

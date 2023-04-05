const { Component, xml, mount, useRef, onMounted} = owl;

// ==================================================
// Task Component
// ==================================================

class Task extends Component {
    static template = xml /* xml */`
        <div class="task" t-att-class="props.task.isCompleted ? 'done' : '' ">
            <input type="checkbox" t-att-checked="props.task.isCompleted"/>
            <span><t t-esc="props.task.text"/></span>
        </div>
    `;

    static props = ["task"];
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
                    <Task task="task"/>
                </t>
            </div>
        </div>
    `;

    static components = {Task};

    tasks = [
        {
            id: 1,
            text: "Learning Owl",
            isCompleted: true
        },
        {
            id: 2,
            text: "Learning Data structures and Algorithms",
            isCompleted: true
        }
    ];

    addTask(ev) {
        // 13 is keycode for Enter
        if (ev.keyCode === 13) {
            const text = ev.target.value.trim();
            ev.target.value = "";
            console.log('add task', text)
            // todo
        }
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

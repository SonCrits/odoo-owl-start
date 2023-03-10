const { Component, xml, useState, mount } = owl;

class Task extends Component {
    static template = xml`
        <li t-attf-style="background-color: #{props.task.color}" class="d-flex align-items-center 
            justify-content-between border p-3 rounded mb-2">
            <div class="d-flex align-items-center flex-grow-1 me-2">
                <input type="text" class="form-control me-2"/>
                <input type="color" style="width: 60px" class="form-control-lg form-control-color border-0 bg-white m-0" 
                    id="color" title="Choose your color"/>
            </div>
            <div class="form-check form-switch fs-5 d-none">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" 
                    t-att-id="props.task.id" t-att-checked="props.task.isCompleted" t-on-click="toggleTask"/>
                <label class="form-check-label" t-att-for="props.task.id" t-attf-class="#{props.task.isCompleted ?
                'text-decoration-line-through': ''}">
                    <t t-esc="props.task.name"/>
                </label>
            </div>
            <div>
                <button class="btn btn-primary me-2"><i class="bi bi-pencil"></i></button>
                <button class="btn btn-danger" t-on-click="deleteTask"><i class="bi bi-trash"></i></button>
            </div>
        </li>
    `

    static props = ["task", "onDelete"]

    toggleTask() {
        this.props.task.isCompleted = !this.props.task.isCompleted
    }

    deleteTask() {
        this.props.onDelete(this.props.task)
    }
}


class Root extends Component {
    static template = xml`
    <div>
        <div class="input-group-lg d-flex w-100 rounded border align-items-center">
            <input type="text" class="form-control-lg flex-fill border-0 me-1" placeholder="Add your new task" 
            aria-label="Recipient's username" aria-describedby="button-addon2" t-model="state.name" t-att-value="state.name"/>
            <input type="color" class="form-control-lg form-control-color border-0 bg-white m-0" id="color" t-att-value="state.color" 
                title="Choose your color" t-model="state.color"/>
            <button class="btn btn-primary" type="button" id="button-addon2" t-on-click="addTask">
                <i class="bi bi-plus-lg fs-3"></i>
            </button>
        </div>
    </div>

    <ul class="d-flex flex-column mt-5 p-0">
        <t t-foreach="tasks" t-as="task" t-key="task.id">
            <Task task="task" onDelete.bind="deleteTask"/>
        </t>
        
    </ul>
    `
    static components = {Task}

    // Initialize value of Component
    setup() {
        // Initialize the task state
        this.state = useState({
            name: "",
            color: "#FFF000",
            isCompleted: false,
        })
        // Initialize the tasks value
        this.tasks = useState([])
    }

    // If this function is called, then create a task with id, name, color, isCompleted value
    addTask() {
        // If name of task empty, then display alert discuss and return
        // write a value to the task with the value entered by the user
        // Reset value on view
        if (!this.state.name) {
            alert("Please provide name of task")
            return
        }
        
        const id = Math.random().toString().substring(2, 12)

        this.tasks.push({
            id: id,
            name: this.state.name,
            color: this.state.color,
            isCompleted: false,
        })

        let state = this.state
        this.state = {...state, name: "", color: "#FFF000"}
    }

    deleteTask(task) {
        const index = this.tasks.findIndex(t=>t.id == task.id)
        this.tasks.splice(index, 1)
    }
}

mount(Root, document.getElementById("root"))

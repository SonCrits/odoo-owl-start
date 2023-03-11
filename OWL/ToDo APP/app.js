const {Component, xml, mount, useState} = owl

class Root extends Component {
    static template = xml`
    <div>
        <div class="input-group-lg mb-3 d-flex border w-100 rounded align-items-center">
            <input type="text" class="form-control-lg flex-fill border-0 me-1" placeholder="Add your new task" 
                aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <input type="color" class="form-control-lg form-control-color border-0 bg-white" id="color" value="#563d7c" 
                title="Choose your color"/>
            <button class="btn btn-primary" type="button" id="button-addon2">
                <i class="bi bi-plus-circle-fill fs-3"></i>
            </button>
        </div>
    </div>
    <ul class="d-flex flex-column mt-5 p-0">
        <t t-foreach="tasks" t-as="task" t-key="task">
            <li t-attf-style="background-color: #{task.color}" class="d-flex align-items-center justify-content-between border p-3 rounded mb-2">
                <div class="form-check form-switch fs-5">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" t-att-id="task.id"/>
                    <label class="form-check-label" for="flexCheckDefault" t-att-for="task.id">
                        <t t-esc="task.name"/>
                    </label>
                </div>
                <div>
                    <button class="btn btn-primary me-2"><i class="bi bi-pencil"></i></button>
                    <button class="btn btn-danger"><i class="bi bi-trash"></i></button>
                </div>
            </li>
        </t>
    </ul>
    `

    setup() {
        this.tasks = useState([
            {id: 1, name: "Task 1", color: "#FFF000", isCompleted: false},
            {id: 2, name: "Task 2", color: "#FF0000", isCompleted: false},
            {id: 3, name: "Task 3", color: "#FFF000", isCompleted: false},
        ])
    }
}

mount(Root, document.getElementById("root"))

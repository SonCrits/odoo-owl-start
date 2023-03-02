const { Component, mount, xml, useState} = owl;
console.log('123')
class Root extends Component {
    static template = xml`
        <div>
            <div class="input-group-lg w-100 d-flex border p-2">
                <input type="text" class="form-control-lg flex-fill border-0" placeholder="Recipient's username" aria-label="Recipient's username" 
                    aria-describedby="button-addon2" t-att-value="state.name" t-model="state.name"/>
                <input type="color" class="form-control-lg form-control-color border-0 bg-white" 
                    id="exampleColorInput" t-att-value="state.color" title="Choose your color" t-model="state.color"/>
                <button class="btn btn-primary" type="button" id="button-addon2" t-on-click="addTask">
                    <i class="bi bi-plus-lg fs-3"></i>
                </button>
            </div>
        </div>

        <ul class="d-flex flex-column mt-5 p-0">
            <t t-foreach="tasks" t-as="task" t-key="task.id">
                <li t-attf-style="background-color:#{task.color}" class="d-flex align-items-center justify-content-between border p-3 mb-2 rounded">
                    <div class="form-check form-switch fs-5">
                        <input class="form-check-input" type="checkbox" value="" t-att-id="task.id"/>
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
        this.state = useState({
            name: "",
            color: "FFF000",
            isCompleted: false,
        })
        this.tasks = useState([])
    }

    addTask() {
        this.tasks.push({
            id: 1,
            name: this.state.name,
            color: this.state.color,
            isCompleted: false,
        })
    
    let state = this.state;
    this.state = {...state, name: "", color: "#FFF000"}    
    }

    
}

mount(Root, document.getElementById("root"))

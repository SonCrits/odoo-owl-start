/** @odoo-module **/
import { useService } from "@web/core/utils/hooks";
import { registry } from '@web/core/registry';
const { Component, useState, onWillStart } = owl;

export class TodoListApp extends Component {
    setup() {
        this.state = useState({
            task: {name: "", color: "#FF0000", completed: false},
            taskList: [],
            isEdit: false,
            activeId: false,
        })

        this.orm = useService("orm")
        this.model = "todo.list.app"

        onWillStart(async ()=> {
            await this.getAllTask()
        })

    }

    async getAllTask() {
        this.state.taskList = await this.orm.call(this.model, 'search_read', [[], ["name", "color", "completed"]],)
    }

    addTask() {

    }

    editTask() {

    }

    async saveTask() {
        await this.orm.call(this.model, 'create', [this.state.task])
        await this.getAllTask()
    }

}

TodoListApp.template = "todo_list_app.TodoList"

registry.category('actions').add('todo_list_app.action_todo_list_js', TodoListApp)

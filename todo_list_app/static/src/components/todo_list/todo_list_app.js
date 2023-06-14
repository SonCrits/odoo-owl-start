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
        this.resetForm()
        this.state.activeId = false;
        this.state.isEdit = false;
    }

    editTask(task) {
        this.state.activeId = task.id;
        this.state.isEdit = true;
        this.state.task = {...task}
    }

    async saveTask() {
        if (!this.state.isEdit) {
            await this.orm.call(this.model, 'create', [this.state.task])
            this.resetForm()
        }
        else {
            await this.orm.call(this.model, 'write', [[this.state.activeId], this.state.task])
        }
        await this.getAllTask()
    }

    resetForm() {
        this.state.task = {name: "", color: "#FF0000", completed: false};
    }

}

TodoListApp.template = "todo_list_app.TodoList"

registry.category('actions').add('todo_list_app.action_todo_list_js', TodoListApp)

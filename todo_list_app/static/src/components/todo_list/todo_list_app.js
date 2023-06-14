/** @odoo-module **/

import { registry } from '@web/core/registry';
const { Component, useState } = owl;

export class TodoListApp extends Component {
    setup() {
        this.state = useState({
            taskList: [
                {id: 1, name: "Task 1", color: "#FF0000"},
                {id: 2, name: "Task 2", color: "#000000"},
                {id: 3, name: "Task 3", color: "#FFFFFF"},
            ]
        })
    }

}

TodoListApp.template = "todo_list_app.TodoList"

registry.category('actions').add('todo_list_app.action_todo_list_js', TodoListApp)

/** @odoo-module **/

import { registry } from '@web/core/registry';
const { Component, useState } = owl;

export class TodoListApp extends Component {
    setup() {
        this.state = useState({value: 1})
    }

}

TodoListApp.template = "todo_list_app.TodoList"

registry.category('actions').add('todo_list_app.action_todo_list_js', TodoListApp)

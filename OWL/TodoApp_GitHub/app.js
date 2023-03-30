const { Component, xml, mount} = owl;

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
        <div class="task-list">
            <t t-foreach="tasks" t-as="task" t-key="task.id">
                <Task task="task"/>
            </t>
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
} 

// ====================================================
// Setup
// ====================================================

mount(Root, document.body, {dev: true});

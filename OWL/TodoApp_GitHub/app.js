const { Component, xml, mount} = owl;

// Owl Components
class Root extends Component {
    static template = xml/* xml */`
        <div class="task-list">
            <t t-foreach="tasks" t-as="task" t-key="task.id">
                <div class="task" t-att-class="task.isCompleted ? 'done' : '' ">
                    <input type="checkbox" t-att-checked="task.isCompleted"/>
                    <span><t t-esc="task.text"/></span>
                </div>
            </t>
        </div>
    `;

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
    ]
} 

mount(Root, document.body);

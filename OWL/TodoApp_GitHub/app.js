const { Component, xml, mount} = owl;

// Owl Components
class Root extends Component {
    static template = xml`<div>Todo App</div>`;
} 

mount(Root, document.body);

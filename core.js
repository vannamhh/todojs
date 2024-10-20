export default function html([first, ...strings], ...values) {
    return values
        .reduce((acc, curr) => acc.concat(curr, strings.shift()), [first])
        .filter((x) => (x && x !== true) || x === 0)
        .join("");
}

export function createStore(reducer) {
    let state = reducer();
    const roots = new Map();

    function render() {
        for (const [root, component] of roots) {
            const output = component();
            root.innerHTML = output;
        }
    }

    function handleDrapAndDrop() {
        const todos = document.querySelector('.todos');
        const cards = todos.querySelectorAll('.card');
    
        cards.forEach((card => {
            card.ondragenter = function(e) {
                console.log(this);
            }
        }))
    }
    
    

    return {
        attach(component, root) {
            roots.set(root, component);
            render();
            handleDrapAndDrop();
        },
        connect(selector = (state) => state) {
            return (component) => (props, ...args) => component(Object.assign({}, props, selector(state), ...args));
        },
        dispatch(action, ...args) {
            state = reducer(state, action, args);
            render();
        }
    };
}

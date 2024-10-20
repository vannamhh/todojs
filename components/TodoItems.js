import html from "../core.js";

function TodoItems({ todo, editingIndex }) {
    const { title, isCompleted } = todo;

    return html`
        <li class="card ${isCompleted && 'checked'} ${editingIndex === todo.id && 'editing'}" draggable="true">
            <div class="cb-container">
                <input type="checkbox" class="cb-input" 
                    ${isCompleted && 'checked'} 
                    onclick="dispatch('toggle', ${todo.id})"
                />
                <span class="check"></span>
            </div>
            <div class="item-wrap" 
                ondblclick="dispatch('startEdit', ${todo.id}, this.querySelector('.item-input'))"
            >
                <p class="item">${title}</p>
                <input class="item-input" type="text" value="${title}"}
                onkeyup="event.keyCode===13 && dispatch('endEdit', this.value.trim()) || event.keyCode===27 && dispatch('cancelEdit')"
                />
            </div>
            <button class="clear" onclick="dispatch('delete', ${todo.id})">
                <img src="./assets/images/icon-cross.svg" alt="Clear it" />
            </button>
        </li>
    `;
}

export default TodoItems;

import html from "../core.js";
import { connect } from "../store.js";

const connector = connect();

function ContentBottom({ todos, filter, filters }) {
    return html`
        <div class="card stat">
            <p class="corner">
                <span id="items-left">${todos.filter(filters.active).length}</span>
                items left
            </p>
            <div class="filter">
                ${Object.keys(filters).map(
                    (type) =>
                        html` <button
                            id="${type}"
                            class="${filter === type && "on"}"
                            onclick="dispatch('switchFilter', '${type}')"
                        >
                            ${type[0].toUpperCase() + type.slice(1)}
                        </button>`,
                )}
            </div>
            ${todos.filter(filters.completed).length > 0 &&
            html`
                <div class="corner">
                    <button id="clear-completed" onclick="dispatch('clearCompleted')">Clear Completed</button>
                </div>
            `}
        </div>
    `;
}

export default connector(ContentBottom);

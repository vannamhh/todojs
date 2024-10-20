import html from "../core.js";
import { connect } from "../store.js";

import TodoItems from "./TodoItems.js";

const connector = connect();

function Todos({ todos, filter, filters, editingIndex }) {
    return html`
        <ul class="todos ${filter}">
            ${todos
                .filter(filters[filter])
                .map((todo, index) => TodoItems({ todo, editingIndex }))}
        </ul>
    `;
}

export default connector(Todos);

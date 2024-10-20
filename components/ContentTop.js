import html from "../core.js";

function ContentTop() {
    return html`
        <div class="card add">
            <div class="cb-container">
                <button id="add-btn">+</button>
            </div>
            <div class="txt-container">
                <label for="addt">Create todo</label>
                <input
                    type="text"
                    class="txt-input"
                    placeholder="Create a new todo..."
                    spellcheck="false"
                    autocomplete="off"
                    id="addt"
                    autofocus
                    onkeyup="event.keyCode === 13 && dispatch('add', this.value.trim())"
                />
            </div>
        </div>
    `;
}

export default ContentTop;

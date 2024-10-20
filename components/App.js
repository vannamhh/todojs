import html from "../core.js";
import { connect } from "../store.js";
import Header from "./Header.js";
import Todos from "./Todos.js";
import ContentTop from "./ContentTop.js";
import ContentBottom from "./ContentBottom.js";
import Footer from "./Footer.js";

function App({ todos, isthemeLight }) {
    return html`
        ${Header()}
        <main>
            ${ContentTop()} 
            ${todos.length > 0 && Todos()} 
            ${todos.length > 0 && ContentBottom()}
        </main>
        ${Footer()}
    `;
}

export default connect()(App);

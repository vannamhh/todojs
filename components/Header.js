import html from "../core.js";
import { connect } from '../store.js'

function Header( {isthemeLight} ) {
    function switchTheme() {
        const body = document.querySelector('body');
        body.classList.toggle('light', isthemeLight);

    }
    switchTheme();
    const imgs = {
        dark: './assets/images/icon-sun.svg',
        light: './assets/images/icon-moon.svg',
    }

    return html`
        <header class="card">
            <h1>TODO</h1>
            <button id="theme-switcher" onclick="dispatch('themeSwitch')">
                <img src="${isthemeLight ? imgs.light : imgs.dark}" alt="Change color theme" />
            </button>
        </header>
    `
}

export default connect()(Header)
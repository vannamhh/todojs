const TODO_STORAGE_KEY = "TODOS_APP";

export default {
    get() {
        return JSON.parse(localStorage.getItem(TODO_STORAGE_KEY)) || [];
    },
    set(todos) {
        localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos));
    },
};

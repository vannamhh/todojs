import storage from "./js/storage.js";

const init = {
    todos: storage.get(),
    filter: "all",
    filters: {
        all: () => true,
        active: (todo) => !todo.isCompleted,
        completed: (todo) => todo.isCompleted,
    },
    isthemeLight: false,
    editingIndex: undefined,
    elementEdit: undefined,
    findMaxId: (todos) => todos.reduce((max, todo) => todo.id > max ? todo.id : max , 0),
    findIndexById: (todos, id) => {
        return todos.findIndex((todo) => todo.id === id);
    }
};

const actions = {
    add( state, title ) {
        if (title) {
            state.todos.push({ title, isCompleted: false, id:  state.findMaxId(state.todos) + 1});
            storage.set(state.todos);
        }
    },
    toggle( state , id) {
        let index = state.findIndexById(state.todos, id);
        state.todos[index].isCompleted = !state.todos[index].isCompleted;
        storage.set(state.todos);
    },
    delete( state , id) {
        let index = state.findIndexById(state.todos, id);
        state.todos.splice(index, 1);
        storage.set(state.todos);
    },
    switchFilter(state, type) {
        state.filter = type;
    },
    clearCompleted(state) {
        state.todos = state.todos.filter(state.filters.active)
        storage.set(state.todos);
    },
    themeSwitch(state) {
        state.isthemeLight = !state.isthemeLight;
    },
    startEdit(state, index, element) {
        state.editingIndex = index;
        state.elementEdit = element;
    },
    endEdit(state, title) {
        let index = state.findIndexById(state.todos, state.editingIndex);
        if (title) {
            state.todos[index].title = title;
            state.editingIndex = undefined;
            storage.set(state.todos);
        } else {
            this.delete(state, state.editingIndex);
        }
        
    },
    cancelEdit(state) {
        state.editingIndex = undefined;
    }
};

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args);
    return state;
}

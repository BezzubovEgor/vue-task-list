import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, MOVE_TODO, SET_TODOS } from "./mutationTypes";
import { loadStore, saveToStore } from "../../../api/indexedDBService";


export default {
    [ADD_TODO](context, todo) {
        context.commit(ADD_TODO, todo);
        context.dispatch('saveTodos');
    },

    [TOGGLE_TODO](context, todoId) {
        context.commit(TOGGLE_TODO, todoId);
        context.dispatch('saveTodos');
    },

    [REMOVE_TODO](context, todoId) {
        context.commit(REMOVE_TODO, todoId);
        context.dispatch('saveTodos');
    },

    [MOVE_TODO](context, data) {
        context.commit(MOVE_TODO, data);
        context.dispatch('saveTodos');
    },

    async loadTodos(context) {
        const todos = await loadStore('todos');
        context.commit(SET_TODOS, todos || []);
    },

    async saveTodos(context) {
        await saveToStore('todos', context.state.todos);
    }
};
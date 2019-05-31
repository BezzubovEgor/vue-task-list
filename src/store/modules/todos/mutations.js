import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, MOVE_TODO, SET_TODOS } from "./mutationTypes";


export default {
    [SET_TODOS](state, todos) {
        state.todos = todos;
        state.todosLoaded = true;
    },

    [ADD_TODO](state, todo) {
        const newToDo = {
            ...todo,
            done: false,
            id: new Date().getTime().toString(),
        };
        state.todos.unshift(newToDo);
    },

    [TOGGLE_TODO](state, todoId) {
        const todo = state.todos.find(({ id }) => id === todoId);
        todo.done = !todo.done;
    },

    [REMOVE_TODO](state, todoId) {
        state.todos = state.todos.filter(({ id }) => id !== todoId);
    },

    [MOVE_TODO](state, { projectId, todoId }) {
        const todo = state.todos.find(({ id }) => id === todoId);
        todo.projectId = projectId;
    },
};

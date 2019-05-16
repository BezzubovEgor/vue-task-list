import { ADD_TODO, TOGGLE_TODO } from "./actionTypes";

export default {
    [ADD_TODO](context, todo) {
        context.commit('addToDo', todo);
    },
    [TOGGLE_TODO](context, todoId) {
        context.commit('toggleToDo', todoId);
    }
};

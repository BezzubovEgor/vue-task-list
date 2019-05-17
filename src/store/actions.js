import { ADD_TODO, TOGGLE_TODO, REMOVE_PROJECT, ADD_PROJECT } from "./mutationTypes";

export default {
    [ADD_TODO](context, todo) {
        context.commit(ADD_TODO, todo);
    },

    [TOGGLE_TODO](context, todoId) {
        context.commit(TOGGLE_TODO, todoId);
    },

    [REMOVE_PROJECT](context, project) {
        context.commit(REMOVE_PROJECT, project);
    },

    [ADD_PROJECT](context, project) {
        context.commit(ADD_PROJECT, project);
    },
};

import { ADD_TODO, TOGGLE_TODO, SELECT_PROJECT, REMOVE_PROJECT, ADD_PROJECT, SET_PROJECTS, STORE_LOADED } from "./mutationTypes";

export default {
    [STORE_LOADED](state) {
        state.storeLoaded = true;
    },

    [ADD_TODO](state, todo) {
        const newToDo = {
            ...todo,
            done: false,
            id: new Date().getTime().toString(),
        };
        state.projects.find(({ id }) => id === state.selectedProject).todos.unshift(newToDo);
    },

    [TOGGLE_TODO](state, todoId) {
        const todo = state.projects.find(({ id }) => id === state.selectedProject).todos.find(({ id }) => id === todoId);
        todo.done = !todo.done;
    },

    [SET_PROJECTS](state, projects) {
        state.projects = projects;
    },

    [SELECT_PROJECT](state, project) {
        state.selectedProject = project;
    },

    [REMOVE_PROJECT](state, project) {
        state.projects = state.projects.filter(item => item !== project);
    },

    [ADD_PROJECT](state, project) {
        state.projects.unshift({ ...project, todos: [], id: new Date().getTime().toString() });
    }


};

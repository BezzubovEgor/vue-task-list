import { ADD_TODO, TOGGLE_TODO, SELECT_PROJECT, REMOVE_PROJECT, ADD_PROJECT, SET_PROJECTS, STORE_LOADED, SELECT_TODO, REMOVE_TODO } from "./mutationTypes";

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

    [REMOVE_TODO](state, todoId) {
        const project = state.projects.find(({ id }) => id === state.selectedProject);
        project.todos = project.todos.filter(({ id }) => id !== todoId);
    },

    [SET_PROJECTS](state, projects) {
        state.projects = projects;
    },

    [SELECT_TODO](state, todoId) {
        state.selectedToDo = todoId;
    },

    [SELECT_PROJECT](state, projectId) {
        state.selectedProject = projectId;
    },

    [REMOVE_PROJECT](state, projectId) {
        state.projects = state.projects.filter(item => item.id !== projectId);
    },

    [ADD_PROJECT](state, project) {
        state.projects.unshift({ ...project, todos: [], id: new Date().getTime().toString() });
    }


};

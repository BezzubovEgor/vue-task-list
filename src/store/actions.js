import { ADD_TODO, TOGGLE_TODO, REMOVE_PROJECT, ADD_PROJECT, SET_PROJECTS, STORE_LOADED } from "./mutationTypes";
import { saveToStore, loadStore } from "../api/indexedDBService";

export default {
    [ADD_TODO](context, todo) {
        context.commit(ADD_TODO, todo);
        context.dispatch('saveProjects');
    },

    [TOGGLE_TODO](context, todoId) {
        context.commit(TOGGLE_TODO, todoId);
        context.dispatch('saveProjects');
    },

    [REMOVE_PROJECT](context, project) {
        context.commit(REMOVE_PROJECT, project);
        context.dispatch('saveProjects');
    },

    [ADD_PROJECT](context, project) {
        context.commit(ADD_PROJECT, project);
        context.dispatch('saveProjects');
    },

    async loadProjects(context) {
        const projects = await loadStore('projects');
        context.commit(SET_PROJECTS, projects || []);
        context.commit(STORE_LOADED);
    },

    async saveProjects(context) {
        await saveToStore('projects', context.state.projects);
    }
};

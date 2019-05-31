import { loadStore, saveToStore } from "../../../api/indexedDBService";
import { REMOVE_PROJECT, ADD_PROJECT, SET_PROJECTS } from "./mutationTypes";


export default {
    [REMOVE_PROJECT](context, projectId) {
        context.commit(REMOVE_PROJECT, projectId);
        context.dispatch('saveProjects');
    },

    [ADD_PROJECT](context, project) {
        context.commit(ADD_PROJECT, project);
        context.dispatch('saveProjects');
    },

    async loadProjects(context) {
        const projects = await loadStore('projects');
        context.commit(SET_PROJECTS, projects || []);
    },

    async saveProjects(context) {
        await saveToStore('projects', context.state.projects);
    }
}
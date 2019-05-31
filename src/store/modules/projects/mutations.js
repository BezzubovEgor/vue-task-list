import { SET_PROJECTS, REMOVE_PROJECT, ADD_PROJECT } from "./mutationTypes";


export default {
    [SET_PROJECTS](state, projects) {
        state.projects = projects;
        state.projectsLoaded = true;
    },

    [REMOVE_PROJECT](state, projectId) {
        state.projects = state.projects.filter(item => item.id !== projectId);
    },

    [ADD_PROJECT](state, project) {
        state.projects.unshift({ ...project, todos: [], id: new Date().getTime().toString() });
    }
}
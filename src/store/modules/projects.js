import { loadStore, saveToStore } from "../../api/indexedDBService";
import { SET_PROJECTS, REMOVE_PROJECT, ADD_PROJECT, LOAD_PROJECTS, SAVE_PROJECTS } from "../types";


const state = {
    projects: [],
    projectsLoaded: false,
};

const getters = {
    getProjectById: store => selectedProject => store.projects.find(({ id }) => id === selectedProject),
    projects: (store, { getProjectTodos }) => store.projects.map(project => ({
        ...project,
        todo: getProjectTodos(project.id).filter(({ done }) => !done).length,
        done: getProjectTodos(project.id).filter(({ done }) => done).length,
    })),
};

const mutations = {
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
};

const actions = {
    async [REMOVE_PROJECT](context, projectId) {
        context.commit(REMOVE_PROJECT, projectId);
        await context.dispatch(SAVE_PROJECTS);
    },
    async [ADD_PROJECT](context, project) {
        context.commit(ADD_PROJECT, project);
        await context.dispatch(SAVE_PROJECTS);
    },
    async [LOAD_PROJECTS](context) {
        const projects = await loadStore('projects');
        context.commit(SET_PROJECTS, projects || []);
    },
    async [SAVE_PROJECTS](context) {
        await saveToStore('projects', context.state.projects);
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};
import Vue from 'vue';

import { loadStore, saveToStore } from "../../api/indexedDBService";
import { SET_PROJECTS, REMOVE_PROJECT, ADD_PROJECT, LOAD_PROJECTS, SAVE_PROJECTS, TOGGLE_MARK_PROJECT, REMOVE_MARKED_PROJECTS, MARK_ALL_PROJECTS, UNMARK_ALL_PROJECTS } from "../types";


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
    isBulkMode: store => store.projects.some(project => project.marked),
    marked: store => store.projects.filter(project => project.marked),
    notMarked: store => store.projects.filter(project => !project.marked),
};

const mutations = {
    [SET_PROJECTS](state, projects) {
        state.projects = projects;
        state.projectsLoaded = true;
    },
    [REMOVE_PROJECT](state, projectId) {
        state.projects = state.projects.filter(item => item.id !== projectId);
    },
    [TOGGLE_MARK_PROJECT](state, projectId) {
        const project = state.projects.find(item => item.id === projectId);
        Vue.set(project, 'marked', !project.marked);
    },
    [ADD_PROJECT](state, project) {
        state.projects.unshift({ ...project, todos: [], id: new Date().getTime().toString() });
    }
};

const actions = {
    async [ADD_PROJECT](context, project) {
        context.commit(ADD_PROJECT, project);
        await context.dispatch(SAVE_PROJECTS);
    },
    async [REMOVE_PROJECT](context, projectId) {
        context.commit(REMOVE_PROJECT, projectId);
        await context.dispatch(SAVE_PROJECTS);
    },
    async [REMOVE_MARKED_PROJECTS](context) {
        context.getters.marked.forEach(({ id }) => context.dispatch(REMOVE_PROJECT, id));
    },
    async [LOAD_PROJECTS](context) {
        const projects = await loadStore('projects');
        context.commit(SET_PROJECTS, projects || []);
    },
    async [SAVE_PROJECTS](context) {
        await saveToStore('projects', context.state.projects);
    },
    async [TOGGLE_MARK_PROJECT](context, projectId) {
        context.commit(TOGGLE_MARK_PROJECT, projectId);
        await context.dispatch(SAVE_PROJECTS);
    },
    async [MARK_ALL_PROJECTS](context) {
        const notMarked = context.getters.notMarked;
        notMarked.forEach(({ id }) => context.dispatch(TOGGLE_MARK_PROJECT, id));
    },
    async [UNMARK_ALL_PROJECTS](context) {
        const marked = context.getters.marked;
        marked.forEach(({ id }) => context.dispatch(TOGGLE_MARK_PROJECT, id));
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};
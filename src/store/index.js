import Vue from 'vue';
import Vuex from 'vuex';
import { getField, updateField } from 'vuex-map-fields';

import projects from './modules/projects';
import todos from './modules/todos';


Vue.use(Vuex);

const state = {};

const getters = {
    loaded: state => state.projects.projectsLoaded && state.todos.todosLoaded,
    getField,
};

const mutations = {
    updateField,
};

const actions = {};

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state,
    getters,
    mutations,
    actions,
    modules: {
        projects,
        todos,
    },
});

export default store;
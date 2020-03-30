import Vue from 'vue';
import Vuex from 'vuex';
import { getField, updateField } from 'vuex-map-fields';

import lists from './modules/lists';
import todos from './modules/todos';


Vue.use(Vuex);

const state = {};

const getters = {
    loaded: state => state.lists.listsLoaded && state.todos.todosLoaded,
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
        lists,
        todos,
    },
});

export default store;
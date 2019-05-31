import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';


Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        projects: [],
        selectedProject: null,
        selectedToDo: null,
        storeLoaded: false,
    },
    mutations,
    actions,
    getters,
});

export default store;
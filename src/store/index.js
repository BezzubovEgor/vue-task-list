import Vue from 'vue';
import Vuex from 'vuex';

import projects from './modules/projects';
import todos from './modules/todos';


Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        projects,
        todos,
    },
});

export default store;
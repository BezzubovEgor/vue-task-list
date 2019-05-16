import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';


Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        projects: [{
            id: "1",
            name: 'ToDo list',
            todos: [{
                title: "Купить картошку",
                done: false,
                id: "1",
            },
            {
                title: "Выпить кофе",
                done: false,
                id: "2",
            },
            {
                title: "Выучить vue",
                done: false,
                id: "3",
            }],
        }, {
            id: "2",
            name: 'Hello world',
            todos: [],
        }, {
            id: "3",
            name: 'Mt test project',
            todos: [],
        }, {
            id: "4",
            name: 'This is my to do',
            todos: [],
        }, {
            id: "5",
            name: 'Hello',
            todos: [],
        }],
        selectedProject: null,
    },
    mutations,
    actions,
    getters,
});

export default store;
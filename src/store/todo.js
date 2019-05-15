import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        todos: [{
            title: "Купить картошку",
            done: false,
            id: 1,
        },
        {
            title: "Выпить кофе",
            done: false,
            id: 2,
        },
        {
            title: "Выучить vue",
            done: false,
            id: 3,
        }],
    },
    mutations: {
        addToDo(state, todo) {
            const newToDo = {
                ...todo,
                done: false,
                id: new Date().getTime(),
            };
            state.todos.push(newToDo);
        },
    
        toggleToDo(state, toggled) {
            const todo = state.todos.find(({ id }) => id === toggled);
            todo.done = !todo.done;
        }
    },
    actions: {
        addToDo(context, todo) {
            context.commit('addToDo', todo);
        },
        toggleToDo(context, toggled) {
            context.commit('toggleToDo', toggled);
        }
    }
});

export default store;
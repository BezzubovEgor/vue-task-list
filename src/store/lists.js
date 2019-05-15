import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        lists: [{
            name: "todos",
            id: 1,
        }],
    },
    // mutations: {
    //     addList(state, list) {
    //         const newToDo = {
    //             ...todo,
    //             done: false,
    //             id: new Date().getTime(),
    //         };
    //         state.todos.push(newToDo);
    //     },
    
    //     removeList(state, toggled) {
    //         const todo = state.todos.find(({ id }) => id === toggled);
    //         todo.done = !todo.done;
    //     }
    // },
    // actions: {
    //     addToDo(context, todo) {
    //         context.commit('addToDo', todo);
    //     },
    //     toggleToDo(context, toggled) {
    //         context.commit('toggleToDo', toggled);
    //     }
    // }
});

export default store;
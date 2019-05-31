import mutations from './mutations';
import actions from './actions';
import getters from './getters';


export default {
    state: {
        todos: [],
        todosLoaded: false,
    },
    mutations,
    actions,
    getters,
};
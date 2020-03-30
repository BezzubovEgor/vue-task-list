import Vue from 'vue';

import { loadStore, saveToStore } from "../../api/indexedDBService";
import {
    SET_LISTS,
    REMOVE_LIST,
    ADD_LIST,
    LOAD_LISTS,
    SAVE_LISTS,
    TOGGLE_MARK_LIST,
    REMOVE_MARKED_LISTS,
    MARK_ALL_LISTS,
    UNMARK_ALL_LISTS,
} from "../types";


const state = {
    lists: [],
    listsLoaded: false,
};

const getters = {
    getListById: store => selectedList => store.lists.find(({ id }) => id === selectedList),
    lists: (store, { getListTodos }) => store.lists.map(list => ({
        ...list,
        todo: getListTodos(list.id).filter(({ done }) => !done).length,
        done: getListTodos(list.id).filter(({ done }) => done).length,
    })),
    isBulkMode: store => store.lists.some(list => list.marked),
    marked: store => store.lists.filter(list => list.marked),
    notMarked: store => store.lists.filter(list => !list.marked),
};

const mutations = {
    [SET_LISTS](state, lists) {
        state.lists = lists;
        state.listsLoaded = true;
    },
    [REMOVE_LIST](state, listId) {
        state.lists = state.lists.filter(item => item.id !== listId);
    },
    [TOGGLE_MARK_LIST](state, listId) {
        const list = state.lists.find(item => item.id === listId);
        Vue.set(list, 'marked', !list.marked);
    },
    [ADD_LIST](state, list) {
        state.lists.unshift({ ...list, todos: [], id: new Date().getTime().toString() });
    }
};

const actions = {
    async [ADD_LIST](context, list) {
        context.commit(ADD_LIST, list);
        await context.dispatch(SAVE_LISTS);
    },
    async [REMOVE_LIST](context, listId) {
        context.commit(REMOVE_LIST, listId);
        await context.dispatch(SAVE_LISTS);
    },
    async [REMOVE_MARKED_LISTS](context) {
        context.getters.marked.forEach(({ id }) => context.dispatch(REMOVE_LIST, id));
    },
    async [LOAD_LISTS](context) {
        const lists = await loadStore('lists');
        context.commit(SET_LISTS, lists || []);
    },
    async [SAVE_LISTS](context) {
        await saveToStore('lists', context.state.lists);
    },
    async [TOGGLE_MARK_LIST](context, listId) {
        context.commit(TOGGLE_MARK_LIST, listId);
        await context.dispatch(SAVE_LISTS);
    },
    async [MARK_ALL_LISTS](context) {
        const notMarked = context.getters.notMarked;
        notMarked.forEach(({ id }) => context.dispatch(TOGGLE_MARK_LIST, id));
    },
    async [UNMARK_ALL_LISTS](context) {
        const marked = context.getters.marked;
        marked.forEach(({ id }) => context.dispatch(TOGGLE_MARK_LIST, id));
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};
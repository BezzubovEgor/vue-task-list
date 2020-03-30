import Vue from 'vue';

import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, MOVE_TODO, SET_TODOS, LOAD_TODOS, SAVE_TODOS, SET_TODO_FORM, SAVE_TODO_FORM } from "../types";
import { loadStore, saveToStore } from "../../api/indexedDBService";


const state = {
    todos: [],
    todoForm: {},
    todosLoaded: false,
};

const getters = {
    getListTodoById: store => (todoId, list) => {
        return store.todos.find(({ id, listId }) => id === todoId && listId === list);
    },
    getListTodos: store => list => store.todos.filter(({ listId }) => listId === list),
    todoForm: store => store.todoForm,
};

const mutations = {
    [SET_TODOS](state, todos) {
        state.todos = todos;
        state.todosLoaded = true;
    },
    [ADD_TODO](state, todo) {
        const newToDo = {
            ...todo,
            done: false,
            id: Date.now().toString(),
        };
        state.todos.unshift(newToDo);
    },
    [TOGGLE_TODO](state, todoId) {
        const todo = state.todos.find(({ id }) => id === todoId);
        todo.done = !todo.done;
    },
    [REMOVE_TODO](state, todoId) {
        state.todos = state.todos.filter(({ id }) => id !== todoId);
    },
    [MOVE_TODO](state, { listId, todoId }) {
        const todo = state.todos.find(({ id }) => id === todoId);
        todo.listId = listId;
    },
    [SET_TODO_FORM](state, todoId) {
        state.todoForm = state.todos.find(({ id }) => id === todoId);
    },
    [SAVE_TODO_FORM](state, todoId) {
        Vue.set(state.todos, state.todos.findIndex(({ id }) => id === todoId), state.todoForm);
        state.todoId = {};
    }
};

const actions = {
    async [ADD_TODO](context, todo) {
        context.commit(ADD_TODO, todo);
        await context.dispatch(SAVE_TODOS);
    },
    async [TOGGLE_TODO](context, todoId) {
        context.commit(TOGGLE_TODO, todoId);
        await context.dispatch(SAVE_TODOS);
    },
    async [REMOVE_TODO](context, todoId) {
        context.commit(REMOVE_TODO, todoId);
        await context.dispatch(SAVE_TODOS);
    },
    async [MOVE_TODO](context, data) {
        context.commit(MOVE_TODO, data);
        await context.dispatch(SAVE_TODOS);
    },
    async [SET_TODO_FORM](context, todoId) {
        context.commit(SET_TODO_FORM, todoId);
    },
    async [SAVE_TODO_FORM](context) {
        context.commit(SAVE_TODO_FORM);
    },
    async [LOAD_TODOS](context) {
        const todos = await loadStore('todos');
        context.commit(SET_TODOS, todos || []);
    },
    async [SAVE_TODOS](context) {
        await saveToStore('todos', context.state.todos);
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
}
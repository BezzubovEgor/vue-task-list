<template>
  <AppPage v-if="list">
    <template #actions>
      <AppDetailsActions @back="$router.back()" @remove="removeSelectedList" />
    </template>
    <template #header>{{ list.name }}</template>
    <ToDoList class="mt-3 todo-list" :todos="todos" @toggle="toggleToDo" @open="openToDo"/>
    <template #footer>
      <ToDoFooter />
    </template>
  </AppPage>
</template>

<script>
import { mapActions } from "vuex";

import { REMOVE_LIST, TOGGLE_TODO } from '../../store/types';
import routes from "../../router/routes";
import AppDetailsActions from "../core/layout/AppDetailsActions";
import AppPage from "../core/layout/AppPage";
import ToDoList from "./ToDoList";
import ToDoFooter from "./ToDoFooter";


export default {
  name: "ToDoPage",
  components: {
    AppPage,
    AppDetailsActions,
    ToDoList,
    ToDoFooter
  },
  props: {
    listId: String
  },
  created() {
    this.checkList();
  },
  watch: {
    listId: "checkList"
  },
  computed: {
    list() {
      return this.$store.getters.getListById(this.listId);
    },
    todos() {
      return this.$store.getters.getListTodos(this.listId);
    },
  },
  methods: {
    ...mapActions({
      toggleToDo: TOGGLE_TODO,
      removeToDo: REMOVE_LIST,
    }),
    checkList() {
      if (!this.list) {
        this.$router.replace(routes.NOT_FOUND.path);
      }
    },
    removeSelectedList() {
      this.$router.back();
      this.removeToDo(this.listId);
    },
    openToDo(todoId) {
      this.$router.push({ name: routes.TODO_DETAILS.name, params: { listId: this.listId, todoId } });
    },
  }
};
</script>

<style scoped>
.todo-app {
  height: 100%;
  width: 100%;
  position: absolute;
}
.todo-list {
  margin-right: -15px;
  margin-left: -15px;
}
</style>

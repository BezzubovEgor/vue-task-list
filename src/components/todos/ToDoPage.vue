<template>
  <div class="row d-flex flex-column justify-content-between align-items-center todo-app">
    <div class="col-sm-10 col-md-7 col-lg-5 text-left">
      <h1 class="display-4 mt-3">{{ list }}</h1>
      <ToDoList class="mt-3" :todos="todos" @toggle="toggleToDo"/>
    </div>
    <ToDoFooter/>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import ToDoList from "./ToDoList";
import ToDoFooter from "./ToDoFooter";
import todoStore from "../../store/todo";

export default {
  name: "ToDoPage",

  components: {
    ToDoList,
    ToDoFooter
  },

  store: todoStore,

  computed: {
    ...mapState({
      todos(state) {
        return state[this.$route.params.list];
      }
    }),
    list() {
      return this.$route.params.list;
    }
  },

  methods: {
    ...mapActions(["addToDo", "toggleToDo"])
  }
};
</script>

<style scoped>
.todo-app {
  height: 100%;
  width: 100%;
  position: absolute;
}
</style>

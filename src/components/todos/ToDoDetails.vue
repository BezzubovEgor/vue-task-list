<template>
  <AppPage v-if="todoForm">
    <template #actions>
      <AppDetailsActions @back="$router.back()" @remove="remove"/>
    </template>
    <AppBackground :src="require('../../assets/todoDetails.svg')">
      <ToDoDetailsForm/>
    </AppBackground>
  </AppPage>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import { REMOVE_TODO, SET_TODO_FORM } from "../../store/types";
import routes from "../../router/routes";
import AppPage from "../core/layout/AppPage";
import AppDetailsActions from "../core/layout/AppDetailsActions";
import AppBackground from "../core/AppBackground";
import ToDoDetailsForm from "./ToDoDetailsForm";

export default {
  name: "ToDoDetails",
  components: {
    AppPage,
    AppDetailsActions,
    AppBackground,
    ToDoDetailsForm
  },
  props: {
    listId: String,
    todoId: String
  },
  created() {
    this.check();
  },
  watch: {
    todoId: "check",
    listId: "check"
  },
  computed: {
    ...mapGetters(["todoForm"]),
  },
  methods: {
    ...mapActions([REMOVE_TODO, SET_TODO_FORM]),
    check() {
      this[SET_TODO_FORM](this.todoId);

      if (!this.todoForm) {
        return this.$router.replace(routes.NOT_FOUND.path);
      }
    },
    remove() {
      this.$router.back();
      this[REMOVE_TODO](this.todoId);
    }
  }
};
</script>

<style scoped>
</style>

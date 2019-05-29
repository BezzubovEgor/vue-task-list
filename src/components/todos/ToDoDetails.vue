<template>
  <AppPage v-if="todo">
    <template #actions>
      <AppDetailsActions @back="$router.back()" @remove="removeCurrent"/>
    </template>
    <!-- <AppSelector /> -->
    <ToDoDetailsForm :todo="todo"/>
  </AppPage>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import AppPage from "../core/layout/AppPage";
import AppDetailsActions from "../core/layout/AppDetailsActions";
import AppSelector from "../core/AppSelector";
import ToDoDetailsForm from "./ToDoDetailsForm";
import { SELECT_PROJECT, SELECT_TODO, REMOVE_TODO } from "../../store/mutationTypes";
import routes from "../../router/routes";

export default {
  name: "ToDoDetails",
  components: {
    AppPage,
    AppDetailsActions,
    AppSelector,
    ToDoDetailsForm
  },
  props: {
    projectId: String,
    todoId: String
  },
  created() {
    this.selectToDo();
  },
  watch: {
    todoId: "selectToDo",
    projectId: "selectToDo"
  },
  computed: {
    ...mapGetters(["todo", "project"])
  },
  methods: {
    ...mapActions([REMOVE_TODO]),
    selectToDo() {
      this.$store.commit(SELECT_PROJECT, this.projectId);
      this.$store.commit(SELECT_TODO, this.todoId);

      if (!this.todo) {
        this.$router.replace(routes.NOT_FOUND.path);
      }
    },
    removeCurrent() {
      this.$router.back();
      this[REMOVE_TODO](this.todoId);
    }
  }
};
</script>

<style scoped>
</style>

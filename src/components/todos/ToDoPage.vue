<template>
  <AppPage v-if="project">
    <template #actions>
      <AppDetailsActions @back="$router.back()" @remove="removeSelectedProject" />
    </template>
    <template #header>{{ project.name }}</template>
    <ToDoList class="mt-3 todo-list" :todos="project.todos" @toggle="toggleToDo" @open="openToDo"/>
    <template #footer>
      <ToDoFooter/>
    </template>
  </AppPage>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import AppPage from "../core/layout/AppPage";
import AppDetailsActions from "../core/layout/AppDetailsActions";
import ToDoList from "./ToDoList";
import ToDoFooter from "./ToDoFooter";
import routes from "../../router/routes";
import {
  SELECT_PROJECT,
  TOGGLE_TODO,
  REMOVE_PROJECT
} from "../../store/mutationTypes";

export default {
  name: "ToDoPage",
  components: {
    AppPage,
    AppDetailsActions,
    ToDoList,
    ToDoFooter
  },
  props: {
    projectId: String
  },
  created() {
    this.selectProject();
  },
  watch: {
    projectId: "selectProject"
  },
  computed: {
    ...mapGetters(["project"])
  },
  methods: {
    ...mapActions([TOGGLE_TODO, REMOVE_PROJECT]),
    selectProject() {
      this.$store.commit(SELECT_PROJECT, this.projectId);
      if (!this.project) {
        this.$router.replace(routes.NOT_FOUND.path);
      }
    },
    removeSelectedProject() {
      this.$router.back();
      this[REMOVE_PROJECT](this.projectId);
    },
    openToDo(todoId) {
      this.$router.push({ name: routes.TODO_DETAILS.name, params: { projectId: this.projectId, todoId } });
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

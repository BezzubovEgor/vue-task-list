<template>
  <AppPage>
    <template #header>{{ project.name }}</template>
    <ToDoList class="mt-3" :todos="project.todos" @toggle="toggleToDo"/>
    <template #footer>
      <ToDoFooter/>
    </template>
  </AppPage>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import AppPage from "../core/layout/AppPage";
import ToDoList from "./ToDoList";
import ToDoFooter from "./ToDoFooter";
import routes from "../../router/routes";
import { TOGGLE_TODO } from "../../store/actionTypes";
import { SELECT_PROJECT } from "../../store/mutationTypes";

export default {
  name: "ToDoPage",
  components: {
    AppPage,
    ToDoList,
    ToDoFooter
  },
  props: {
    projectId: String,
  },
  created() {
    this.selectProject();
  },
  watch: {
    projectId: "selectProject"
  },
  computed: {
    ...mapGetters(["project"]),
  },
  methods: {
    ...mapActions([TOGGLE_TODO]),
    selectProject() {
      this.$store.commit(SELECT_PROJECT, this.projectId);
      if (!this.project) {
        this.$router.replace(routes.NOT_FOUND.path);
      }
    }
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

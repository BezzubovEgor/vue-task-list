<template>
  <AppPage>
    <template #actions>
      <div class="d-flex justify-content-between actions px-2 pt-3 pb-1">
        <AppButton mode="default-secondary" @click="back">
          <i class="fas fa-arrow-left"/>
        </AppButton>
        <AppButton mode="default-secondary" @click="removeSelectedProject">
          <i class="fas fa-trash"/>
        </AppButton>
      </div>
    </template>
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
import AppButton from "../core/AppButton";
import ToDoList from "./ToDoList";
import ToDoFooter from "./ToDoFooter";
import routes from "../../router/routes";
import { SELECT_PROJECT, TOGGLE_TODO, REMOVE_PROJECT } from "../../store/mutationTypes";

export default {
  name: "ToDoPage",
  components: {
    AppPage,
    AppButton,
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
    back() {
      this.$router.back();
    },
    removeSelectedProject() {
      this.removeSelectedProject(this.project);
      this.back();
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
.actions i {
  font-size: 1.1rem;
}
</style>

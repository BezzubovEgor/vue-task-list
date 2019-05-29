<template>
  <AppPage v-if="todo">
    <template #actions>
      <AppDetailsActions @back="$router.back()" @remove="remove"/>
    </template>
    <AppSelector
        :value="this.projectId"
        :options="this.projects"
        :valueKey="'id'"
        :labelKey="'name'"
        @change="move"/>
    <ToDoDetailsForm :todo="todo" />
  </AppPage>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import AppPage from "../core/layout/AppPage";
import AppDetailsActions from "../core/layout/AppDetailsActions";
import AppSelector from "../core/AppSelector";
import ToDoDetailsForm from "./ToDoDetailsForm";
import { SELECT_PROJECT, SELECT_TODO, REMOVE_TODO, MOVE_TODO } from "../../store/mutationTypes";
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
    this.select();
  },
  watch: {
    todoId: "select",
    projectId: "select"
  },
  computed: {
    ...mapGetters(["todo", "project", "projects"])
  },
  methods: {
    ...mapActions([REMOVE_TODO, MOVE_TODO]),
    select() {
      this.$store.commit(SELECT_PROJECT, this.projectId);
      this.$store.commit(SELECT_TODO, this.todoId);

      if (!this.todo) {
        this.$router.replace(routes.NOT_FOUND.path);
      }
    },
    remove() {
      this.$router.back();
      this[REMOVE_TODO](this.todoId);
    },
    move(projectId) {
        this[MOVE_TODO]({
            to: projectId,
            from: this.projectId,
            todoId: this.todoId
        });
        this.$router.replace({
            name: routes.TODO_DETAILS.name,
            params: { projectId, todoId: this.todoId },
        });
    }
  }
};
</script>

<style scoped>
</style>

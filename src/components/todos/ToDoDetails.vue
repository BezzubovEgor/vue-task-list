<template>
  <AppPage v-if="todo">
    <template #actions>
      <AppDetailsActions @back="$router.back()" @remove="remove"/>
    </template>
    <AppBackground :src="require('../../assets/todoDetails.svg')">
      <AppSelector
        :value="this.projectId"
        :options="this.projects"
        :valueKey="'id'"
        :labelKey="'name'"
        @change="move"
      />
      <ToDoDetailsForm :todo="todo"/>
    </AppBackground>
  </AppPage>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import AppPage from "../core/layout/AppPage";
import AppDetailsActions from "../core/layout/AppDetailsActions";
import AppBackground from "../core/AppBackground";
import AppSelector from "../core/AppSelector";
import ToDoDetailsForm from "./ToDoDetailsForm";
import routes from "../../router/routes";
import { REMOVE_TODO, MOVE_TODO } from '../../store/modules/todos/mutationTypes';


export default {
  name: "ToDoDetails",
  components: {
    AppPage,
    AppDetailsActions,
    AppBackground,
    AppSelector,
    ToDoDetailsForm
  },
  props: {
    projectId: String,
    todoId: String
  },
  created() {
    this.check();
  },
  watch: {
    todoId: "check",
    projectId: "check"
  },
  computed: {
    ...mapGetters(["projects"]),
    todo() {
        return this.$store.getters.getProjectTodoById(this.todoId, this.projectId);
    },
  },
  methods: {
    ...mapActions([REMOVE_TODO, MOVE_TODO]),
    check() {
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
        projectId,
        todoId: this.todoId
      });
      this.$router.replace({
        name: routes.TODO_DETAILS.name,
        params: { projectId, todoId: this.todoId }
      });
    }
  }
};
</script>

<style scoped>
</style>

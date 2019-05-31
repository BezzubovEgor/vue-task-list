<template>
  <div class="todo-details-form">
    <AppSelector v-model="projectId" :options="projects" :valueKey="'id'" :labelKey="'name'"/>
    <AppTextarea
      focus
      required
      ref="title"
      class="todo-title"
      placeholder="What are you want to do?"
      v-model="title"
    />
    <div class="d-flex align-items-top">
      <i class="fas fa-align-left icon"/>
      <AppTextarea class="todo-description" placeholder="Describe your task" v-model="description"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { mapFields } from "vuex-map-fields";

import AppTextarea from "../core/AppTextarea";
import AppSelector from "../core/AppSelector";
import { SAVE_TODO_FORM } from "../../store/types";
import routes from "../../router/routes";

export default {
  name: "ToDoDetailsForm",
  components: {
    AppTextarea,
    AppSelector
  },
  props: {
    todo: Object
  },
  computed: {
    ...mapGetters(["projects"]),
    ...mapFields([
      "todos.todoForm.id",
      "todos.todoForm.title",
      "todos.todoForm.description",
      "todos.todoForm.projectId"
    ])
  },
  watch: {
    projectId: "changeUrl"
  },
  methods: {
    ...mapActions([SAVE_TODO_FORM]),
    changeUrl() {
      this.$router.replace({
        name: routes.TODO_DETAILS.name,
        params: { projectId: this.projectId, todoId: this.id }
      });
    }
  },
  beforeDestroy() {
    this[SAVE_TODO_FORM]();
  },
  mounted() {
    this.$nextTick(() => this.$refs.title.$el.focus());
  }
};
</script>

<style scoped>
.todo-details-form {
  background: rgba(255, 255, 255, 0.7);
}
.todo-title {
  font-size: 1.7rem;
  font-weight: 500;
  color: #2c3e50;
}
.todo-description {
  color: #495057;
}
.icon {
  padding: 0.375rem 0.75rem;
  color: rgba(0, 0, 0, 0.5);
}
</style>

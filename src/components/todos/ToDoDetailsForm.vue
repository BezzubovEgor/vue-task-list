<template>
  <div class="todo-details-form">
    <AppTextarea
      focus
      required
      ref="title"
      class="todo-title"
      placeholder="What are you want to do?"
      v-model="todo.title"
    />
    <div class="d-flex align-items-top">
      <i class="fas fa-align-left icon"/>
      <AppTextarea
        class="todo-description"
        placeholder="Describe your task"
        v-model="todo.description"
      />
    </div>
  </div>
</template>

<script>
import AppTextarea from "../core/AppTextarea";

export default {
  name: "ToDoDetailsForm",
  components: {
    AppTextarea
  },
  props: {
    todo: Object
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

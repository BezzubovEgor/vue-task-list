<template>
  <div>
    <AppInput
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
import AppInput from "../core/AppInput";
import AppTextarea from "../core/AppTextarea";

export default {
  name: "ToDoDetailsForm",
  components: {
    AppInput,
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
.todo-title {
  font-size: 1.7rem;
  font-weight: 500;
}
.todo-description {
  color: #495057;
}
.icon {
  padding: 0.375rem 0.75rem;
  color: rgba(0, 0, 0, 0.5);
}
</style>

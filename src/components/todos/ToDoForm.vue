<template>
  <form class="todo-form" @submit.prevent="submit">
    <div class="form-group mb-0">
      <input
        class="form-control todo-form-input"
        placeholder="What are you want to do?"
        v-model="title"
        required
      >
    </div>
    <FadeUp>
      <div class="form-group description" v-show="showDescription">
        <textarea
          class="form-control todo-form-input"
          placeholder="Describe your task"
          v-model="description"
        ></textarea>
      </div>
    </FadeUp>
    <div class="form-controls d-flex justify-content-between">
      <AppButton @click="showDescription = true">
        <i class="fas fa-align-left"/>
      </AppButton>
      <AppButton type="submit">Save</AppButton>
    </div>
  </form>
</template>

<script>
import FadeUp from "../core/animations/FadeUp";
import AppButton from "../core/AppButton";

export default {
  name: "ToDoForm",
  components: { FadeUp, AppButton },
  props: {
    todo: Object
  },
  data() {
    return {
      title: "",
      description: "",
      showDescription: false
    };
  },
  directives: {
    focus: {
      inserted: el => el.focus()
    }
  },
  methods: {
    submit() {
      if (!this.title) {
        return;
      }
      this.$emit("add", { title: this.title });
      this.title = "";
    }
  }
};
</script>

<style scoped>
.todo-form {
}
.todo-form-input {
  border: none;
  font-size: 0.9rem;
  font-weight: 600;
}
.todo-form-input:active,
.todo-form-input:focus {
  box-shadow: none;
  outline: none;
}
.description .todo-form-input {
  font-size: 0.8rem;
  overflow: hidden;
  resize: none;
  color: rgba(0, 0, 0, 0.65);
}
.description .todo-form-input::placeholder {
  color: rgba(0, 0, 0, 0.54);
}
</style>



<template>
  <form class="todo-form" @submit.prevent="submit">
    <div class="form-group mb-0">
      <AppInput
        placeholder="What are you want to do?"
        required
        focus
        v-model="title" />
    </div>
    <FadeUp>
      <div class="form-group description" v-show="showDescription">
        <AppTextarea
          :maxHeight="250"
          ref="description"
          placeholder="Describe your task"
          v-model="description" />
      </div>
    </FadeUp>
    <div class="form-controls d-flex justify-content-between mt-2">
      <AppButton @click="openDescription">
        <i class="fas fa-align-left"/>
      </AppButton>
      <AppButton type="submit">Save</AppButton>
    </div>
  </form>
</template>

<script>
import FadeUp from "../core/animations/FadeUp";
import AppButton from "../core/AppButton";
import AppInput from "../core/AppInput";
import AppTextarea from "../core/AppTextarea";

export default {
  name: "ToDoForm",
  components: { FadeUp, AppButton, AppInput, AppTextarea },
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
  methods: {
    submit() {
      if (!this.title) {
        return;
      }
      this.$emit("add", { title: this.title, description: this.description });
      this.title = "";
    },
    openDescription() {
      this.showDescription = true;
      this.$nextTick(() => this.$refs.description.$el.focus());
    }
  }
};
</script>

<style scoped>
</style>



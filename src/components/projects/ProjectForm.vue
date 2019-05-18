<template>
  <form class="project-form" @submit.prevent="submit">
    <div class="form-group mb-0">
      <input
        class="form-control project-form-input"
        placeholder="What project are you want to create?"
        required
        v-model="name"
        v-focus
      >
    </div>
    <div class="form-controls d-flex justify-content-end mt-2">
      <AppButton type="submit">Save</AppButton>
    </div>
  </form>
</template>

<script>
import focus from "../../directives/focus";
import AppButton from "../core/AppButton";

export default {
  components: { AppButton },
  props: {
    project: Object
  },
  data() {
    return {
      name: "",
    };
  },
  directives: {
    focus,
  },
  methods: {
    submit() {
      if (!this.name) {
        return;
      }
      this.$emit("add", { name: this.name });
      this.name = "";
    },
  }
};
</script>

<style scoped>
.project-form-input {
  border: none;
  font-size: 0.9rem;
  font-weight: 600;
}
.project-form-input:active,
.project-form-input:focus {
  box-shadow: none;
  outline: none;
}
</style>



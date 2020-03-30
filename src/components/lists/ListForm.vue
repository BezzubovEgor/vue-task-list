<template>
  <form class="list-form" @submit.prevent="submit">
    <div class="form-group mb-0">
      <input
        class="form-control list-form-input"
        placeholder="What list do you want to create?"
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
    list: Object
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
.list-form-input {
  border: none;
  font-size: 0.9rem;
  font-weight: 600;
}
.list-form-input:active,
.list-form-input:focus {
  box-shadow: none;
  outline: none;
}
</style>



<template>
  <textarea
    v-focus="focus"
    v-bind="$props"
    :class="`form-control app-form-input ${$props.class || ''}`"
    :value="value"
    @input="$emit('input', $event.target.value)"
  ></textarea>
</template>

<script>
import focus from "../../directives/focus";

export default {
  name: "AppTextarea",
  props: {
    value: [String, Number],
    focus: Boolean,
    maxHeight: Number
  },
  directives: {
    focus
  },
  methods: {
    resizeTextarea({ target }) {
      target.style.height = "auto";
      if (this.maxHeight && target.scrollHeight > this.maxHeight) {
        target.style.height = this.maxHeight + "px";
      } else {
        target.style.height = target.scrollHeight + "px";
      }
    }
  },
  mounted() {
    this.$el.scrollTo(0, 0);
    this.$el.addEventListener("input", this.resizeTextarea);
    this.resizeTextarea({ target: this.$el });
  },
  beforeDestroy() {
    this.$el.removeEventListener("input", this.resizeTextarea);
  }
};
</script>

<style scoped>
.app-form-input {
  font-size: 0.8rem;
  overflow: hidden;
  resize: none;
  color: rgba(0, 0, 0, 0.55);
  border: none;
  font-size: 0.9rem;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.7);
}
.app-form-input::placeholder {
  color: rgba(0, 0, 0, 0.45);
}
.app-form-input:active,
.app-form-input:focus {
  box-shadow: none;
  outline: none;
}
</style>

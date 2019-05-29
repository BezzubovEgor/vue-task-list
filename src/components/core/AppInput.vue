<template>
  <input
    v-focus="focus"
    v-bind="$props"
    :class="`form-control app-form-input ${$props.class || ''}`"
    :value="value"
    @input="$emit('input', $event.target.value)"
  >
</template>

<script>
import focus from "../../directives/focus";

export default {
  name: "AppInput",
  props: {
    value: [ String, Number ],
    focus: Boolean
  },
  directives: {
    focus
  }
};
</script>

<style scoped>
.app-form-input {
  border: none;
  font-size: 0.9rem;
  font-weight: 600;
}
.app-form-input:active,
.app-form-input:focus {
  box-shadow: none;
  outline: none;
}
</style>

<template>
  <span @click="$emit('click', !value)">
    <span class="checkbox" :class="{ checked: this.value }">
      <i class="fas fa-check" />
    </span>
  </span>
</template>

<script>
export default {
  name: "AppCheckbox",
  props: {
    value: Boolean
  }
};
</script>

<style scoped>
.checkbox {
  height: 1.3rem;
  width: 1.3rem;
  display: inline-block;
  border-radius: 1.5rem;
  border: 2px solid #bbbec4;
  text-align: center;
  margin-right: 1rem;
  color: white;
  transition: all ease-out .3s;
  font-size: .8rem;
}
.checked {
  background: transparent;
  color: #007bff;
  border-color: transparent;
}
</style>

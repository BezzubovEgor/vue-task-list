<template>
  <AppButton class="app-add-button__button" mode="primary" @click="$emit('click')"/>
</template>

<script>
import AppButton from "./AppButton";

export default {
  name: "AppAddButton",
  components: {
    AppButton
  }
};
</script>

<style scoped>
.app-add-button__button {
  position: fixed;
  bottom: 5rem;
  right: 1rem;
  height: 3.6rem;
  width: 3.6rem;
  font-size: 15px;
  box-shadow: 2px 3px 5px rgba(30, 30, 30, 0.3);
}

.app-add-button__button:before,
.app-add-button__button:after {
  content: "";
  position: absolute;
  display: block;
  background-color: white;
  top: 50%;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.15em;
}

.app-add-button__button:before {
  height: 1.8em;
  width: 0.3em;
  opacity: .6;
}

.app-add-button__button:after {
  height: 0.3em;
  width: 1.8em;
}
</style>

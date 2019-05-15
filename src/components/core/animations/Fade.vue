<template>
  <transition name="fade">
    <slot/>
  </transition>
</template>

<script>
export default {
  name: "Fade"
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

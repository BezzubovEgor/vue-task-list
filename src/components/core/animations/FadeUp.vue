<template>
  <transition name="fade-up">
    <slot/>
  </transition>
</template>

<script>
export default {
  name: "FadeUp"
};
</script>

<style scoped>
.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.3s;
}

.fade-up-enter,
.fade-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>

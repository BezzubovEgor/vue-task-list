<template>
  <div class="layout d-flex flex-column justify-content-between align-items-center">
    <slot name="header"/>
    <div class="container-fluid content flex-grow-1">
      <slot name="content"/>
    </div>
    <slot name="footer"/>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.layout {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
}
.content {
    width: 100%;
    position: relative;
}
</style>

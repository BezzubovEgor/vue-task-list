<template>
  <div class="row d-flex flex-column justify-content-between align-items-center page">
    <div class="col-sm-10 col-md-7 col-lg-5 text-left">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.page {
  height: 100%;
  width: 100%;
  position: absolute;
}
</style>

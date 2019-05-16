<template>
  <div class="row d-flex flex-column justify-content-between align-items-center page">
    <div class="col-sm-10 col-md-7 col-lg-5 text-left">
      <h1 class="display-4 mt-3">
        <slot name="header"/>
      </h1>
      <slot/>
    </div>
    <slot name="footer"/>
  </div>
</template>

<script>
export default {
  name: "AppPage"
};
</script>

<style scoped>
.page {
  height: 100%;
  width: 100%;
  position: absolute;
}
</style>

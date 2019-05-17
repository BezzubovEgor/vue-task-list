<template>
  <div class="page row d-flex flex-column justify-content-between align-items-center flex-nowrap">
    <div class="col-sm-10 col-md-7 col-lg-5 text-left">
      <slot name="actions"/>
      <h1 class="mt-3 ml-3">
        <slot name="header"/>
      </h1>
      <div class="body">
        <slot/>
      </div>
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
h1 {
  font-size: 1.7rem;
  font-weight: 500;
}
</style>

<template>
  <div class="page row d-flex flex-column justify-content-between align-items-streatch flex-nowrap">
    <div class="actions p-2">
      <slot name="actions"/>
    </div>
    <div class="content pb-4 flex-grow-1 col-sm-10 col-md-7 col-lg-5 text-left">
      <h1 class="mt-3 ml-3">
        <slot name="header"/>
      </h1>
      <div class="body">
        <slot/>
      </div>
    </div>
    <div class="footer">
      <slot name="footer"/>
    </div>
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
  overflow: scroll;
}
.content {
  overflow: auto;
}
h1 {
  font-size: 1.7rem;
  font-weight: 500;
}
.actions {
  background: white;
  z-index: 10000;
}
.footer {
  position: relative;
  background: white;
}
</style>

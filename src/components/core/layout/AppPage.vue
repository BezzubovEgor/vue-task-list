<template>
  <div class="page row d-flex flex-column justify-content-between align-items-center flex-nowrap">
    <div class="actions" v-show="$slots.actions">
      <div class="row m-0 justify-content-center">
        <div class="p-2 col-sm-10 col-md-7 col-lg-5">
          <slot name="actions"/>
        </div>
      </div>
    </div>
    <div class="content pb-4 flex-grow-1 col-sm-10 col-md-7 col-lg-5 text-left">
      <h1 class="mt-3 ml-3">
        <slot name="header"/>
      </h1>
      <div class="body">
        <slot/>
      </div>
    </div>
    <div class="footer" v-show="$slots.footer">
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
}
.content {
    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* IE 10+ */
}
.content::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
}
h1 {
  font-size: 1.7rem;
  font-weight: 500;
}
.actions {
  background: white;
  z-index: 10000;
  width: 100%;
}
.footer {
  position: relative;
  background: white;
  width: 100%;
}
</style>

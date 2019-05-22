<template>
  <div>
    <FadeInOut appear>
      <div class="image-container d-flex justify-content-center align-items-center" v-if="show">
        <div class="col-sm-11 col-md-6 col-lg-4">
          <img class="image" :src="src">
        </div>
      </div>
    </FadeInOut>
    <slot/>
  </div>
</template>

<script>
import FadeInOut from "./animations/FadeInOut";

export default {
  components: {
    FadeInOut
  },
  props: {
    show: {
      type: Boolean,
      default: true,
    },
    src: [Object, String]
  }
};
</script>

<style scoped>
.image-container {
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -100;
}
.image {
  width: 100%;
}
</style>

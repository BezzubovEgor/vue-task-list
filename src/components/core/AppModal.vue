<template>
  <div>
    <FadeInOut>
      <div class="app-modal-overflow" v-show="isOpen" @click="$emit('close')"></div>
    </FadeInOut>
    <FadeUp>
      <div class="app-modal-wrapper container-fluid" v-if="isOpen">
        <div class="row justify-content-center">
          <div class="app-modal" :class="modalClass">
            <slot/>
            <div class="app-modal-footer d-flex justify-content-end" v-if="footer">
              <a @click.prevent="$emit('close')">Close</a>
            </div>
          </div>
        </div>
      </div>
    </FadeUp>
  </div>
</template>

<script>
import FadeInOut from "./animations/FadeInOut";
import FadeUp from "./animations/FadeUp";

export default {
  name: "AppModal",
  components: {
    FadeInOut,
    FadeUp
  },
  props: {
    isOpen: Boolean,
    footer: {
      default: true,
      type: Boolean
    },
    modalClass: {
      default: "col-12 col-sm-9 col-md-7 col-lg-5",
      type: String
    }
  },
  created() {
    document.addEventListener("backbutton", this.closeEventHandler);
  },
  destroyed() {
    document.removeEventListener("backbutton", this.closeEventHandler);
  },
  methods: {
    closeEventHandler() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
.app-modal-overflow {
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10000;
}
.app-modal-wrapper {
  bottom: 0;
  left: 0;
  position: fixed;
  z-index: 10001;
}
.app-modal {
  background: white;
  box-shadow: 0 -3px 3px rgba(30, 30, 30, 0.1);
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  padding: 1.5rem;
}
.app-modal-footer {
  padding: 0.3rem 1rem;
}
.app-modal-footer a {
  color: #007bff;
  background: transparent;
  border: none;
  cursor: pointer;
}
</style>

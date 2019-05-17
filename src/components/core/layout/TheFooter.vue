<template>
  <div class="footer container-fluid">
    <div class="row justify-content-center">
      <div class="col-lg-5 col-md-7 col-sm-9 d-flex justify-content-between">
        <AppButton mode="default-secondary" class="bars-button" @click="isMenuOpen = true">
          <i class="fas fa-bars"/>
        </AppButton>
      </div>
    </div>
    <AppModal :footer="false" :isOpen="isMenuOpen" @close="isMenuOpen = false">
      <AppMenu :menu="menu" @select="isMenuOpen = false"/>
    </AppModal>
  </div>
</template>

<script>
import AppButton from "../AppButton";
import AppModal from "../AppModal";
import AppMenu from "../AppMenu";

export default {
  name: "TheFooter",
  components: {
    AppButton,
    AppModal,
    AppMenu,
  },
  props: {
    menu: Array
  },
  data() {
    return {
      isMenuOpen: false
    };
  }
};
</script>

<style scoped>
.footer {
  width: 100%;
  padding: 1.2rem;
  font-size: 0.7rem;
  background: white;
  border-top: 1px solid #e9ecef;
}
.fa-bars {
  font-size: 1.2rem;
}
</style>

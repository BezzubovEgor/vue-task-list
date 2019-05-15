<template>
  <div class="footer container-fluid">
    <div class="row justify-content-center">
      <div class="col-lg-5 col-md-7 col-sm-9 d-flex justify-content-between">
        <Button mode="default-secondary" class="bars-button" @click="isMenuOpen = true">
          <i class="fas fa-bars"/>
        </Button>
      </div>
    </div>
    <Modal :footer="false" :isOpen="isMenuOpen" @close="isMenuOpen = false">
      <Menu :menu="menu" @select="isMenuOpen = false"/>
    </Modal>
  </div>
</template>

<script>
/* eslint-disable */
import Button from "../Button";
import Modal from "../Modal";
import Menu from "../Menu";

export default {
  name: "Footer",
  components: {
    Button,
    Modal,
    Menu,
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
  padding: 1rem;
  font-size: 0.7rem;
  box-shadow: 0 -3px 3px rgba(30, 30, 30, 0.1);
}
.fa-bars {
  font-size: 1.1rem;
}
</style>

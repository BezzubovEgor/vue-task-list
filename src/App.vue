<template>
  <div id="app">
    <Layout>
      <template #content>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </template>

      <template #footer>
        <Footer :menu="mainMenu"/>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./components/core/layout/Layout";
import Footer from "./components/core/layout/Footer";

import router from "./router";
import mainMenu from "./menus/main";

export default {
  name: "app",
  components: {
    Layout,
    Footer
  },
  router,
  data() {
    return {
      mainMenu
    };
  }
};
</script>

<style scoped>
#app {
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

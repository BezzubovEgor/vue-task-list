<template>
  <div id="app">
    <TheLayout>
      <template #content>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </template>

      <template #footer>
        <TheFooter :menu="mainMenu"/>
      </template>
    </TheLayout>
  </div>
</template>

<script>
import TheLayout from "./components/core/layout/TheLayout";
import TheFooter from "./components/core/layout/TheFooter";

import router from "./router";
import mainMenu from "./menus/main";

export default {
  name: "App",
  components: {
    TheLayout,
    TheFooter,
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

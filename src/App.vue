<template>
  <div id="app">
    <TheLayout v-if="loaded">
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

import store from "./store";
import router from "./router";
import mainMenu from "./menus/main";
import { mapActions, mapGetters } from 'vuex';
import { LOAD_PROJECTS, LOAD_TODOS } from './store/types';

export default {
  name: "App",
  components: {
    TheLayout,
    TheFooter,
  },
  store,
  router,
  data() {
    return {
      mainMenu
    };
  },
  created() {
    this[LOAD_PROJECTS]();
    this[LOAD_TODOS]();
  },
  methods: {
    ...mapActions([LOAD_PROJECTS, LOAD_TODOS]),
  },
  computed: mapGetters(['loaded']),
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
  transition: all .3s;
  overflow: hidden;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

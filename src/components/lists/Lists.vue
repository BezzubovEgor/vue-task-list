<template>
  <AppBackground :src="require('../../assets/lists.svg')">
    <transition-group name="fade" appear class="row">
      <ListItem
        class="col-6 p-0"
        v-for="list in lists"
        v-bind="list"
        @select="select(list.id)"
        @mark="toggleMark(list.id)"
        :key="list.id"
      />
    </transition-group>
  </AppBackground>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import { TOGGLE_MARK_LIST } from '../../store/types';
import routes from "../../router/routes";
import AppBackground from "../core/AppBackground";
import ListItem from "./ListItem";

export default {
  components: {
    AppBackground,
    ListItem,
  },
  methods: {
    ...mapActions({ toggleMark: TOGGLE_MARK_LIST }),
    select(listId) {
      if (this.isBulkMode) {
        this.toggleMark(listId);
      } else {
        this.$router.push({ name: routes.LIST.name, params: { listId } });
      }
    },
  },
  computed: {
    ...mapGetters(["lists", "isBulkMode"])
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
  bottom: 0;
}
.fade-move {
  transition: transform .3s;
}
.fade-enter,
.fade-leave-to {
  bottom: 50px;
  opacity: 0;
}
</style>

<template>
  <AppBackground :src="require('../../assets/projects.svg')">
    <transition-group name="fade" appear class="row">
      <ProjectListItem
        class="col-6 p-0"
        v-for="project in projects"
        v-bind="project"
        @select="select(project.id)"
        @mark="toggleMark(project.id)"
        :key="project.id"
      />
    </transition-group>
  </AppBackground>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import AppBackground from "../core/AppBackground";
import ProjectListItem from "./ProjectListItem";
import routes from "../../router/routes";
import { TOGGLE_MARK_PROJECT } from '../../store/types';

export default {
  components: {
    AppBackground,
    ProjectListItem,
  },
  methods: {
    ...mapActions({ toggleMark: TOGGLE_MARK_PROJECT }),
    select(projectId) {
      if (this.isBulkMode) {
        this.toggleMark(projectId);
      } else {
        this.$router.push({ name: routes.PROJECT.name, params: { projectId } });
      }
    },
  },
  computed: {
    ...mapGetters(["projects", "isBulkMode"])
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

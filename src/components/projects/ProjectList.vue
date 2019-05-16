<template>
  <AppTwoColumns>
    <template #left>
      <transition-group name="fade" appear>
        <AppCard
          v-for="{ id, name, todo, done } in even"
          interactive
          @select="select(id)"
          :key="id"
        >
          <template #header>{{ name }}</template>
          <div>
            To Do:
            <span class="badge">{{ todo }}</span>
          </div>
          <div>
            Done:
            <span class="badge">{{ done }}</span>
          </div>
        </AppCard>
      </transition-group>
    </template>
    <template #right>
      <transition-group name="fade" appear>
        <AppCard v-for="{ id, name, todo, done } in odd" interactive @select="select(id)" :key="id">
          <template #header>{{ name }}</template>
          <div>
            To Do:
            <span class="badge">{{ todo }}</span>
          </div>
          <div>
            Done:
            <span class="badge">{{ done }}</span>
          </div>
        </AppCard>
      </transition-group>
    </template>
  </AppTwoColumns>
</template>

<script>
import { mapGetters } from "vuex";

import AppCard from "../core/AppCard";
import AppTwoColumns from "../core/AppTwoColumns";
import routes from "../../router/routes";

export default {
  components: {
    AppCard,
    AppTwoColumns
  },
  methods: {
    select(projectId) {
      this.$router.push({ name: routes.PROJECT.name, params: { projectId } });
    }
  },
  computed: {
    ...mapGetters(["projects"]),
    even() {
      return this.projects.filter((item, index) => index % 2 === 0);
    },
    odd() {
      return this.projects.filter((item, index) => index % 2 !== 0);
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
  bottom: 0;
}
.fade-enter,
.fade-leave-to {
  bottom: -50px;
  opacity: 0;
}
</style>

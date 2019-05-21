<template>
  <AppCard interactive @select="$emit('select')">
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
</template>

<script>
import AppCard from "../core/AppCard";

export default {
  components: {
    AppCard
  },
  props: {
      name: String,
      todo: Number,
      done: Number,
  },
};
</script>

<style>
</style>

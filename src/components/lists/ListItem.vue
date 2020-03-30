<template>
  <div>
    <AppCard interactive @select="$emit('select')" @mark="$emit('mark')" class="m-1" :class="{ marked }">
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
  </div>
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
    marked: Boolean,
  },
};
</script>

<style scoped>
.marked {
  background: rgba(81, 75, 192, .9);
  color: white;
  border-color: rgba(81, 75, 192, .9);
}
</style>

<template>
  <AppRow>
    <div class="col-6 pl-2">
      <slot name="left"/>
    </div>
    <div class="col-6 pr-2">
      <slot name="right"/>
    </div>
  </AppRow>
</template>

<script>
import AppRow from "./AppRow";

export default {
  components: {
    AppRow
  }
};
</script>

<style scoped>
.col-6 {
  padding: 0;
}
</style>

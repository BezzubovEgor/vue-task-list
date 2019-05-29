<template>
  <div class="d-flex justify-content-between actions px-2 pt-3 pb-1">
    <AppButton mode="default-secondary" @click="$emit('back')">
      <i class="fas fa-chevron-left"/>
    </AppButton>
    <AppButton mode="default-secondary" @click="$emit('remove')">
      <i class="far fa-trash-alt"/>
    </AppButton>
  </div>
</template>

<script>
import AppButton from "../AppButton";

export default {
    name: "AppDetailsActions",
    components: {
        AppButton,
    }
};
</script>

<style scoped>
.actions i {
  font-size: 1.1rem;
}
</style>

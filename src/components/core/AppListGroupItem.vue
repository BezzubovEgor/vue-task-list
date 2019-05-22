<template>
  <div class="list-group-item p-3" :class="className">
    <slot/>
  </div>
</template>

<script>
export default {
    name: "AppListGroupItem",
    props: {
        className: {
            default: "text-left",
            type: String,
        }
    }
};
</script>

<style scoped>
.list-group-item {
  border: none;
  border-top: 1px solid #e9ecef;
  background: rgba(255, 255, 255, .7);
}
.list-group-item:first-child {
  border-top: none;
}
.list-group-item:last-child {
  border-bottom: 1px solid #e9ecef;
}
.list-group-item:hover {
  background: rgba(255, 255, 255, .7);
}
</style>

<template>
  <div class="list-group text-left">
    <router-link
      class="list-group-item list-group-item-action"
      v-for="(menuItem, index) of menu"
      :to="menuItem.to"
      :key="menuItem.key || index"
      @click.native="$emit('select', menuItem.key)"
    ><i :class="menuItem.icon"/> {{ menuItem.title }}</router-link>
  </div>
</template>

<script>
export default {
  name: "AppMenu",
  props: {
    menu: Array
  },
};
</script>

<style scoped>
.list-group-item {
  border: none;
  border-top: 1px solid #e9ecef;
  font-size: .8rem;
  font-weight: 600;
}
.list-group-item:first-child {
  border-top: none;
}
.list-group-item:hover,
.list-group-item:active,
.list-group-item:focus {
  background: transparent;
}
i {
    margin-right: 1.5rem;
}
</style>

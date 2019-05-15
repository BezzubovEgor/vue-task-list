<template>
  <div class="header-wrapper d-flex justify-content-center">
    <ul class="header nav text-center d-flex flex-row justify-content-center">
      <li v-for="menuItem in menu" :key="menuItem.key" class="nav-item">
        <router-link :to="menuItem.to" class="nav-link">
          <span :title="menuItem.title" :class="`fas ${menuItem.icon}`"/>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    menu: Array
  }
};
</script>

<style scoped>
.header-wrapper {
  width: 100%;
  padding: 1rem;
}

.header {
  width: 100%;
  font-size: 1.2rem;
  padding: 1rem;
  border-radius: .5rem;
  box-shadow: 0 2px 4px rgba(30, 30, 30, 0.2);
}

.nav-link {
  color: #666;
}
</style>

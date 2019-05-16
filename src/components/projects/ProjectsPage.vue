<template>
  <AppPage>
    <template #header>Projects</template>
    <ProjectList/>
  </AppPage>
</template>

<script>
import AppPage from "../core/layout/AppPage";
import ProjectList from "./ProjectList";

export default {
  components: {
    AppPage,
    ProjectList
  }
};
</script>

<style>
</style>

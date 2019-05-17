<template>
  <AppPage>
    <template #header>Projects</template>
    <ProjectList/>
    <template #footer>
      <ProjectFooter/>
    </template>
  </AppPage>
</template>

<script>
import AppPage from "../core/layout/AppPage";
import ProjectList from "./ProjectList";
import ProjectFooter from "./ProjectFooter";

export default {
  components: {
    AppPage,
    ProjectList,
    ProjectFooter,
  }
};
</script>

<style>
</style>

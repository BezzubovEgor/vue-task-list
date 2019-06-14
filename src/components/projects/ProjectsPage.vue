<template>
  <AppPage>
    <template #actions>
      <ProjectActions />
    </template>
    <template #header>Your projects</template>
    <ProjectList/>
    <template #footer>
      <ProjectFooter/>
    </template>
  </AppPage>
</template>

<script>
import AppPage from "../core/layout/AppPage";
import ProjectActions from "./ProjectActions";
import ProjectList from "./ProjectList";
import ProjectFooter from "./ProjectFooter";

export default {
  components: {
    AppPage,
    ProjectActions,
    ProjectList,
    ProjectFooter,
  }
};
</script>

<style>
</style>

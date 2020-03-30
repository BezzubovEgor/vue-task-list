<template>
  <AppPage>
    <template #actions>
      <ListsActions />
    </template>
    <template #header>Your lists</template>
    <Lists/>
    <template #footer>
      <ListsFooter/>
    </template>
  </AppPage>
</template>

<script>
import AppPage from "../core/layout/AppPage";
import Lists from "./Lists";
import ListsActions from "./ListsActions";
import ListsFooter from "./ListsFooter";

export default {
  components: {
    AppPage,
    Lists,
    ListsActions,
    ListsFooter,
  }
};
</script>

<style>
</style>

<template>
  <div>
    <AppAddButton  @click="isFormOpen = true"/>

    <AppModal :isOpen="isFormOpen" :footer="false" @close="isFormOpen = false">
      <ProjectForm @add="add"/>
    </AppModal>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import AppModal from "../core/AppModal";
import AppAddButton from "../core/AppAddButton";
import ProjectForm from "./ProjectForm";
import { ADD_PROJECT } from '../../store/types';


export default {
  components: {
    AppAddButton,
    AppModal,
    ProjectForm,
  },
  data() {
    return {
      isFormOpen: false,
    };
  },
  methods: {
    ...mapActions([ADD_PROJECT]),
    add(project) {
      this.$data.isFormOpen = false;
      this[ADD_PROJECT](project);
    }
  }
};
</script>

<style scoped>
</style>

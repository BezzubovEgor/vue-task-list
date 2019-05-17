<template>
  <div class="project-footer d-flex justify-content-center">
    <div class="add-button d-flex justify-content-center">
      <AppButton mode="primary" @click="isFormOpen = true">
        <span class="plus pr-3">+</span> New project
      </AppButton>
    </div>

    <AppModal :isOpen="isFormOpen" :footer="false" @close="isFormOpen = false">
      <ProjectForm @add="add"/>
    </AppModal>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import AppModal from "../core/AppModal";
import AppButton from "../core/AppButton";
import ProjectForm from "./ProjectForm";
import { ADD_PROJECT } from '../../store/mutationTypes';

export default {
  components: {
    AppButton,
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
.project-footer {
  width: 100%;
  position: relative;
  height: 1rem;
}
.plus {
  font-size: 1.9rem;
  line-height: 1rem;
}
.add-button {
  position: absolute;
  transform: translateY(-20%);
  width: 100%;
}
.additional-controls {
  padding: 0.8rem;
}
.additional-controls .fas {
  font-size: 1.2rem;
}
</style>

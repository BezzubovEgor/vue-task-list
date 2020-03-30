<template>
  <div>
    <AppAddButton  @click="isFormOpen = true"/>

    <AppModal :isOpen="isFormOpen" :footer="false" @close="isFormOpen = false">
      <ListForm @add="add"/>
    </AppModal>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import { ADD_LIST } from '../../store/types';
import AppModal from "../core/AppModal";
import AppAddButton from "../core/AppAddButton";
import ListForm from "./ListForm";


export default {
  components: {
    AppAddButton,
    AppModal,
    ListForm,
  },
  data() {
    return {
      isFormOpen: false,
    };
  },
  methods: {
    ...mapActions([ADD_LIST]),
    add(list) {
      this.$data.isFormOpen = false;
      this[ADD_LIST](list);
    }
  }
};
</script>

<style scoped>
</style>

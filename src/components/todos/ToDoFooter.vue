<template>
  <div>
    <AppAddButton @click="isFormOpen = true" />

    <AppModal :isOpen="isFormOpen" :footer="false" @close="isFormOpen = false">
      <ToDoForm @add="add"/>
    </AppModal>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import { ADD_TODO } from '../../store/types';
import AppModal from "../core/AppModal";
import AppAddButton from "../core/AppAddButton";
import ToDoForm from "./ToDoForm";


export default {
  components: {
    ToDoForm,
    AppAddButton,
    AppModal
  },
  data() {
    return {
      isFormOpen: false
    };
  },
  methods: {
    ...mapActions([ADD_TODO]),
    add(todo) {
      const { listId } = this.$router.currentRoute.params;
      this.$data.isFormOpen = false;
      this[ADD_TODO]({ ...todo, listId });
    }
  },
};
</script>

<style scoped>
</style>

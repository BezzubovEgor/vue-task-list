<template>
  <div class="todo-footer d-flex justify-content-center">
    <div class="add-button d-flex justify-content-center">
      <AppButton mode="primary" @click="isFormOpen = true">
        <span class="plus">+</span> new task
      </AppButton>
    </div>

    <AppModal :isOpen="isFormOpen" :footer="false" @close="isFormOpen = false">
      <ToDoForm @add="add"/>
    </AppModal>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import AppModal from "../core/AppModal";
import AppButton from "../core/AppButton";
import ToDoForm from "./ToDoForm";
import { ADD_TODO } from "../../store/actionTypes";

export default {
  components: {
    ToDoForm,
    AppButton,
    AppModal
  },
  data() {
    return {
      isFormOpen: false,
    };
  },
  methods: {
    ...mapActions([ADD_TODO]),
    add(todo) {
      this.$data.isFormOpen = false;
      this.addToDo(todo);
    }
  }
};
</script>

<style scoped>
.todo-footer {
  width: 100%;
  position: relative;
  height: 1rem;
}
.plus {
  padding-right: 0.5rem;
  font-size: 1.7rem;
  line-height: 1rem;
}
.add-button {
  position: absolute;
  transform: translateY(-10%);
  width: 100%;
}
.additional-controls {
  padding: 0.8rem;
}
.additional-controls .fas {
  font-size: 1.2rem;
}
</style>

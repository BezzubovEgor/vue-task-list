<template>
  <div class="todo-footer d-flex justify-content-center">
    <div class="add-button d-flex justify-content-center">
      <Button mode="primary" @click="isFormOpen = true" >
        <span class="plus">+</span> new task
      </Button>
    </div>

    <Modal :isOpen="isFormOpen" :footer="false" @close="isFormOpen = false">
      <ToDoForm @add="add"/>
    </Modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import Modal from "../core/Modal";
import Button from "../core/Button";
import ToDoForm from "./ToDoForm";
import todoStore from "../../store/todo";

export default {
  components: {
    ToDoForm,
    Button,
    Modal,
  },
  store: todoStore,
  data() {
    return {
      isFormOpen: false,
      isMenuOpen: false,
      menu: [{ title: 'Some menu item' }]
    };
  },
  methods: {
    ...mapActions(["addToDo"]),
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

<template>
  <div class="todo-item" v-bind:class="todoClass" @click="$emit('toggle')"><AppCheckbox :value="done"/>{{ title }}</div>
</template>

<script>
import AppCheckbox from "../core/AppCheckbox";

export default {
  name: "ToDoItem",
  components: { AppCheckbox },
  props: {
    title: {
      type: String,
      required: true
    },
    done: Boolean
  },
  computed: {
    todoClass() {
      return {
        done: this.done
      };
    }
  }
};
</script>

<style scoped>
.done {
  text-decoration: line-through;
}

.todo-item {
  cursor: pointer;
  font-size: .9rem;
  font-weight: 500;
  color: rgba(0,0,0,.72);
}

</style>

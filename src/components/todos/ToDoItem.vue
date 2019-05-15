<template>
  <div class="todo-item" v-bind:class="todoClass" @click="$emit('toggle')"><Checkbox :value="done"/>{{ title }}</div>
</template>

<script>
import Checkbox from "../core/Checkbox";

export default {
  name: "ToDoItem",
  components: { Checkbox },
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
  font-size: .8rem;
  font-weight: 500;
  color: rgba(0,0,0,.72);
}

</style>

<template>
  <div class="todo-item d-flex" v-bind:class="todoClass" @click="$emit('toggle')">
    <AppCheckbox :value="done"/>
    <div class="text-wrapper">
      <div class="title">{{ title }}</div>
      <div class="desc mt-1" v-show="description">
        <div class="desc-line" v-for="(line, index) of descriptionLines" :key="index">{{line}}</div>
      </div>
    </div>
  </div>
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
    description: String,
    done: Boolean
  },
  computed: {
    todoClass() {
      return {
        done: this.done
      };
    },
    descriptionLines() {
      if (this.description) {
        return this.description.split("\n").slice(0, 2);
      }
      return undefined;
    }
  }
};
</script>

<style scoped>
.done {
  text-decoration: line-through;
}

.text-wrapper {
  flex-basis: 100%;
  min-width: 0;
}

.todo-item {
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
}

.title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.desc {
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.55);
}

.desc-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
}
</style>

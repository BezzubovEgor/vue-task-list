<template>
  <AppListGroup>
    <transition-group name="fade" appear>
      <AppListGroupItem v-for="todo in todos" :key="todo.id">
        <ToDoItem @toggle="$emit('toggle', todo.id)" v-bind="todo"/>
      </AppListGroupItem>
    </transition-group>
  </AppListGroup>
</template>

<script>
import AppListGroup from "../core/AppListGroup";
import AppListGroupItem from "../core/AppListGroupItem";
import ToDoItem from "./ToDoItem";

export default {
  name: "ToDoList",
  components: {
    AppListGroup,
    AppListGroupItem,
    ToDoItem
  },
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  mixins: [],
};
</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
  bottom: 0;
}
.fade-enter,
.fade-leave-to {
  bottom: -50px;
  opacity: 0;
}
</style>

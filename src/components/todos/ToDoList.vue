<template>
  <AppBackground :src="require('../../assets/todo.svg')">
    <AppListGroup v-if="todos.length">
      <transition-group name="fade" appear>
        <AppListGroupItem v-for="todo in todos" :key="todo.id">
          <ToDoListItem @toggle="$emit('toggle', todo.id)" @click="$emit('open', todo.id)" v-bind="todo"/>
        </AppListGroupItem>
      </transition-group>
    </AppListGroup>
  </AppBackground>
</template>

<script>
import AppListGroup from "../core/AppListGroup";
import AppListGroupItem from "../core/AppListGroupItem";
import AppBackground from "../core/AppBackground";
import ToDoListItem from "./ToDoListItem";

export default {
  name: "ToDoList",
  components: {
    AppListGroup,
    AppListGroupItem,
    AppBackground,
    ToDoListItem
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
.fade-move {
  transition: transform 0.3s;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
  bottom: 0;
}
.fade-enter,
.fade-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}
</style>

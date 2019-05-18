<template>
  <div>
    <FadeInOut>
      <div
        class="image-container d-flex justify-content-center align-items-center"
        v-if="!todos.length"
      >
        <div class="col-sm-11 col-md-6 col-lg-4">
          <img class="image" src="../../assets/todo.svg">
        </div>
      </div>
    </FadeInOut>
    <AppListGroup v-if="todos.length">
      <transition-group name="fade" appear>
        <AppListGroupItem v-for="todo in todos" :key="todo.id">
          <ToDoItem @toggle="$emit('toggle', todo.id)" v-bind="todo"/>
        </AppListGroupItem>
      </transition-group>
    </AppListGroup>
  </div>
</template>

<script>
import AppListGroup from "../core/AppListGroup";
import AppListGroupItem from "../core/AppListGroupItem";
import FadeInOut from "../core/animations/FadeInOut";
import ToDoItem from "./ToDoItem";

export default {
  name: "ToDoList",
  components: {
    AppListGroup,
    AppListGroupItem,
    FadeInOut,
    ToDoItem
  },
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  mixins: []
};
</script>


<style scoped>
.image-container {
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.image {
  width: 100%;
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

<template>
  <ListGroup>
    <transition-group name="fade" appear>
      <ListGroupItem v-for="todo in todos" :key="todo.id">
        <ToDoItem @toggle="$emit('toggle', todo.id)" v-bind="todo"/>
      </ListGroupItem>
    </transition-group>
  </ListGroup>
</template>

<script>
import ListGroup from "../core/ListGroup";
import ListGroupItem from "../core/ListGroupItem";
import ToDoItem from "./ToDoItem";

export default {
  name: "ToDoList",
  mixins: [],
  components: {
    ListGroup,
    ListGroupItem,
    ToDoItem
  },
  props: {
    todos: {
      type: Array,
      required: true
    }
  }
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

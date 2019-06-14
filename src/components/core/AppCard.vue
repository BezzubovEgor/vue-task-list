<template>
  <div class="card" :class="{ interactive }" :tabindex="interactive && 0" v-longpress @longpress-end="mark" @longpress-click="onClick" @keypress.enter="onEnter" onselectstart="return false;" >
    <div class="card-body">
      <h5 class="card-title" v-if="$slots.header">
        <slot name="header"/>
      </h5>
      <slot/>
    </div>
  </div>
</template>

<script>
import longpress from '../../directives/longPress';

export default {
    props: {
        interactive: Boolean,
    },
    directives: {
      longpress,
    },
    methods: {
        onClick() {
            this.$emit('click');
            this.$emit('select');
        },
        onEnter() {
            this.$emit('select');
        },
        mark() {
          this.$el.blur();
          this.$emit('mark');
        }
    }
};
</script>

<style scoped>
.card {
  border-radius: 0.5rem;
  border-color: #dadce0;
  outline: none;
  transition: all .3s;
  background: rgba(255, 255, 255, .7);
}
.card-body {
    font-size: .9rem;
}
.card-title {
    font-size: 1rem;
    font-weight: 600;
}
.interactive {
    cursor: pointer;
}
.interactive:focus {
    box-shadow: 0 1px 3px rgba(30, 30, 30, 0.2);
}
</style>

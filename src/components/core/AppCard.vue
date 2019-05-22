<template>
  <div class="card" :class="{ interactive }" :tabindex="interactive && 0" @click="onClick" @keypress.enter="onEnter">
    <div class="card-body">
      <h5 class="card-title" v-if="$slots.header">
        <slot name="header"/>
      </h5>
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        interactive: Boolean,
    },
    methods: {
        onClick() {
            this.$emit('click');
            this.$emit('select');
        },
        onEnter() {
            this.$emit('select');
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
.interactive:hover,
.interactive:active,
.interactive:focus {
    box-shadow: 0 1px 3px rgba(30, 30, 30, 0.2);
}
</style>

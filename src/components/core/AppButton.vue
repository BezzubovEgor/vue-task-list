<template>
  <button :class="classByMode" @click="$emit('click', $event)" v-bind="$props">
    <slot/>
  </button>
</template>

<script>
const classes = {
  default: "default",
  "default-secondary": "default secondary",
  primary: "btn btn-primary d-flex align-items-center primary"
};

export default {
  name: "AppButton",
  props: {
    type: {
      default: "button",
      type: String
    },
    mode: {
      default: "default",
      type: String
    }
  },
  computed: {
    classByMode() {
      return classes[this.mode];
    }
  }
};
</script>

<style scoped>
button {
  cursor: pointer;
}
.default {
  color: #625bdb;
  background: transparent;
  border: none;
  font-size: 0.9rem;
  font-weight: 600;
}
.default:active,
.default:focus {
  outline: none;
}
.primary {
  border-radius: 2rem;
  padding: 0.8rem 1.3rem;
  font-weight: 500;
  font-size: 0.9rem;
  background: #514bc0;
  border-color: #514bc0;
}
.primary:hover,
.primary:active,
.primary:focus {
  background: #4d48a2 !important;
  border-color: #4d48a2 !important;
}
.primary:focus {
  box-shadow: 0 0 0 0.2rem rgba(77,72,162,.5) !important;
}
.secondary {
  color: rgba(0, 0, 0, 0.5);
}
</style>

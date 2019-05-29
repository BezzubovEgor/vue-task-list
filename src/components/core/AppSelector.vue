<template>
  <div>
    <AppButton mode="default" @click="isOpen = true">
      {{ currentLabel }}
      <i class="fas fa-caret-down icon ml-2"></i>
    </AppButton>

    <AppModal :isOpen="isOpen" :footer="false" @close="isOpen = false">
      <AppListGroup>
        <AppListGroupItem
          class="option d-flex justify-content-between"
          v-for="{ value, label, isSelected } of mappedOptions"
          :key="value"
          @click.native="select(value)">
            {{ label }}
            <i v-show="isSelected" class="fas fa-check"></i>
        </AppListGroupItem>
      </AppListGroup>
    </AppModal>
  </div>
</template>

<script>
import AppButton from "./AppButton";
import AppModal from "./AppModal";
import AppListGroup from "./AppListGroup";
import AppListGroupItem from "./AppListGroupItem";

export default {
  name: "AppSelect",
  components: {
    AppButton,
    AppModal,
    AppListGroup,
    AppListGroupItem
  },
  props: {
    value: [Object, String, Number, Array, Boolean],
    options: {
      type: Array,
      default: () => []
    },
    valueKey: String,
    labelKey: String
  },
  data() {
    return {
      isOpen: false
    };
  },
  computed: {
    mappedOptions() {
      return this.options.map(opt => ({
        value: this.getValue(opt),
        label: this.getLabel(opt),
        isSelected: this.isSelected(opt),
      }));
    },

    currentLabel() {
      const current = this.options.find(
        opt => this.getValue(opt) === this.value
      );
      return this.getLabel(current);
    }
  },
  methods: {
    getValue(opt) {
      return this.valueKey ? opt[this.valueKey] : this.value;
    },
    getLabel(opt) {
      return this.labelKey ? opt[this.labelKey] : this.value;
    },
    isSelected(opt) {
        return this.getValue(opt) === this.value;
    },
    select(value) {
        this.isOpen = false;
        this.$emit('change', value);
    }
  }
};
</script>

<style scoped>
.option {
  border: none;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
}
.option:last-child {
  border-bottom: none;
}
.option:hover,
.option:active,
.option:focus {
  background: transparent;
}
i {
  margin-right: 1.5rem;
}
</style>

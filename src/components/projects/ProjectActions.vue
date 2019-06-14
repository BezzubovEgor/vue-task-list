<template>
  <FadeInOut>
    <div v-if="marked.length" class="d-flex justify-content-between actions px-2 pt-3 pb-1">
      <AppButton mode="default" @click="unmark">
        <i class="fas fa-times"/>
      </AppButton>
      <span class="marked-count">{{marked.length}} selected</span>
      <div>
        <!-- <AppButton mode="default" @click="$emit('remove')" class="mr-3">
          <i class="fas fa-archive"/>
        </AppButton> -->
        <AppButton mode="default" @click="markAll" class="mr-3">
          <i class="far fa-square"/>
        </AppButton>
        <AppButton mode="default" @click="remove">
          <i class="far fa-trash-alt"/>
        </AppButton>
      </div>
    </div>
  </FadeInOut>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import FadeInOut from "../core/animations/FadeInOut";
import AppButton from "../core/AppButton";
import { REMOVE_MARKED_PROJECTS, MARK_ALL_PROJECTS, UNMARK_ALL_PROJECTS } from '../../store/types';

export default {
  name: "ProjectActions",
  components: {
    FadeInOut,
    AppButton
  },
  computed: {
    ...mapGetters(["marked"]),
  },
  methods: {
      ...mapActions({
        remove: REMOVE_MARKED_PROJECTS,
        markAll: MARK_ALL_PROJECTS,
        unmark: UNMARK_ALL_PROJECTS,
      }),
  }
};
</script>

<style scoped>
.actions i {
  font-size: 1.1rem;
}
.marked-count {
    color: #625bdb;
}
</style>

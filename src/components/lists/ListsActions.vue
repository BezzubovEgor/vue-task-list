<template>
  <FadeInOut>
    <div v-if="marked.length" class="d-flex justify-content-between actions px-2 pt-3 pb-1">
      <AppButton mode="default" @click="unmark">
        <i class="fas fa-times"/>
      </AppButton>
      <span class="marked-count">{{marked.length}} selected</span>
      <div>
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

import { REMOVE_MARKED_LISTS, MARK_ALL_LISTS, UNMARK_ALL_LISTS } from '../../store/types';
import FadeInOut from "../core/animations/FadeInOut";
import AppButton from "../core/AppButton";

export default {
  name: "ListsActions",
  components: {
    FadeInOut,
    AppButton
  },
  computed: {
    ...mapGetters(["marked"]),
  },
  methods: {
      ...mapActions({
        remove: REMOVE_MARKED_LISTS,
        markAll: MARK_ALL_LISTS,
        unmark: UNMARK_ALL_LISTS,
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

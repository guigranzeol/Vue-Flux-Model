<template>
  <v-dialog v-model='dialog' v-if='dialog' max-width="900px">
    <span>
      <div v-if="modalSpinner">
        <v-progress-circular class="spiner" :size="70" :width="7" color="purple" indeterminate></v-progress-circular>
      </div>
      <div v-else>
          <slot></slot>
      </div>
    </span>
  </v-dialog>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    dialog: Boolean
  },
  computed: {
    ...mapState("Spinner", ["modalSpinner"])
  }
};
</script>

<style>
</style>
<template>
  <router-view />
</template>
<style lang="scss">
html {
  overflow: hidden !important;
}
</style>
<script>
import { mapState } from "vuex";
export default {
  name: "App",
  created() {
    this.$kanban().toStore();
  },
  computed: {
    ...mapState(["title", "kanban"]),
  },
  watch: {
    kanban: {
      handler: "kanbanHandler",
    },
  },
  methods: {
    kanbanHandler() {
      this.$kanban().toLocal();
    },
  },
};
</script>

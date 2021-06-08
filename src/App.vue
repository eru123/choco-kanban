<template>
  <router-view :key="forceRenderKey" />
</template>
<style lang="scss">
html {
  overflow: hidden !important;
}
* {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
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
    ...mapState(["title", "kanban", "forceRenderKey"]),
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

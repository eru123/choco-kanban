<template>
  <v-main v-if="isMobile">
    <v-container>
      <h1>Tasks</h1>
    </v-container>
  </v-main>
  <computer-board :index="Number($router.currentRoute.params.board)" v-else />
</template>
<script>
import { mapState } from "vuex";
import ComputerBoard from "@/components/ComputerBoard";
export default {
  name: "BoardTasks",
  components: {
    ComputerBoard,
  },
  computed: {
    ...mapState(["kanban"]),
  },
  watch: {
    kanban: {
      handler: "kanbanHandler",
      immediate: true,
    },
  },
  methods: {
    kanbanHandler(boards) {
      const { tasks, ongoing, done } = this.kanbanPriority(boards);
      this.tasks = tasks;
      this.ongoing = ongoing;
      this.done = done;
    },
  },
};
</script>

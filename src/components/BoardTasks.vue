<template>
  <v-main v-if="isMobile">
    <v-container>
      <h1>Tasks</h1>
    </v-container>
  </v-main>
  <computer-board :index="Number($router.currentRoute.params.board)" v-else />
</template>
<script>
import ComputerBoard from "@/components/ComputerBoard";
export default {
  name: "BoardTasks",
  components: {
    ComputerBoard,
  },
};
</script>

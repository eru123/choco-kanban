<template>
  <v-main>
    <div v-if="index >= 0" class="d-flex align-start justify-start">
      <computer-board-tab
        style="flex: 1"
        color="#333"
        title="Tasks"
        :index="index"
      />
      <computer-board-tab
        style="flex: 1"
        color="primary"
        title="On Going"
        :index="index"
      />
      <computer-board-tab
        style="flex: 1"
        color="success"
        title="Done"
        :index="index"
      />
    </div>
    <v-container v-else fill-height class="pa-0">
      <v-row align="center" justify="center">
        <v-col align="center" style="color: gray">
          Select a Kanban Board in <br />
          in the left sidebar
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
import ComputerBoardTab from "@/components/ComputerBoardTab";
export default {
  name: "ComputerBoard",
  components: {
    ComputerBoardTab,
  },
  props: {
    index: {
      type: Number,
      default: NaN,
    },
  },
};
</script>

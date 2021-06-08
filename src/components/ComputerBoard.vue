<template>
  <v-main>
    <v-toolbar flat>
      <v-toolbar-title>{{ data.name }}</v-toolbar-title>
      <v-spacer />
      <add-new-task />
      <board-settings :item="kanban[index]" />
    </v-toolbar>
    <v-divider></v-divider>
    <div v-if="index >= 0" class="d-flex align-start justify-start">
      <computer-board-tab
        style="flex: 1"
        color="#333"
        title="Tasks"
        handle="tasks"
        :index="index"
      />
      <computer-board-tab
        style="flex: 1"
        color="primary"
        title="On Going"
        handle="ongoing"
        :index="index"
      />
      <computer-board-tab
        style="flex: 1"
        color="success"
        title="Done"
        handle="done"
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
import { mapState } from "vuex";
import ComputerBoardTab from "@/components/ComputerBoardTab";
import AddNewTask from "@/components/AddNewTask";
import BoardSettings from "@/components/BoardSettings";
export default {
  name: "ComputerBoard",
  components: {
    ComputerBoardTab,
    AddNewTask,
    BoardSettings,
  },
  props: {
    index: {
      type: Number,
      default: NaN,
    },
  },
  data: () => ({
    data: {},
  }),
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
    kanbanHandler(kanban) {
      this.data = kanban[this.index];
    },
  },
};
</script>

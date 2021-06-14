<template>
  <v-main>
    <div v-if="kanban[index]">
      <v-toolbar flat>
        <v-toolbar-title>{{ data.name }}</v-toolbar-title>
        <v-spacer />
        <v-btn icon @click="toggleTaskSelect"
          ><v-icon
            :color="taskSelect ? 'primary' : '#333'"
            v-text="taskSelect ? '$unselect' : '$select'"
        /></v-btn>
        <add-new-task />
        <board-settings :item="kanban[index]" />
      </v-toolbar>
      <v-divider></v-divider>

      <div class="d-flex align-start justify-start">
        <computer-board-tab
          style="flex: 1"
          title="Tasks"
          handle="tasks"
          :index="index"
        />
        <computer-board-tab
          style="flex: 1"
          title="On Going"
          handle="ongoing"
          :index="index"
        />
        <computer-board-tab
          style="flex: 1"
          title="Done"
          handle="done"
          :index="index"
        />
      </div>
    </div>

    <v-container v-else fill-height class="pa-0">
      <v-row align="center" justify="center">
        <v-col align="center" style="color: gray">
          Select a Project <br />
          in the left sidebar </v-col
        >[]
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

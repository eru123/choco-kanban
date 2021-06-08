<template>
  <v-app>
    <navigation-drawer
      :length="kanban.length"
      :tasks="tasks"
      :ongoing="ongoing"
      :done="done"
    />
    <app-bar />
    <v-main v-if="isMobile">
      <v-list v-if="kanban.length > 0" class="py-0">
        <boards-list :items="ongoing" icon="$ongoing" />
        <boards-list :items="tasks" color="#333" icon="$tasks" />
        <boards-list :items="done" color="success" icon="$done" />
      </v-list>
      <v-container v-else fill-height>
        <v-row align="center" justify="center">
          <v-col align="center" style="color: gray"
            >No Kanban Boards <br />
            Click + symbol to create</v-col
          >
        </v-row>
      </v-container>
    </v-main>
    <v-main v-if="!isMobile" style="background: #f1f1f1">
      <v-container fill-height>
        <v-row align="center" justify="center">
          <v-col align="center" style="color: gray">
            Select a Project <br />
            in the left sidebar
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import { mapState } from "vuex";
import BoardsList from "@/components/BoardsList";
import NavigationDrawer from "@/components/NavigationDrawer";
import AppBar from "@/components/AppBar";
export default {
  name: "Boards",
  components: {
    BoardsList,
    NavigationDrawer,
    AppBar,
  },
  data: () => ({
    tasks: [],
    ongoing: [],
    done: [],
  }),
  created() {
    console.log(this.$vuetify);
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

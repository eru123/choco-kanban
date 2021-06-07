<template>
  <v-app>
    <navigation-drawer
      :length="kanban.length"
      :tasks="tasks"
      :ongoing="ongoing"
      :done="done"
    />
    <app-bar v-if="!isMobile" />
    <v-app-bar v-if="isMobile" app color="#ffff" elevate-on-scroll>
      <v-btn icon :to="{ name: 'Boards' }" link color="#333">
        <v-icon v-text="'$back'" />
      </v-btn>
      <v-app-bar-title class="font-weight-bold" color="#333"
        >To do</v-app-bar-title
      >
      <v-spacer />
      <add-new-task />
    </v-app-bar>
    <router-view :key="$router.currentRoute.fullPath" />
    <mono-board-footer />
  </v-app>
</template>
<script>
import { mapState } from "vuex";
import NavigationDrawer from "@/components/NavigationDrawer";
import AppBar from "@/components/AppBar";
import AddNewTask from "@/components/AddNewTask";
import MonoBoardFooter from "@/components/MonoBoardFooter";
export default {
  name: "MonoBoard",
  components: {
    AddNewTask,
    NavigationDrawer,
    AppBar,
    MonoBoardFooter,
  },
  created() {
    console.log(this.$router.currentRoute.params.board);
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

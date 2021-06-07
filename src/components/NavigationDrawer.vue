<template>
  <v-navigation-drawer v-if="!$vuetify.breakpoint.mdAndDown" left clipped app>
    <v-list v-if="length > 0" class="py-0">
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
  </v-navigation-drawer>
</template>
<script>
import BoardsList from "@/components/BoardsList";
export default {
  name: "NavigationDrawer",
  components: {
    BoardsList,
  },
  props: {
    length: {
      type: Number,
      default: 0,
    },
    ongoing: {
      type: Array,
      default: () => [],
    },
    tasks: {
      type: Array,
      default: () => [],
    },
    done: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

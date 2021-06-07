<template>
  <v-navigation-drawer v-if="!$vuetify.breakpoint.mdAndDown" left clipped app>
    <v-card class="pa-0" tile style="border-left: 1px solid #ccc">
      <v-card-title class="pa-0">
        <v-toolbar flat>
          <v-toolbar-title
            ><router-link
              :to="{ name: 'Boards' }"
              style="text-decoration: none; color: #333"
              >Boards</router-link
            ></v-toolbar-title
          >
          <v-spacer></v-spacer>
          <add-new-board />
          <boards-settings />
        </v-toolbar>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text
        class="pa-0"
        style="height: calc(100vh - 64px - 66px); overflow: auto"
      >
        <v-list v-if="length > 0" class="py-0">
          <boards-list :items="ongoing" icon="$ongoing" />
          <boards-list :items="tasks" color="#333" icon="$tasks" />
          <boards-list :items="done" color="success" icon="$done" />
        </v-list>
        <div
          v-else
          style="height: calc(100vh - 64px - 66px); overflow: auto"
          class="d-flex justify-center align-center"
        >
          <div align="center">
            No Kanban Boards <br />
            Click + symbol to create
          </div>
        </div>
      </v-card-text>
    </v-card>
  </v-navigation-drawer>
</template>
<script>
import AddNewBoard from "@/components/AddNewBoard";
import BoardsSettings from "@/components/BoardsSettings";
import BoardsList from "@/components/BoardsList";
export default {
  name: "NavigationDrawer",
  components: {
    BoardsSettings,
    AddNewBoard,
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

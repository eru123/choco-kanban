<template>
  <v-dialog
    v-model="dialog"
    persistent
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon color="primary" v-bind="attrs" v-on="on">
        <v-icon>$add</v-icon>
      </v-btn>
    </template>
    <v-card tile>
      <v-toolbar dark color="primary" flat>
        <v-btn icon dark @click="dialog = false">
          <v-icon>$close</v-icon>
        </v-btn>
        <v-toolbar-title>Add Task</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark text @click="dialog = false"> Save </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-card-title class="text-h5 grey lighten-2">
        Privacy Policy
      </v-card-title>
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false"> I accept </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "AddNewTask",
  data: () => ({
    dialog: false,
  }),
  created() {
    console.log(this.$vuetify.icons.values);
  },
};
</script>

<template>
  <v-dialog
    v-model="dialog"
    persistent
    scrollable
    width="500"
    :fullscreen="$vuetify.breakpoint.mdAndDown ? true : false"
    transition="dialog-bottom-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon color="#333" v-bind="attrs" v-on="on">
        <v-icon>$add</v-icon>
      </v-btn>
    </template>
    <v-card tile>
      <v-card-title class="pa-0">
        <v-toolbar dark color="primary" flat>
          <v-btn icon dark @click="dialog = false">
            <v-icon>$close</v-icon>
          </v-btn>
          <v-toolbar-title>Create Project</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </v-card-title>
      <v-form @submit.prevent="save">
        <v-card-text class="py-7">
          <v-text-field
            hide-details
            v-model="board.name"
            label="Board Name"
            placeholder="(Ex. Thesis, Awesome Project)"
            outlined
            autocomplete="off"
          ></v-text-field>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text type="submit"> CREATE </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "AddNewBoard",
  data: () => ({
    board: {
      name: "",
      items: [],
    },
    dialog: false,
  }),
  watch: {
    dialog: {
      handler: "onOpenDialog",
      immediate: true,
    },
  },
  methods: {
    onOpenDialog(dialog) {
      if (dialog) {
        this.board.name = null;
      }
    },
    save() {
      if (this.board.name.length > 0) {
        this.$kanban().addBoard(this.board);
        this.dialog = false;
      }
    },
  },
};
</script>

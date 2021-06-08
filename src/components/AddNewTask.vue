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
          <v-toolbar-title>Add Task</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </v-card-title>
      <v-card-text class="py-7">
        <v-text-field
          v-model="task.name"
          label="Task Name"
          placeholder="(Ex. Create Chapter 3, Create Login Page)"
          outlined
          autocomplete="off"
          dense
        ></v-text-field>
        <v-select
          v-model="task.status"
          :items="status"
          label="Status"
          outlined
          dense
        ></v-select>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="save"> ADD </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "AddNewTask",
  data: () => ({
    task: {
      name: null,
      status: "tasks",
      due: null,
    },
    status: [
      { text: "To do", value: "tasks" },
      { text: "On Going", value: "ongoing" },
      { text: "Done", value: "done" },
    ],
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
        this.task.name = null;
        this.task.status = "tasks";
      }
    },
    save() {
      const index = Number(this.$router.currentRoute.params.board);
      const { name, status, due } = this.task;
      this.$kanban().addTask(index, { name, status, due });
      this.dialog = false;
    },
  },
};
</script>

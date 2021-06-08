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

    <v-form @submit.prevent="save">
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
          <!-- task name -->
          <v-text-field
            v-model="task.name"
            label="Task Name"
            placeholder="(Ex. Create Chapter 3, Create Login Page)"
            outlined
            autocomplete="off"
            dense
            required
          ></v-text-field>
          <!-- task status -->
          <v-select
            v-model="task.status"
            :items="status"
            label="Status"
            outlined
            dense
          ></v-select>

          <!-- task color -->
          <v-select
            v-model="task.color"
            :items="colors"
            label="Color"
            outlined
            dense
          ></v-select>

          <!-- deadline -->
          <v-checkbox
            v-if="!task.hasDue"
            class="mt-0"
            v-model="task.hasDue"
            label="Deadline"
          ></v-checkbox>
          <v-row v-if="task.hasDue">
            <v-col>
              <v-checkbox
                class="mt-0"
                v-model="task.hasDue"
                label="Deadline"
              ></v-checkbox>
            </v-col>
            <v-col>
              <v-text-field
                v-model="date.due"
                label="Value"
                type="number"
                placeholder="Any Number"
                outlined
                autocomplete="off"
                dense
              ></v-text-field>
            </v-col>
            <v-col>
              <v-select
                v-model="date.dueUnit"
                :items="dateUnits"
                label="Unit"
                outlined
                dense
              ></v-select>
            </v-col>
          </v-row>

          <!-- alarm -->
          <div v-if="task.hasDue">
            <v-checkbox
              v-if="!task.hasAlarm"
              class="mt-0"
              v-model="task.hasAlarm"
              label="Alarm"
            ></v-checkbox>

            <v-row v-if="task.hasAlarm">
              <v-col>
                <v-checkbox
                  class="mt-0"
                  v-model="task.hasAlarm"
                  label="Alarm"
                ></v-checkbox>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="date.alarm"
                  label="Value"
                  type="number"
                  placeholder="Any Number"
                  outlined
                  autocomplete="off"
                  dense
                ></v-text-field>
              </v-col>
              <v-col>
                <v-select
                  v-model="date.alarmUnit"
                  :items="dateUnits"
                  label="Unit"
                  outlined
                  dense
                ></v-select>
              </v-col>
            </v-row>
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text type="submit"> ADD </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>
<script>
export default {
  name: "AddNewTask",
  data: () => ({
    task: {
      name: null,
      status: "tasks",
      hasDue: false,
      due: null,
      color: "#fff",
      hasAlarm: false,
      alarm: 0,
    },
    date: {
      due: 1,
      dueUnit: 60,
      alarm: 1,
      alarmUnit: 60,
    },
    status: [
      { text: "To do", value: "tasks" },
      { text: "On Going", value: "ongoing" },
      { text: "Done", value: "done" },
    ],
    dialog: false,
  }),
  computed: {
    due() {
      return this.date.due;
    },
    dueUnit() {
      return this.date.dueUnit;
    },
    alarm() {
      return this.date.alarm;
    },
    alarmUnit() {
      return this.date.alarmUnit;
    },
  },
  watch: {
    dialog: {
      handler: "onOpenDialog",
      immediate: true,
    },
    due: {
      handler: "dueHandler",
      immediate: true,
    },
    dueUnit: {
      handler: "dueHandler",
      immediate: true,
    },
    alarm: {
      handler: "alarmHandler",
      immediate: true,
    },
    alarmUnit: {
      handler: "alarmHandler",
      immediate: true,
    },
  },
  methods: {
    dueHandler() {
      this.task.due = Date.now() + this.due * this.dueUnit * 1000;
    },
    alarmHandler() {
      this.task.alarm = Date.now() + this.alarm * this.alarmUnit * 1000;
    },
    onOpenDialog(dialog) {
      if (dialog) {
        this.task.name = null;
        this.task.status = "tasks";
      }
    },
    save() {
      const index = Number(this.$router.currentRoute.params.board);
      const { name, status, due, hasDue, color, alarm, hasAlarm } = this.task;
      if (name) {
        this.$kanban().addTask(index, {
          name,
          status,
          due,
          hasDue,
          color,
          hasAlarm,
          alarm,
        });
        this.dialog = false;
      }
    },
  },
};
</script>

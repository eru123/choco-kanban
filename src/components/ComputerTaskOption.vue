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
      <!-- not selecting  -->
      <div v-if="!taskSelect">
        <v-list-item
          v-if="i"
          v-bind="attrs"
          v-on="on"
          link
          :style="`border-bottom: 1px solid #f1f1f1;background: ${i.color}`"
        >
          <v-list-item-content>
            <v-list-item-title>{{ i.name }}</v-list-item-title>
            <v-list-item-subtitle
              v-if="i.hasDue"
              v-remaining="i"
            ></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </div>

      <!-- selecting  -->
      <div v-else>
        <v-list-item
          v-if="i"
          link
          @click="toggleTaskSelectItem(i.task)"
          :style="`border-bottom: 1px solid #f1f1f1;background: ${
            i.selected ? '#ccc' : i.color
          };`"
        >
          <v-list-item-icon>
            <v-icon v-text="i.selected ? '$unselect' : '$select'" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ i.name }}</v-list-item-title>
            <v-list-item-subtitle
              v-if="i.hasDue"
              v-remaining="i"
            ></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </div>
    </template>
    <v-card tile>
      <v-card-title class="pa-0">
        <v-toolbar dark color="primary" flat>
          <v-btn icon dark @click="dialog = false">
            <v-icon>$close</v-icon>
          </v-btn>
          <v-toolbar-title>{{ i.name }}</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </v-card-title>
      OK
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "ComputerTaskOption",
  props: {
    i: {
      type: Object,
      default: null,
    },
  },
  data: () => ({
    dialog: false,
  }),
};
</script>

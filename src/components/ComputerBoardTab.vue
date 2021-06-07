<template>
  <v-card class="pa-0" elevation="0" tile>
    <v-card-title class="pa-0">
      <v-toolbar dark :color="color" flat>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
    </v-card-title>
    <v-card-text
      class="pa-0"
      style="max-height: calc(100vh - 64px - 64px); overflow: auto"
    >
      Board Index : {{ index }}
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "ComputerBoardTab",
  props: {
    color: {
      type: String,
      default: "primary",
    },
    title: {
      type: String,
      default: "Board",
    },
    index: {
      type: Number,
      default: NaN,
    },
  },
};
</script>

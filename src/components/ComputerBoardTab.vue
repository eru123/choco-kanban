<template>
  <v-card
    class="pa-0"
    elevation="0"
    tile
    style="border-right: 1px solid #ccc; height: calc(100vh - 64px)"
  >
    <v-card-title class="pa-0">
      <v-toolbar flat dense>
        <v-toolbar-title
          ><v-icon class="mr-2">${{ handle }}</v-icon>
          {{ title }}</v-toolbar-title
        >
        <v-spacer></v-spacer>
      </v-toolbar>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text
      :class="items.length > 0 ? 'pa-0' : 'd-flex align-center justify-center'"
      style="height: calc(100vh - 64px - 64px - 48px); overflow: auto"
    >
      <v-list v-if="items.length > 0" class="py-0">
        <v-list-item
          v-for="(i, k) in items"
          :key="k"
          link
          style="border-bottom: 1px solid #f1f1f1"
        >
          <v-list-item-content>
            <v-list-item-title>{{ i.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ i.name }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <div v-else style="flex: 1" align="center">No items for {{ title }}</div>
    </v-card-text>
  </v-card>
</template>
<script>
import { mapState } from "vuex";
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
    handle: {
      type: String,
      default: "tasks",
    },
    index: {
      type: Number,
      default: NaN,
    },
  },
  data: () => ({
    items: [],
  }),
  computed: {
    ...mapState(["kanban"]),
  },
  watch: {
    index: {
      handler: "indexHandler",
      immediate: true,
    },
  },
  methods: {
    indexHandler(index) {
      index = +Number(index);
      const items = [];
      if (this.kanban[index]) {
        this.kanban[index].items.forEach((item) => {
          if (item.status == this.handle) {
            items.push(item);
          }
        });
      }

      this.items = items;
    },
  },
};
</script>

<template>
  <div>
    <v-list-item
      v-for="i in items"
      :key="i.index"
      :to="{ name: 'Tasks', params: { board: i.index } }"
      link
    >
      <v-list-item-icon>
        <v-icon :color="color" v-text="icon" />
      </v-list-item-icon>
      <v-list-item-content>
        <router-link
          :to="{ name: 'Tasks', params: { board: i.index } }"
          style="text-decoration: none; color: #333"
          >{{ i.name }}</router-link
        >
      </v-list-item-content>
    </v-list-item>
  </div>
</template>
<script>
export default {
  name: "BoardList",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    icon: {
      type: String,
      default: "$tasks",
    },
    color: {
      type: String,
      default: "primary",
    },
  },
};
</script>

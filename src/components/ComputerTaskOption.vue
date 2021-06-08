<template>
  <v-list-item
    v-if="i"
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
};
</script>

<template>
  <v-menu offset-x left>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>$option</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item v-for="item in 3" :key="item">
        <v-list-item-title>{{ item }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script>
export default {
  name: "BoardSettings",
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
};
</script>

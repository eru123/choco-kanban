<template>
  <div>
    <v-list-item class="px-0" v-for="i in items" :key="i.index" link>
      <v-list-item :to="{ name: 'Tasks', params: { board: i.index } }" link>
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
      <v-list-item-action class="my-0 ml-2 mr-4">
        <board-settings :item="i" />
      </v-list-item-action>
    </v-list-item>
  </div>
</template>
<script>
import BoardSettings from "@/components/BoardSettings";
export default {
  name: "BoardList",
  components: {
    BoardSettings,
  },
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

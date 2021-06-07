<template>
  <v-app-bar
    app
    color="#ffff"
    :elevation="isMobile ? 3 : 0"
    :elevate-on-scroll="isMobile"
    :style="isMobile ? '' : 'border-bottom: 1px solid #ccc'"
    clipped-left
  >
    <div class="d-flex align-center">
      <v-img
        class="shrink mr-0"
        contain
        src="../../public/img/icon.png"
        transition="scale-transition"
        width="35"
      />
    </div>
    <v-app-bar-title>hoco Kanban</v-app-bar-title>
    <v-spacer />
    <add-new-board />
  </v-app-bar>
</template>

<script>
import AddNewBoard from "@/components/AddNewBoard";
export default {
  name: "AppBar",
  components: {
    AddNewBoard,
  },
};
</script>

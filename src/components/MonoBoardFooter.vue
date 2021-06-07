<template>
  <v-footer
    v-if="isMobile"
    padless
    app
    fixed
    style="border-top: 1px solid #ccc"
  >
    <v-card flat tile width="100%" color="#fff">
      <v-list tile class="d-flex py-0">
        <v-list-item
          v-for="(i, k) in navitems"
          color="primary"
          :key="k"
          :to="i.to"
          link
        >
          <v-list-item-content>
            <v-icon v-text="i.icon" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  name: "MonoBoardFooter",
  data: () => ({
    navitems: [],
  }),
  created() {
    this.navitems = [
      {
        to: {
          name: "Tasks",
          params: {
            board: this.$router.currentRoute.params.board,
          },
        },
        icon: "$tasks",
      },
      {
        to: {
          name: "Ongoing",
          params: {
            board: this.$router.currentRoute.params.board,
          },
        },
        icon: "$ongoing",
      },
      {
        to: {
          name: "Done",
          params: {
            board: this.$router.currentRoute.params.board,
          },
        },
        icon: "$done",
      },
    ];
  },
};
</script>

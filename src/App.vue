<template>
  <v-app>
    <v-app-bar app color="#ffff" elevate-on-scroll>
      <div class="d-flex align-center">
        <v-img
          class="shrink mr-2"
          contain
          src="../public/img/icon.png"
          transition="scale-transition"
          width="40"
        />
      </div>
      <v-app-bar-title>To do</v-app-bar-title>
      <v-spacer />
      <add-new-task />
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer padless app fixed style="border-top: 1px solid #ccc">
      <v-card flat tile width="100%" color="#fff">
        <div class="app-nav">
          <router-link
            v-for="(i, k) in navitems"
            :key="k"
            :to="i.to"
            class="app-nav-item py-4"
          >
            <v-icon>{{ i.icon }}</v-icon>
          </router-link>
        </div>
      </v-card>
    </v-footer>
  </v-app>
</template>
<style lang="scss">
.app-nav {
  display: flex;

  .app-nav-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: #fff;
    align: center;
    color: #ccc;

    &:hover {
      background: #f2f2f2;
    }

    &.router-link-exact-active {
      background: #ccc;
      color: #333;
    }
  }
}
</style>
<script>
import AddNewTask from "@/components/AddNewTask";
export default {
  name: "App",
  components: {
    AddNewTask,
  },
  data: () => ({
    navitems: [
      {
        to: "/",
        icon: "fas fa-home",
      },
      {
        to: "/about",
        icon: "fas fa-home",
      },
      {
        to: "/",
        icon: "fas fa-home",
      },
    ],
  }),
};
</script>

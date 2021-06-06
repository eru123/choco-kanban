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
        <v-list tile class="d-flex py-0">
          <v-list-item
            v-for="(i, k) in navitems"
            color="primary"
            :key="k"
            :to="i.to"
            link
          >
            <v-list-item-content>
              <v-icon>$home</v-icon>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-footer>
  </v-app>
</template>
<script>
import AddNewTask from "@/components/AddNewTask";
export default {
  name: "MonoBoard",
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

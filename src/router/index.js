import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/board",
    component: () => import("@/components/MonoBoard"),
    children: [
      {
        path: "",
        redirect: "/",
      },
      {
        path: ":board",
        component: () => import("@/components/Board"),
        children: [
          {
            path: "",
            redirect: "/",
          },
          {
            path: ":page",
          },
        ],
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

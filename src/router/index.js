import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/boards",
    name: "Boards",
    component: () => import("@/views/Boards"),
  },
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
            redirect: "tasks",
          },
          {
            path: "tasks",
            name: "Tasks",
            component: () => import("@/components/BoardTasks"),
          },
          {
            path: "ongoing",
            name: "Ongoing",
            component: () => import("@/components/BoardOngoing"),
          },
          {
            path: "done",
            name: "Done",
            component: () => import("@/components/BoardDone"),
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
  {
    path: "*",
    redirect: "/boards",
  },
];

const router = new VueRouter({
  routes,
});

export default router;

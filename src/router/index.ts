import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        component: () => import("../pages/HomePage.vue"),
      },
      {
        path: "/Characters",
        component: () => import("../pages/CharactersPage.vue"),
      },
      {
        path: "/Clans",
        component: () => import("../pages/ClansPage.vue"),
      },
      {
        path: "/TailedBeasts",
        component: () => import("../pages/TailedBeastsPage.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("../pages/ErrorNotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

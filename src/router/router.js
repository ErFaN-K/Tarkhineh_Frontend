import { createRouter, createWebHistory } from "vue-router";

const baseTitle = "ترخینه 🥦";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("../pages/HomePage.vue"),
    meta: { title: `${baseTitle} | صفحه اصلی` },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Before Each Route
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;

import { createRouter, createWebHistory } from "vue-router";

const baseTitle = "ترخینه 🥦";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("../pages/HomePage.vue"),
    meta: { title: `${baseTitle} | صفحه اصلی` },
  },
  {
    path: "/branch/:branchName",
    name: "BranchPage",
    component: () => import("../pages/BranchPage.vue"),
    meta: {
      title: (route) => `${baseTitle} | صفحه شعبه ${route.params.branchName}`,
    },
  },
  {
    path: "/menu/:branchName",
    name: "MenuPage",
    component: () => import('../pages/MenuPage.vue'),
    meta: {
      title: (route) => `${baseTitle} | منو شعبه ${route.params.branchName}`
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Before Each Route
router.beforeEach((to, from, next) => {
  const title =
    typeof to.meta.title === "function"
      ? to.meta.title(to)
      : to.meta.title || baseTitle; // Change Page Title ( Dynamic )
  document.title = title;
  next();
});

export default router;

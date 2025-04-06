import { createRouter, createWebHistory } from "vue-router";
import routes from "@/constants/routes";

const baseTitle = "";

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

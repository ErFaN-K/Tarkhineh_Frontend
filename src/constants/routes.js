export default [
  {
    path: "/",
    name: "HomePage",
    component: () => import("../views/HomeView.vue"),
    meta: { title: `ترخینه 🥦 | صفحه اصلی` },
  },
  {
    path: "/branch/:branchName",
    name: "BranchPage",
    component: () => import("../views/BranchView.vue"),
    meta: {
      title: (route) => `ترخینه 🥦 | صفحه شعبه ${route.params.branchName}`,
    },
  },
  {
    path: "/menu/:branchName",
    name: "MenuPage",
    component: () => import("../views/MenuView.vue"),
    meta: {
      title: (route) => `ترخینه 🥦 | منو شعبه ${route.params.branchName}`,
    },
  },
  {
    path: "/search",
    name: "SearchPage",
    component: () => import("../views/SearchView.vue"),
    meta: {
      title: (route) => `ترخینه 🥦 | جست و جو برای  ${route.query.q}`,
    }
  },
  {
    path: '/:pathMatch(.*)*', 
    name: 'NotFound',
    component: () => import("../views/NotFoundView.vue"),
    meta: {
      title: "ترخینه 🥦 | صفحه مورد نظر یافت نشد",
    }
  }
];

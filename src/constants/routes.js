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
    beforeEnter: () => {
      // Check Branch selected or not
    }
  },
  {
    path: "/menu/:branchName",
    name: "MenuPage",
    component: () => import("../views/MenuView.vue"),
    meta: {
      title: (route) => `ترخینه 🥦 | منو شعبه ${route.params.branchName}`,
    },
    beforeEnter: () => {
      // Check Branch selected or not
    }
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
    path: "/about-us",
    name: "AboutUsPage",
    component: () => import("../views/AboutUsView.vue"),
    meta: {
      title: "ترخینه 🥦 | درباره ما",
    }
  },
  {
    path: "/successfull-pay",
    name: "SuccessfullPayPage",
    component: () => import("../views/SuccessfullPayView.vue"),
    meta: {
      title: "ترخینه 🥦 | پرداخت موفق",
    },
    beforeEnter: () => {
      // Check Payment Is Success Or No & Check Payment made or not
    }
  },
  {
    path: "/unsuccessfull-pay",
    name: "UnsuccessfullPayPage",
    component: () => import("../views/UnsuccessfullPayView.vue"),
    meta: {
      title: "ترخینه 🥦 | پرداخت ناموفق",
    },
    beforeEnter: () => {
      // Check Payment Is Un Success Or No & Check Payment made or not
    }
  },
  {
    path: '/:pathMatch(.*)*', 
    name: 'NotFoundPage',
    component: () => import("../views/NotFoundView.vue"),
    meta: {
      title: "ترخینه 🥦 | صفحه مورد نظر یافت نشد",
    }
  }
];

export default [
  {
    path: "/",
    name: "HomePage",
    component: () => import("@/pages/home/HomePage.vue"),
    meta: { title: `ترخینه 🥦 | صفحه اصلی` },
  },
  {
    path: "/branch/:branchName",
    name: "BranchPage",
    component: () => import("@/pages/branch/BranchPage.vue"),
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
    component: () => import("@/pages/menu/MenuPage.vue"),
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
    component: () => import("@/pages/search/SearchPage.vue"),
    meta: {
      title: (route) => `ترخینه 🥦 | جست و جو برای  ${route.query.q}`,
    }
  },
  {
    path: "/about-us",
    name: "AboutUsPage",
    component: () => import("@/pages/about-us/AboutUsPage.vue"),
    meta: {
      title: "ترخینه 🥦 | درباره ما",
    }
  },
  {
    path: "/successfull-pay",
    name: "SuccessfullPayPage",
    component: () => import("@/pages/successfull-pay/SuccessfullPayPage.vue"),
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
    component: () => import("@/pages/unsuccessfull-pay/UnsuccessfullPayPage.vue"),
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
    component: () => import("@/pages/not-found/NotFoundPage.vue"),
    meta: {
      title: "ترخینه 🥦 | صفحه مورد نظر یافت نشد",
    }
  }
];

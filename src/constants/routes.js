export default [
  {
    path: "/",
    name: "HomePage",
    component: () => import("@/pages/home/HomePage.vue"),
    meta: { title: `ترخینه 🥦 | صفحه اصلی` },
  },
  {
    path: "/branch",
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
    path: "/menu",
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
    path: "/faq",
    name: "FaqPage",
    component: () => import("@/pages/faq/FaqPage.vue"),
    children: [
      {
        // If the user enters the /faq Route, they will be redirected to the faq/questions Route.
        path: "",
        redirect: "faq/questions"
      },
      {
        path: "questions",
        name: "Faq|Questions",
        component: () => import("@/pages/faq/components/Questions.vue"),
        meta: {
          title: "ترخینه 🥦 | سوالات متداول",
        }
      },
      {
        path: "rules",
        name: "Faq|Rules",
        component: () => import("@/pages/faq/components/Rules.vue"),
        meta: {
          title: "ترخینه 🥦 | قوانین",
        }
      },
      {
        path: "privacy",
        name: "Faq|Privacy",
        component: () => import("@/pages/faq/components/Privacy.vue"),
        meta: {
          title: "ترخینه 🥦 | حریم خصوصی",
        }
      }
    ]
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

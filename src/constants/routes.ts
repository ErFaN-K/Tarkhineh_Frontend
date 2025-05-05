import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] =  [
  {
    path: "/",
    name: "HomePage",
    component: () => import("@/pages/home/HomePage.vue"),
    meta: { title: `ترخینه 🥦 | صفحه اصلی` },
  },
  {
    path: "/dashboard",
    name: "DashboardPage",
    component: () => import("@/pages/dashboard/DashboardPage.vue"),
    children: [
      {
        // If the user enters the /dashboard Route, they will be redirected to the dashboard/profile Route.
        path: "",
        name: "DashboardDefault",
        redirect: "dashboard/profile"
      },
      {
        path: "profile",
        name: "Dashboard|Profile",
        component: () => import("@/pages/dashboard/my-profile/ProfilePage.vue"),
        meta: {
          title: "ترخینه 🥦 | پروفایل من ",
        }
      },
      {
        path: "address",
        name: "Dashboard|Address",
        component: () => import("@/pages/dashboard/my-address/AddressPage.vue"),
        meta: {
          title: "ترخینه 🥦 | آدرس های من ",
        }
      },
      {
        path: "wishlist",
        name: "Dashboard|Wishlist",
        component: () => import("@/pages/dashboard/my-favorite-foods/FavoriteFoodPage.vue"),
        meta: {
          title: "ترخینه 🥦 |  علاقه مندی ها ",
        }
      },
      {
        path: "orders",
        name: "Dashboard|Orders",
        component: () => import("@/pages/dashboard/my-orders/OrdersPage.vue"),
        meta: {
          title: "ترخینه 🥦 |  سفارشات ",
        }
      }
    ]
  },
  {
    path: "/cart",
    name: "CartPage",
    component: () => import("@/pages/cart/CartPage.vue"),
    meta: {
      title: "ترخینه 🥦 |  سبد خرید ",
    }
  },
  {
    path: "/branch",
    name: "BranchPage",
    component: () => import("@/pages/branch/BranchPage.vue"),
    meta: {
      title: "ترخینه 🥦 |  صفحه شعبه ",
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
      title: "ترخینه 🥦 |  منو شعبه ",
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
    path: "/contact-us",
    name: "ContactUsPage",
    component: () => import("@/pages/contact-us/ContactUsPage.vue"),
    meta: {
      title: "ترخینه 🥦 | تماس باما",
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
        name: "FaqDefault",
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
    path: "/dealer-agreement",
    name: "DealerAgreementPage",
    component: () => import("@/pages/dealer-agreement/DealerAgreementPage.vue"),
    meta: {
      title: "ترخینه 🥦 | اعطای نمایندگی",
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

export default routes
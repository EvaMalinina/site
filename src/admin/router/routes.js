export default [
  {
    path: '/',
    component: () => import("../pages/About.vue"),
    meta: {
      title: "Block «About me»",
    }
  },
  {
    path: '/works',
    component: () => import("../pages/Works.vue"),
    meta: {
      title: "Block «My works»",
    }
  },
  {
    path: '/reviews',
    component: () => import("../pages/Reviews.vue"),
    meta: {
      title: "Block «My reviews»",
    }
  },
  {
    path: '/login',
    component: () => import("../pages/Login.vue"),
    meta: {
      public: true,
    }
  }
];


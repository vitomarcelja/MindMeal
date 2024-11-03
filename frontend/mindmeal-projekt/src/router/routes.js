const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/pretrazivanje",
        component: () => import("pages/PlanoviPrehrane.vue"),
      },
      {
        path: "/personalizacija",
        component: () => import("pages/PersonaliziraniPlanovi.vue"),
      },
      {
        path: "/forum",
        component: () => import("pages/ForumPage.vue"),
      },
      {
        path: "/profilkorisnika",
        component: () => import("pages/KorisnikPage.vue"),
      },
      {
        path: "/profilstrucnjaka",
        component: () => import("pages/StrucnjakPage.vue"),
      },
    ],
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

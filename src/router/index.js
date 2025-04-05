// router/index.js
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: { name: "sign-in" },
  },
  {
    path: "/login",
    component: () => import("../views/Login/LoginView.vue"),
    children: [
      {
        path: "",
        redirect: { name: "sign-in" },
      },
      {
        path: "sign-in",
        name: "sign-in",
        component: () => import("../views/Login/SignIn.vue"),
        meta: {
          title: "Sign In",
        },
      },
    ],
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Login/HomeView.vue"),
    meta: {
      title: "Home",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `Numa | ${to.meta.title}`;
  next();
});

export default router;

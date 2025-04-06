import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: { name: "home" },
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
      {
        path: "sign-up",
        name: "sign-up",
        component: () => import("../views/Login/SignUp.vue"),
        meta: {
          title: "Sign Up",
        },
      },
      {
        path: "sign-out",
        name: "sign-out",
        component: () => import("../views/Login/SignOut.vue"),
        meta: {
          title: "Sign Out",
        },
      },
    ],
  },
  {
    path: "/main",
    name: "main",
    children: [
      {
        path: "",
        redirect: { name: "dashboard" },
      },
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("../views/Main/DashboardView.vue"),
        meta: {
          title: "Dashboard",
        },
      },
    ],
  },

  {
    path: "/home",
    name: "home",
    component: () => import("../views/HomeView.vue"),
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

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const title = to.meta.title || "Numa";
  document.title = title;
  next();
});

export default router;

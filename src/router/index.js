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
        component: () => import("../views/main/Dashboard/DashboardView.vue"),
        meta: {
          title: "Dashboard",
        },
      },
      {
        path: "entry",
        name: "entry",
        component: () => import("../views/main/Entry/EntryView.vue"),
        meta: {
          title: "Lançamentos",
        },
      },
      {
        path: "manage-accounts",
        name: "manage-accounts",
        component: () =>
          import("../views/main/ManageAccounts/ManageAccountsView.vue"),
        meta: {
          title: "Gerenciar contas",
        },
        children: [
          {
            path: "accounts",
            name: "accounts",
            component: () =>
              import(
                "../views/main/ManageAccounts/components/Accounts/AccountsView.vue"
              ),
            meta: {
              title: "Contas",
            },
          },
          {
            path: "account/:id",
            name: "edit-account",
            component: () =>
              import(
                "../views/main/ManageAccounts/components/Accounts/EditAccount.vue"
              ),
            meta: {
              title: "Editar conta",
            },
          },
          {
            path: "credit-cards",
            name: "credit-cards",
            component: () =>
              import(
                "../views/main/ManageAccounts/components/CreditCardsView.vue"
              ),
          },
        ],
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

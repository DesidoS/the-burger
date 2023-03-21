import VueRouter from "vue-router";
import ErrorPage from "./pages/ErrorPage";
// import store from "./store";

const Homepage = () => import("./pages/Homepage");
const Burger = () => import("./pages/Burger");
const LoginPage = () => import("./pages/Login");

const routes = [
  {
    path: "*",
    component: ErrorPage,
    name: "error-page",
  },
  {
    path: "/homepage",
    component: Homepage,
    name: "homepage",
  },
  {
    path: "/api/:id",
    component: Burger,
    name: "burger",
    // meta: {
    //   requiresAuth: true,
    // },
  },
  {
    path: "/",
    component: LoginPage,
    name: "login-page",
    // meta: {
    //   hideForAuth: true,
    // },
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

// router.beforeEach((to, from, next) => {
//   const isLoggedIn = store.getters["auth/isLoggedIn"];

//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (!isLoggedIn) {
//       next({ name: "login-page" });
//     }
//   }

//   if (to.matched.some((record) => record.meta.hideForAuth)) {
//     if (isLoggedIn) {
//       next({ name: "homepage" });
//     }
//   }

//   next();
// });

export default router;

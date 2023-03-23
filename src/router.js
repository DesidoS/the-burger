import VueRouter from "vue-router";
import ErrorPage from "./pages/ErrorPage";

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
  },
  {
    path: "/",
    component: LoginPage,
    name: "login-page",
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;

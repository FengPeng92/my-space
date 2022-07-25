import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactsView from "../views/ContactsView.vue";
import DiscoverView from "../views/DiscoverView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/contacts/",
    name: "contacts",
    component: ContactsView,
  },
  {
    path: "/discover/:userId/",
    name: "discover",
    component: DiscoverView,
  },
  {
    path: "/login/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register/",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/404/",
    name: "404",
    component: NotFoundView,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

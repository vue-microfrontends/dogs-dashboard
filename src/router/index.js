import Vue from "vue";
import VueRouter from "vue-router";
import DogDashboard from "../components/dog-dashboard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/view-doggos",
    name: "dashboard",
    component: DogDashboard
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

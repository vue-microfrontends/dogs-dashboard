import { createWebHistory, createRouter } from "vue-router";
import DogDashboard from "../components/dog-dashboard";

const routes = [
  {
    path: "/view-doggos",
    name: "dashboard",
    component: DogDashboard
  }
];

export default createRouter({
  history: createWebHistory(),
  routes,
});

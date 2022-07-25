import { createRouter, createWebHistory } from "vue-router";
import RandomView from "../views/RandomView.vue";
import SavedView from "../views/SavedView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "random",
      component: RandomView,
    },
    {
      path: "/saved",
      name: "saved",
      component: SavedView,
    },
  ],
});

export default router;

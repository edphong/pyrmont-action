import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/HomeView.vue";

const router = createRouter({ // routing, handles links to other websites 
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    }
  ],
})

export default router

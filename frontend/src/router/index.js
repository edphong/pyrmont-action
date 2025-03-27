import { createRouter, createWebHistory } from 'vue-router'
import AboutUsView from "../pages/AboutUsView.vue";

const router = createRouter({ // routing, handles links to other websites 
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/about',
      name: 'about',
      component: AboutUsView,
    },

  ],
})

export default router

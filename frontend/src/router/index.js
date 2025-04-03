import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/HomeView.vue";

const router = createRouter({ // routing, handles links to other websites 
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },

    {
      path: '/about',
      // Lazy-load the AboutLayout
      component: () => import('@/layouts/AboutLayout.vue'),
      children: [
        {
          path: '',
          name: 'about',
          // Lazy-load the AboutUsView
          component: () => import('@/views/AboutUsView.vue')
        }
      ]
    }
  ]
})

export default router

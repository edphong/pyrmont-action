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
    // About route
    {
      path: '/about',
      component: () => import('@/layouts/AboutLayout.vue'),
      children: [
        {
          path: '',
          name: 'about',
          component: () => import('@/views/AboutUsView.vue')
        }
      ]
    },
    {
      // Contact route
      path: '/contact',
      component: () => import('@/layouts/ContactLayout.vue'),
      children: [
        {
          path: '',
          name: 'contact',
          component: () => import('@/views/ContactView.vue')
        },
          // Gallery Route
        {
          path: '/gallery',
          component: () => import('@/layouts/GalleryLayout.vue'),
          children: [
            {
              path: '',
              name: 'Gallery',
              component: () => import('@/views/GalleryView.vue'),
            },
          ],
        },
        // News Route
        {
          path: '/news',
          component: () => import('@/layouts/NewsLayout.vue'),
          children: [
            {
              path: '',
              name: 'news',
              component: () => import('@/views/NewsView.vue'),
            }
          ]
        }
      ]
    }
  ]
})

export default router

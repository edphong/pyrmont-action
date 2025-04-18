import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'          // the array we just built

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import TestView from '../views/TestView.vue' // import the TestView component
import LoginView from '../views/LoginView.vue' // import the LoginView component
import JoinUsView from '../views/JoinUsView.vue' // import the JoinUsView component

const router = createRouter({ // routing, handles links to other websites 
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },

    {
      path: '/joinus',
      name: 'Join Us',
      component: JoinUsView
    },
  ],
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import WeddingPage from '../views/WeddingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/wedding'
    },
    {
      path: '/wedding',
      name: 'wedding',
      component: WeddingPage
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
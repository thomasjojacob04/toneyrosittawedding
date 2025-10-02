import { createRouter, createWebHistory } from 'vue-router'
import EngagementPage from '../views/EngagementPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/engagement'
    },
    {
      path: '/engagement',
      name: 'engagement',
      component: EngagementPage
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
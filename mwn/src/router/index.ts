import { createRouter, createWebHistory } from 'vue-router'
import HeaderView from '../views/HeaderView.vue'
import FooterView from '@/views/FooterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/header',
      name: 'header',
      component: HeaderView
    },
    {
      path: '/footer',
      name: 'footer',
      component: FooterView
    }
  ]
})

export default router

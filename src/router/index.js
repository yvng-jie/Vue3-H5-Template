import { createRouter, createWebHistory } from 'vue-router'

// Route configuration example
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../views/Portfolio.vue'),
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import('../views/Team.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(), // 使用 HTML5 模式，适合新加坡/阿里云服务器部署
  routes,
})

export default router

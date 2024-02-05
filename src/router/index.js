import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MehendiView from '../views/MehendiView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/mehendi',
    name: 'about',
    component: MehendiView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

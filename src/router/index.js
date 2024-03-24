import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MehendiView from '../views/MehendiView.vue'
import EventDetailsView from '../views/EventDetailsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/events',
    name: 'events',
    component: MehendiView
  },
  {
    path: '/EventDetailsView',
    name: 'EventDetailsView',
    component: EventDetailsView
  
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

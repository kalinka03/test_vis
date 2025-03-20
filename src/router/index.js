import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginPage from "@/views/LoginPage.vue";
import CommunityPage from "@/views/CommunityPage.vue";
import BlogPage from "@/views/BlogPage.vue";
import EventsPage from "@/views/EventsPage.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      requireAuth: false,
    },
    component: HomeView,
  },
  {
    path: '/community',
    name: 'community',
    meta: {
      requireAuth: false,
    },
    component: CommunityPage,
  },
  {
    path: '/blog',
    name: 'blog',
    meta: {
      requireAuth: false,
    },
    component: BlogPage,
  },
  {
    path: '/events',
    name: 'events',
    meta: {
      requireAuth: false,
    },
    component: EventsPage,
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      requireAuth: false,
    },
    component: LoginPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes,
})

export default router

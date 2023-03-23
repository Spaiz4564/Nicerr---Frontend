import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './views/Home.vue'
import Chat from './views/Chat.vue'
import GigIndex from './views/GigIndex.vue'
import ReviewIndex from './views/ReviewIndex.vue'
import LoginSignup from './views/LoginSignup.vue'
import UserDetails from './views/UserDetails.vue'
import gigDetails from './views/GigDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/gig',
    name: 'GigIndex',
    component: GigIndex,
  },
  {
    path: '/gig/:id',
    name: 'GigDetails',
    component: gigDetails,
  },
  {
    path: '/review',
    name: 'ReviewIndex',
    component: ReviewIndex,
  },
  {
    path: '/purchase',
    name: 'GigPurchase',
    component: GigPurchase,
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
  },
  {
    path: '/login',
    name: 'LoginSignup',
    component: LoginSignup,
  },
  {
    path: '/user/:id',
    name: 'UserDetails',
    component: UserDetails,
  },
  {
    path: '/seller-signup',
    name: 'SellerSignup',
    component: SellerSignup,
  },
  {
    path: '/seller/profile',
    name: 'SellerProfile',
    component: SellerProfile,
  },
]

export const router = createRouter({
  routes,
  history: createWebHashHistory(),
  // base: process.env.BASE_URL,
})

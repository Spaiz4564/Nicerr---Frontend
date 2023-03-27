import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './views/Home.vue'
import Chat from './views/Chat.vue'
import GigIndex from './views/GigIndex.vue'
import ReviewIndex from './views/ReviewIndex.vue'
import UserDetails from './views/UserDetails.vue'
import gigDetails from './views/GigDetails.vue'
import GigPurchase from './views/GigPurchase.vue'
import SellerSignup from './views/SellerSignup.vue'
import SellerProfile from './views/SellerProfile.vue'
import LoginSignup from './views/LoginSignup.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/gig/:categoryId?',
    name: 'GigIndex',
    component: GigIndex,
  },
  {
    path: '/details/:id',
    name: 'GigDetails',
    component: gigDetails,
  },
  {
    path: '/review',
    name: 'ReviewIndex',
    component: ReviewIndex,
  },
  {
    path: '/purchase/:id',
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
    name: 'SellerProfile',
    path: '/seller/profile/:username?',
    component: SellerProfile,
  },
]

export const router = createRouter({
  routes,
  history: createWebHashHistory(),
  // base: process.env.BASE_URL,
})

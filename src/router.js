import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './views/Home.vue'
import Chat from './views/Chat.vue'
import GigIndex from './views/GigIndex.vue'
import ReviewIndex from './views/ReviewIndex.vue'
import UserDetails from './views/UserDetails.vue'
import gigDetails from './views/GigDetails.vue'
import GigPurchase from './views/GigPurchase.vue'
import BecomeASeller from './views/BecomeASeller.vue'
import SellerProfile from './views/SellerProfile.vue'
import Login from './views/Login.vue'
import GigEdit from './views/GigEdit.vue'
import DashBoard from './views/DashBoard.vue'

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
    path: '/edit/:gigId?',
    name: 'GigEdit',
    component: GigEdit,
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
    name: 'Login',
    component: Login,
  },
  {
    path: '/user/:id',
    name: 'UserDetails',
    component: UserDetails,
  },
  {
    path: '/seller-signup',
    name: 'BecomeASeller',
    component: BecomeASeller,
  },
  {
    name: 'SellerProfile',
    path: '/seller/profile/:id',
    component: SellerProfile,
  },
  {
    name: 'Dashboard',
    path: '/seller/dashboard/:id',
    component: DashBoard,
  },
]

export const router = createRouter({
  routes,
  history: createWebHashHistory(),

  // scrollBehavior(to, from, savedPosition) {
  //   console.log(to);
  //   if (to.hash) {
  //     return {
  //       el: to.hash,
  //       behavior: "smooth",
  //       top: 80,
  //     };
  //   }
  // },
  // base: process.env.BASE_URL,
})

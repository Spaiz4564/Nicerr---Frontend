<template>
  <div
    v-if="showSideMenu"
    v-clickOutsideDirective="closeMenu"
    class="side-menu flex column">
    <div v-if="user" class="user-info flex">
      <div class="img-container top flex">
        <img :src="user.imgUrl" alt="" />
      </div>
      <p>{{ user.username }}</p>
    </div>
    <a v-if="user" @click="this.$emit('goToProfile')">Profile</a>
    <a v-if="!user" @click="this.$emit('signIn'), closeMenu()">Sign In</a>
    <a class="join" v-if="!user" @click="this.$emit('join'), closeMenu()"
      >Join</a
    >
    <RouterLink @click="closeMenu" to="/gig">Explore</RouterLink>
    <div v-if="!seller" class="flex">
      <a @click="goToSellerSignup">Become a Seller</a>
    </div>

    <a v-if="user && user.isSeller" @click="this.$emit('goToDashboard')"
      >Dashboard</a
    >
    <a v-if="user" @click="this.$emit('logout')">Logout</a>
    <details v-if="user">
      <span class="notification-orders">
        <span class="dot"></span>
      </span>
      <summary>My Orders</summary>
      <ul class="clean-list-order">
        <li
          v-for="order in orders"
          class="order-detail flex align-center orders-mobile">
          <div class="img-container">
            <img :src="order.gig.img" alt="" />
          </div>
          <div class="desc">
            <span>{{ order.gig.name }}</span>
            <div class="order flex">
              <p>by {{ order.buyer.username }}</p>
              <p :class="order.status">
                {{ order.status || 'Pending' }}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </details>
  </div>
</template>

<script>
import { gigService } from '../../services/gig.service'
export default {
  props: ['showSideMenu'],
  name: 'Popular Services',
  data() {
    return {}
  },
  methods: {
    closeMenu() {
      this.$emit('closeMenu')
    },
    goToSellerSignup() {
      this.$router.push('/seller-signup')
      this.closeMenu()
    },
  },
  computed: {
    seller() {
      // if (!this.user) return false
      if (this.user) {
        return this.user.isSeller
      }
    },
    orders() {
      return this.$store.getters.orders
    },

    user() {
      return this.$store.getters.loggedinUser
    },
  },

  components: {},
}
</script>

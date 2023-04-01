<template>
  <div
    v-if="showSideMenu"
    v-clickOutsideDirective="closeMenu"
    class="side-menu flex column"
  >
    <div v-if="user" class="user-info flex">
      <div class="img-container flex">
        <img :src="user.imgUrl" alt="" />
      </div>
      <p>{{ user.username }}</p>
    </div>
    <a v-if="user" @click="this.$emit('goToProfile')">Profile</a>
    <a v-if="!user" @click="this.$emit('signIn'), closeMenu()">Sign In</a>
    <a class="join" v-if="!user" @click="this.$emit('join'), closeMenu()">Join</a>
    <RouterLink @click="closeMenu" to="/gig">Explore</RouterLink>
    <div v-if="!seller" class="flex">
      <a @click="goToSellerSignup">Become a Seller</a>
    </div>

    <a v-if="user && user.isSeller" @click="this.$emit('goToDashboard')">Dashboard</a>
    <a v-if="user" @click="this.$emit('logout')">Logout</a>
    <details v-if="user">
      <summary>My Orders</summary>
      <p>
        Epcot is a theme park at Walt Disney World Resort featuring exciting
        attractions, international pavilions, award-winning fireworks and
        seasonal special events.
      </p>
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

      user() {
        return this.$store.getters.loggedinUser
      },
    },

    components: {},
  }
</script>

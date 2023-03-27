<template>
  <section class="main-header main-layout">
    <header
      class="main-layout"
      :class="[isHome ? 'headerHome' : '', isWhite ? 'homeScroll' : '']"
      ref="header">
      <nav>
        <div class="logo-search">
          <RouterLink to="/">
            <h1 class="logo">Nicerr</h1>
          </RouterLink>
          <form
            @submit.prevent="emitFiltered"
            v-if="!isHome || isSuggestions"
            class="search-bar">
            <input
              class="search-input"
              type="text"
              placeholder="What service are you looking for today?"
              v-model="filterBy.title" />
            <span class="icon-search" v-html="getSvg('search')"></span>
          </form>
        </div>
        <div class="goTo">
          <RouterLink to="/gig">Explore</RouterLink>
          <a @click="goToSellerSignup">Become a Seller</a>
          <a v-if="!loggedinUser">Sign In</a>
          <a v-if="!loggedinUser">Join</a>
        </div>
        <div class="modal" v-if="loggedinUser">
          <img
            class="user-img"
            :src="loggedinUser.imgUrl"
            alt="user-img"
            @click.stop="toggleUserModal" />
          <div class="user-modal" v-if="modalOpen">
            <a @click="goToProfile">Profile</a>
          </div>
        </div>
      </nav>
    </header>
    <div
      class="nav-suggestions main-layout"
      :class="[
        isHome ? 'headerHome' : '',
        isSuggestions ? 'display' : '',
        isWhite ? 'homeScroll' : '',
      ]">
      <div class="suggestions main-layout">
        <ul>
          <li v-for="category in categories">{{ category.title }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
import { svgService } from '../services/svg.service'
import { gigService } from '../services/gig.service.local'
import LoginSignup from '../views/LoginSignup.vue'
export default {
  data() {
    return {
      stickyNav: false,
      headerObserver: null,
      filterBy: {
        title: '',
      },
      isHome: true,
      isWhite: false,
      isSuggestions: false,
      isPurchase: false,
      categories: gigService.getMarketCategories(),
      modalOpen: false,
    }
  },
  computed: {
    loggedinUser() {
      return this.$store.getters.loggedinUser
    },
  },
  methods: {
    getSvg(iconName) {
      return svgService.getSvg(iconName)
    },
    emitFiltered() {
      const filterBy = this.$store.getters.filterBy
      if (this.filterBy.title) {
        this.$store.commit({
          type: 'setFilter',
          filterBy: { ...filterBy, title: this.filterBy.title },
        })
      } else {
        this.$store.commit({
          type: 'setFilter',
          filterBy: { ...filterBy, title: '' },
        })
      }
    },
    goToSellerSignup() {
      this.$router.push('/seller-signup')
    },
    handleScroll() {
      const scrollY = window.scrollY
      this.isWhite = scrollY > 20 ? true : false
      this.isSuggestions = scrollY > 170 ? true : false
    },
    toggleUserModal() {
      console.log('toggle')
      this.modalOpen = !this.modalOpen
    },
    goToProfile() {
      this.$router.push(`/seller/profile/${this.loggedinUser._id}`)
    },
  },
  watch: {
    $route(to) {
      this.isHome = to.path !== '/' ? false : true
      this.isPurchase = to.path === `/purchase` ? true : false
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  components: { LoginSignup },
}
</script>

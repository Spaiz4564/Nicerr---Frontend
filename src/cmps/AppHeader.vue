<template>
  <section class="main-header full">
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
          <a @click.stop="toggleUserModal" v-if="loggedinUser">Orders</a>
          <div v-if="!seller" class="flex">
            <a @click="goToSellerSignup">Become a Seller</a>
          </div>
          <a v-if="!loggedinUser" @click.stop="toggleSignInModal">Sign In</a>
          <a class="join" v-if="!loggedinUser" @click.stop="toggleJoinModal"
            >Join</a
          >
          <div class="modal" v-if="loggedinUser">
            <img
              class="user-img"
              :src="loggedinUser.imgUrl"
              alt="user-img"
              @click.stop="toggleUserModal" />
            <div
              v-clickOutsideDirective="closeUserMenu"
              class="user-modal"
              v-if="modalOpen">
              <div class="modal-tip"></div>
              <a @click="goToProfile">Profile</a>
              <a v-if="loggedinUser.isSeller" @click="goToDashboard"
                >Dashboard</a
              >
              <a @click="logout">Logout</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <NavSuggestions
      :isWhite="isWhite"
      :isSuggestions="isSuggestions"
      :isHome="isHome" />
  </section>
</template>
<script>
import { svgService } from '../services/svg.service'
import { gigService } from '../services/gig.service'
import Login from '../views/Login.vue'
import NavSuggestions from './NavSuggestions.vue'
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
      modalSignIsOpen: false,
      backdrop: document.querySelector('.backdrop'),
    }
  },
  computed: {
    loggedinUser() {
      console.log('loggedinUser', this.$store.getters.loggedinUser)
      return this.$store.getters.loggedinUser
    },
    seller() {
      if (!this.loggedinUser) return false
      return this.loggedinUser.isSeller
    },
  },
  methods: {
    getSvg(iconName) {
      return svgService.getSvg(iconName)
    },
    emitFiltered() {
      //push the query to the url
      this.$router.push({
        path: '/gig',
        query: { title: this.filterBy.title },
      })
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
      this.modalOpen = !this.modalOpen
    },
    goToProfile() {
      this.$router.push(`/seller/profile/${this.loggedinUser._id}`)
    },
    goToDashboard() {
      console.log('dashboard')
    },
    filterCategory(categoryId) {
      this.$router.push({
        path: '/gig',
        query: { categoryId },
      })
      console.log('categoryId', categoryId)
    },
    logout() {
      this.$store.dispatch({ type: 'logout' })
      this.$router.push('/')
    },
    toggleSignInModal() {
      this.modalSignIsOpen = !this.modalSignIsOpen
      this.$emit('backdrop', this.modalSignIsOpen, 'signIn')
    },
    toggleJoinModal() {
      this.modalSignIsOpen = !this.modalSignIsOpen
      this.$emit('backdrop', this.modalSignIsOpen, 'join')
    },
    closeUserMenu() {
      this.modalOpen = false
    },
  },
  watch: {
    $route(to) {
      this.isHome = to.path !== '/' ? false : true
      this.isPurchase = to.path.includes('purchase') ? true : false
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
    if (this.backdrop) {
      this.backdrop.addEventListener('click', this.toggleSignInModal)
    }
    this.handleScroll()
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  components: { Login, NavSuggestions },
}
</script>

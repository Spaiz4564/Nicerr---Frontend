<template>
  <section class="main-header full" :class="[isPurchase ? 'hidden' : '']">
    <SideMenu
      @goToProfile="goToProfile"
      @goToDashboard="goToDashboard"
      @logout="logout"
      @signIn="toggleSignInModal"
      @join="toggleJoinModal"
      @closeMenu="showSideMenu = !showSideMenu"
      :showSideMenu="showSideMenu" />

    <header
      class="main-layout"
      :class="[isHome ? 'headerHome' : '', isWhite ? 'homeScroll' : '']"
      ref="header">
      <nav>
        <div @click="showSideMenu = !showSideMenu" class="menu-icon">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="logo-search">
          <RouterLink to="/">
            <h1 class="logo">Nicerr</h1>
          </RouterLink>
          <form
            @submit.prevent="emitFiltered"
            :class="!isHome || isSuggestions ? '' : 'hidden'"
            class="search-bar">
            <input
              class="search-input"
              type="text"
              placeholder="What service are you looking for today?"
              v-model="filterBy.title" />
            <span
              @click="emitFiltered"
              class="icon-search"
              v-html="getSvg('search')"></span>
          </form>
        </div>
        <div class="goTo">
          <RouterLink to="/gig">Explore</RouterLink>
          <a @click.stop="toggleOrderModal" v-if="loggedinUser">Orders</a>
          <div v-if="!seller" class="flex">
            <a @click="goToSellerSignup">Become a Seller</a>
          </div>
          <a v-if="!loggedinUser" @click.stop="toggleSignInModal">Sign In</a>
          <a class="join" v-if="!loggedinUser" @click.stop="toggleJoinModal"
            >Join</a
          >
          <div class="modal" v-if="loggedinUser">
            <div
              v-clickOutsideDirective="toggleOrderModal"
              class="order-modal"
              v-if="orderModalOpen">
              <div class="modal-tip"></div>
              <ul class="clean-list-order">
                <li
                  v-for="order in orders"
                  class="order-detail flex align-center">
                  <div class="img-container">
                    <img :src="order.gig.img" alt="" />
                  </div>
                  <div class="desc">
                    <span>{{ order.gig.name }}</span>
                    <div class="order flex">
                      <p :class="order.status">
                        {{ order.status || 'Pending' }}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
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
              <a @click="goToProfile()">Profile</a>
              <a v-if="loggedinUser.isSeller" @click="goToDashboard()"
                >Dashboard</a
              >
              <a @click="logout()">Logout</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <!-- <NavVuper  v-if="windowWidth < 1200" /> -->
    <NavSuggestions
      :isWhite="isWhite"
      :isSuggestions="isSuggestions"
      :isHome="isHome" />
  </section>
</template>
<script>
import { svgService } from '../services/svg.service'
import { gigService } from '../services/gig.service.local'
import Login from '../views/Login.vue'
import NavSuggestions from './NavSuggestions.vue'
import { ordersService } from '../services/order.service'
import NavVuper from '../cmps/NavVuper.vue'
import SideMenu from '../cmps/HomePage/SideMenu.vue'

export default {
  name: 'AppHeader',
  data() {
    return {
      showSideMenu: false,
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
      modalOpen: this.changeModal(),
      modalSignIsOpen: false,
      orderModalOpen: false,
      backdrop: document.querySelector('.backdrop'),
      windowWidth: null,
      order: null,
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
    orders() {
      //we need to render only the orders by the loggedin user
      return this.$store.getters.ordersByLoggedInUser
    },
    screenWidth() {
      return window.innerWidth
    },
  },
  methods: {
    getSvg(iconName) {
      return svgService.getSvg(iconName)
    },
    changeModal() {
      return this.$store.getters.changeModalOpen
    },
    emitFiltered() {
      this.$router.push({
        path: '/gig',
        query: { title: this.filterBy.title },
      })
    },
    goToSellerSignup() {
      this.$router.push('/seller-signup')
    },
    async loadOrdersByUser() {
      if (!this.loggedinUser) return
      const orders = await ordersService.query({
        ordersByUser: this.loggedinUser._id,
      })
      console.log('orders', orders)
      return orders
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
      this.showSideMenu = false
      this.closeUserMenu()
      this.$router.push(`/seller/profile/${this.loggedinUser._id}`)
    },
    goToDashboard() {
      this.closeUserMenu()
      this.$router.push(`/seller/dashboard/${this.loggedinUser._id}`)
    },
    filterCategory(categoryId) {
      this.$router.push(`/gig/${categoryId}`)
      this.$store.commit({ type: 'setFilter', filterBy: { categoryId } })
    },
    logout() {
      this.closeUserMenu()
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
    toggleOrderModal() {
      this.orderModalOpen = !this.orderModalOpen
    },
    closeUserMenu() {
      this.modalOpen = false
    },
    checkIfLoggedIn() {
      const user = this.loggedinUser
      if (user) {
        this.$store.dispatch({ type: 'loadUser', user })
      }
    },
  },
  watch: {
    $route(to) {
      this.isHome = to.path !== '/' ? false : true
      this.isPurchase = to.path.includes('purchase') ? true : false
    },
  },

  created() {
    // console.log(window.innerWidth)
    window.addEventListener('scroll', this.handleScroll)
    if (this.backdrop) {
      this.backdrop.addEventListener('click', this.toggleSignInModal)
    }
    this.handleScroll()
    this.checkIfLoggedIn()
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    window.onresize = () => {
      this.windowWidth = window.innerWidth
    }
  },
  components: { Login, NavSuggestions, NavVuper, SideMenu },
}
</script>

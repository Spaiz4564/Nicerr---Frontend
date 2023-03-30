<template>
  <section class="main-header full">
    <header class="main-layout" :class="[isHome ? 'headerHome' : '', isWhite ? 'homeScroll' : '']" ref="header">
      <nav>
        <div class="logo-search">
          <RouterLink to="/">
            <h1 class="logo">Nicerr</h1>
          </RouterLink>
          <form @submit.prevent="emitFiltered" v-if="!isHome || isSuggestions" class="search-bar">
            <input class="search-input" type="text" placeholder="What service are you looking for today?"
              v-model="filterBy.title" />
            <span class="icon-search" v-html="getSvg('search')"></span>
          </form>
        </div>
        <div class="goTo">
          <RouterLink to="/gig">Explore</RouterLink>
          <a @click.stop="toggleOrderModal" v-if="loggedinUser">Orders</a>
          <div v-if="!seller" class="flex">
            <a @click="goToSellerSignup">Become a Seller</a>
          </div>
          <a v-if="!loggedinUser" @click.stop="toggleSignInModal">Sign In</a>
          <a class="join" v-if="!loggedinUser" @click.stop="toggleJoinModal">Join</a>
          <div class="modal" v-if="loggedinUser">
          
            <div  v-clickOutsideDirective="toggleOrderModal"  class="order-modal" v-if="orderModalOpen">
              <div class="modal-tip"></div>
            <ul class="clean-list scroller">
              <h2 class="no-orders" v-if="!orders.length">No orders to show</h2>
              <li v-for="order in orders" class="order-detail flex align-center">
                <div class="img-container">
                  <img :src=order.owner.imgUrl alt="">
                </div>
                <div class="desc">
                  <span>{{ order.title }}</span>
                  <div class="order flex">
                    <p class="name">by {{ order.owner.username }}</p>
                    <p :class="order.status"> {{ order.status || 'Pending' }}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
            <img class="user-img" :src="loggedinUser.imgUrl" alt="user-img" @click.stop="toggleUserModal" />

           
            <div v-clickOutsideDirective="closeUserMenu" class="user-modal" v-if="modalOpen">
              <div class="modal-tip"></div>
              <a @click="goToProfile(); closeUserMenu()">Profile</a>
              <a v-if="loggedinUser.isSeller" @click="goToDashboard(),   closeUserMenu()">Dashboard</a>
              <a @click="logout(); closeUserMenu()">Logout</a>
            </div>
          </div>
         
        </div>
      </nav>
    </header>
    <NavSuggestions :isWhite="isWhite" :isSuggestions="isSuggestions" :isHome="isHome" />
  </section>
</template>
<script>
import { svgService } from '../services/svg.service'
import { gigService } from '../services/gig.service.local'
import Login from '../views/Login.vue'
import NavSuggestions from './NavSuggestions.vue'
import { ordersService } from '../services/order.service'

export default {
  data() {
    return {
      stickyNav: false,
      headerObserver: null,
      filterBy: {
        title: '',
      },
      order: null,
      isHome: true,
      isWhite: false,
      isSuggestions: false,
      isPurchase: false,
      categories: gigService.getMarketCategories(),
      modalOpen: this.changeModal(),
      modalSignIsOpen: false,
      orderModalOpen: false,
      backdrop: document.querySelector('.backdrop'),
      orders: null
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
      return this.orders
    }
  
  },
  methods: {
    async loadOrdersByOwner() {
        const buyer = userService.getLoggedinUser()
        if(buyer) {
          this.orders = await ordersService.query({ buyerId: buyer._id })
        }
       
      },

    getSvg(iconName) {
      return svgService.getSvg(iconName)
    },
    changeModal() {
      return this.$store.getters.changeModalOpen
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
      this.$router.push(`/seller/dashboard/${this.loggedinUser._id}`)
      console.log('dashboard')
    },
    filterCategory(categoryId) {
      this.$router.push(`/gig/${categoryId}`)
      this.$store.commit({ type: 'setFilter', filterBy: { categoryId } })
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
    toggleOrderModal() {
      this.orderModalOpen = !this.orderModalOpen
    },
    closeUserMenu() {
      this.modalOpen = false
    },
    checkIfLoggedIn() {
      const user = this.loggedinUser
      if(user) {
        this.loadOrdersByOwner()
      }
    }
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
    this.loadOrdersByOwner()
    this.checkIfLoggedIn()
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  components: { Login, NavSuggestions },
}
</script>

<template>
  <header :class="[isHome ? 'headerHome' : '', isWhite ? 'homeScroll' : '']" ref="header">
    <div></div>
    <nav>
      <div class="logo-search">
        <RouterLink to="/">
          <h1 class="logo">Nicerr</h1>
        </RouterLink>
        <div v-if="!isHome" class="search-bar">
          <input class="search-input" type="text" placeholder="What service are you looking for today?"
            v-model="filterBy.title" />
          <span @click="emitFiltered" class="icon-search" v-html="getSvg('search')"></span>
        </div>
      </div>

      <div class="goTo">
        <RouterLink to="/gig">Explore</RouterLink>
        <a @click="goToSellerSignup">Become a Seller</a>
        <a>Sign In</a>
        <a>Join</a>
      </div>
    </nav>
    <div></div>
  </header>
</template>
<script>
import { svgService } from '../services/svg.service'
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
    }
  },

  methods: {
    getSvg(iconName) {
      return svgService.getSvg(iconName)
    },

    emitFiltered() {
      console.log('emitFiltered')
      const filterBy = this.$store.getters.filterBy
      console.log('filterBy', filterBy)
      console.log('filterBy', filterBy)
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
    },
  },

  watch: {
    $route(to) {
      this.isHome = to.path !== '/' ? false : true
    },
  },

  created() {
    window.addEventListener('scroll', this.handleScroll)
    //we need to update the scroll position when the component is created
    this.handleScroll()
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
}
</script>

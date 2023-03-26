<template>
  <section class="main-header main-layout">
    <header
      class="main-layout"
      :class="[isHome ? 'headerHome' : '', isWhite ? 'homeScroll' : '']"
      ref="header"
    >
      <nav>
        <div class="logo-search">
          <RouterLink to="/">
            <h1 class="logo">Nicerr</h1>
          </RouterLink>
          <form
            @submit.prevent="emitFiltered"
            v-if="!isHome"
            class="search-bar"
          >
            <input
              class="search-input"
              type="text"
              placeholder="What service are you looking for today?"
              v-model="filterBy.title"
            />
            <span class="icon-search" v-html="getSvg('search')"></span>
          </form>
        </div>
        <div class="goTo">
          <RouterLink to="/gig">Explore</RouterLink>
          <a @click="goToSellerSignup">Become a Seller</a>
          <a>Sign In</a>
          <a>Join</a>
        </div>
      </nav>
    </header>
    <div
      class="nav-suggestions main-layout"
      :class="[
        isHome ? 'headerHome' : '',
        isSuggestions ? 'display' : '',
        isWhite ? 'homeScroll' : '',
      ]"
    >
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
      categories: gigService.getMarketCategories(),
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
      this.isSuggestions = scrollY > 170 ? true : false
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

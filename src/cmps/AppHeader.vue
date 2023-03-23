<template>
  <header :class="isHome ? 'headerHome' : ''" ref="header">
    <div></div>
    <nav>
      <RouterLink to="/"
        ><h1 to="/gig" class="logo">Nicerr<span>.</span></h1></RouterLink
      >
      <div v-if="!isHome" class="search-bar">
        <input
          class="search-input"
          type="text"
          placeholder="What are you looking for today?"
          v-model="filterBy.title" />
        <span
          @click="emitFiltered"
          class="icon-search"
          v-html="getSvg('search')"></span>
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
    }
  },

  computed: {},
  watch: {
    $route(to) {
      this.isHome = to.path !== '/' ? false : true
    },
  },

  methods: {
    onHeaderObserved(entries) {
      entries.forEach((entry) => {
        this.stickyNav = entry.isIntersecting ? true : false
      })
    },
    getSvg(iconName) {
      return svgService.getSvg(iconName)
    },

    emitFiltered() {
      console.log('emitFiltered')
      const filterBy = this.$store.getters.filterBy
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
  },
  mounted() {
    this.headerObserver = new IntersectionObserver(this.onHeaderObserved, {
      rootMargin: '0px 0px 100px',
    })
    this.headerObserver.observe(this.$refs.header)
    console.log('hello -mounted')
  },
}
</script>

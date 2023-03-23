<template>
  <header ref="header" class="app-header">
    <div></div>
    <nav
      ref="nav"
      >
      <h1 class="logo">Nicerr<span>.</span></h1>
      <div class="search-bar">
        <input
          class="search-input"
          type="text"
          placeholder="What are you looking for today?"
          v-model="filterBy.title" />
        <span
          @click="emitFilered"
          class="icon-search"
          v-html="getSvg('search')"></span>
      </div>
      <div class="goTo">
        <RouterLink to="/gig">Explore</RouterLink>
        <a>Become a seller</a>
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
    }
  },
  computed: {
    isWhite() {
      return this.stickyNav ? true : false
    },
  },
  methods: {
    onHeaderObserved(entries) {
      entries.forEach((entry) => {
        this.stickyNav = entry.isIntersecting ? true : false
        console.log(entry)
        console.log('hello')
      })
    },
    getSvg(iconName) {
      return svgService.getSvg(iconName)
    },

    emitFilered() {
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


<!-- v-bind:style="{ position: stickyNav ? 'absolute' : 'fixed' }" -->
<template>
  <header :class="isHome ? 'headerHome' : ''"  ref="header">
    <div></div>
    <nav>
      <h1 class="logo">Nicerr<span>.</span></h1>
      <div v-if="!isHome" class="search-bar">
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
      isHome: true
    }
  },

  watch: {
    $route(to,from) {
      if(to.path !== '/') {
        this.isHome = false
        console.log(this.isHome)
        
      } else if(from.path !== '/') {
       this.isHome = true
       console.log(this.isHome)
      }

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
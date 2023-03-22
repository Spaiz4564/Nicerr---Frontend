<template>
  <header ref="header">
    <div></div>
    <nav
      ref="nav"
      v-bind:style="{ position: stickyNav ? 'absolute' : 'fixed' }"
    >
      <h1 class="logo">Nicerr<span>.</span></h1>
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
export default {
  data() {
    return {
      stickyNav: false,
    }
  },
  computed: {},
  methods: {
    onHeaderObserved(entries) {
      entries.forEach(entry => {
        this.stickyNav = entry.isIntersecting ? true : false
        console.log(entry)
        console.log('hello')
      })
    },
  },
  mounted() {
    this.headerObserver = new IntersectionObserver(this.onHeaderObserved, {
      rootMargin: '100px 0px 0px',
    })
    this.headerObserver.observe(this.$refs.header)
    console.log('hello -mounted')
  },
}
</script>

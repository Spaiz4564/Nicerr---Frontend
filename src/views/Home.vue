<template>
  <section class="container-home">
    <div class="hero-wrapper">
      <h5 class="hero-container">
        <div class="hero">
          <h1>
            Find the perfect <span>freelance</span> services for your business
          </h1>
          <form class="home-search-container" action="">
            <div class="home-search">
              <div class="search">
                <div class="icon" v-html="getSvg('search')"></div>
                <input type="text" placeholder='Try "Building mobile app"' />
              </div>
              <button>Search</button>
            </div>
          </form>
        </div>
      </h5>
    </div>
  </section>
</template>

<script>
import { svgService } from '../services/svg.service'
export default {
  name: 'home',
  data() {
    return {}
  },
  computed: {},
  created() {},
  methods: {
    getSvg(iconName) {
      return svgService.getSvg(iconName)
    },
  },
}
</script>

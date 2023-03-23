<template>
  <div class="hero-wrapper">
    <!-- <div class="testing" v-for="background in backgrounds">
      <img :src="imgUrl(background.img)" alt="" />
    </div> @@@ LO LAGAAT @@@ -->
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
        <div class="header-suggestions">
          <span>Popular:</span>
          <ul>
            <li>Website Design</li>
            <li>WordPress</li>
            <li>Logo Design</li>
            <li>AI Services</li>
          </ul>
        </div>
      </div>
    </h5>
  </div>
</template>
<script>
import { svgService } from '../services/svg.service'
import { gigService } from '../services/gig.service.local'
export default {
  name: 'Hero Section',
  data() {
    return {
      backgrounds: gigService.getHeroBackgrounds(),
    }
  },

  computed: {
    mashu() {
      return this.backgrounds[1].img
    },
  },
  methods: {
    getSvg(iconName) {
      return svgService.getSvg(iconName)
    },
    imgUrl(img) {
      return new URL(img, import.meta.url).href
    },
  },
}
</script>

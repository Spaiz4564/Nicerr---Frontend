<template>
  <div class="hero-wrapper main-layout">
    <div
      ref="heroBackground"
      class="hero-background"
      v-for="background in backgrounds">
      <img :src="imgUrl(background.img)" alt="" />

      <div class="desc">
        <span
          v-if="background.isFiveStars"
          className="icon"
          v-html="getSvg('fiveStars')"></span>
        <div class="artist-info">
          <p>{{ background.name }},</p>
          <b>{{ background.desc }}</b>
        </div>
      </div>
    </div>
    <h5 class="hero-container">
      <div class="hero">
        <h1>
          Find the perfect <span>freelance</span> services for your business
        </h1>
        <form class="home-search-container" action="">
          <div class="home-search">
            <div class="search">
              <div class="icon" v-html="getSvg('search')"></div>
              <input type="text" placeholder='Try "building mobile app"' />
            </div>
            <button>Search</button>
          </div>
        </form>
        <div class="header-suggestions">
          <span>Popular:</span>
          <ul>
            <li @click="filterCategory('website')">Website Design</li>
            <li @click="filterCategory('wordpress')">WordPress</li>
            <li @click="filterCategory('logo')">Logo Design</li>
            <li @click="filterCategory('ai')">AI Services</li>
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
      heroInterval: null,
    }
  },

  computed: {
    opacity() {
      return this.backgrounds
    },
    mashu() {
      return this.backgrounds[1].img
    },
  },
  methods: {
    handleHeroGallery() {
      var counter = 1
      this.heroInterval = setInterval(() => {
        const categories = this.$refs.heroBackground
      categories[0].style.opacity = '0'
        if (counter === categories.length) {
          counter = 0
          categories[5].classList.remove('showOpacity')
        }
        categories[counter].classList.add('showOpacity')
        if (counter !== 0) {
          categories[counter - 1].classList.remove('showOpacity')
        } else {
          categories[0].style.opacity = '1'
        }
        counter++
      }, 7000)
    },
    getSvg(iconName) {
      return svgService.getSvg(iconName)
    },
    imgUrl(img) {
      return new URL(img, import.meta.url).href
    },
    filterCategory(categoryId) {
      this.$router.push(`/gig/${categoryId}`)
      this.$store.commit({ type: 'setFilter', filterBy: { categoryId } })
    },
  },

  unmounted() {
    clearInterval(this.heroInterval)
  },



  created() {
    this.handleHeroGallery()
  },
}
</script>

<template>
  <div class="hero-wrapper main-layout full">
    <div
      ref="heroBackground"
      class="hero-background full"
      v-for="background in backgrounds"
    >
      <img :src="imgUrl(background.img)" alt="" />

      <div class="desc">
        <span
          v-if="background.isFiveStars"
          className="icon"
          v-html="getSvg('fiveStars')"
        ></span>
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
        <form class="home-search-container" @submit.prevent="filterByTitle()">
          <div class="home-search">
            <div class="search">
              <div class="icon" v-html="getSvg('search')"></div>
              <input
                v-model="filterBy.title"
                type="text"
                placeholder='Try "building mobile app"'
              />
            </div>
            <button>Search</button>
          </div>
        </form>
        <div class="header-suggestions">
          <span>Popular:</span>
          <ul>
            <li
              ref="category"
              v-for="(category, index) in popularCategories"
              @click="filterCategory(category.toLocaleLowerCase(), index)"
            >
              {{ category }}
            </li>
          </ul>
        </div>
      </div>
    </h5>
  </div>
</template>
<script>
  import { svgService } from '../../services/svg.service'
  import { gigService } from '../../services/gig.service'
  export default {
    name: 'Hero Section',
    data() {
      return {
        backgrounds: gigService.getHeroBackgrounds(),
        windowWidth: window.innerWidth,
        heroInterval: null,
        popularCategories: [
          'Website Design',
          'WordPress',
          'Logo Design',
          'AI Services',
        ],
        filterBy: {
          title: '',
          categoryId: '',
        },
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
      filterCategory(categoryId, index) {
        this.$store.dispatch({
          type: 'updateCategory',
          category: this.$refs.category[index].innerText,
        })
        this.$router.push({ path: '/gig', query: { categoryId } })
      },
      filterByTitle() {
        this.$store.commit({
          type: 'updateResultsFor',
          resultsFor: this.filterBy.title,
        })
        this.$router.push({
          path: '/gig',
          query: { title: this.filterBy.title },
        })
      },
    },

    unmounted() {
      clearInterval(this.heroInterval)
    },

    mounted() {
      window.onresize = () => {
        this.windowWidth = window.innerWidth
      }
    },

    created() {
      if (this.windowWidth > 400) {
        this.handleHeroGallery()
      }
    },
  }
</script>

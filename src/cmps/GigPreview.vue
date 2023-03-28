<template>
  <section class="gig-preview">
    <div class="gig-preview-img">
      <div class="gig-preview-img-container">
        <vueper-slides fade :touchable="false">
          <vueper-slide
            @click="goToDetails(gig._id)"
            v-for="(img, i) in gig.images"
            :key="i"
            :image="imgUrl(img)"
            @mouseenter="hoverTxt = true"
            @mouseleave="hoverTxt = false"
            :class="{ 'hover-txt': hoverTxt }"
            style="cursor: pointer">
          </vueper-slide>
        </vueper-slides>
      </div>
    </div>
    <div class="card-info">
      <section class="seller-container" @click.stop="goToDetails(gig._id)">
        <div class="seller-img">
          <img :src="gig.owner.imgUrl" alt="" />
        </div>
        <section>
          <div class="seller-info">
            <h4 class="seller-name">{{ gig.owner.fullname }}</h4>
            <span class="seller-rate">Level {{ gig.owner.rate }} Seller</span>
          </div>
        </section>
      </section>
      <div class="gig-preview-info">
        <p
          class="gig-preview-title"
          @click="goToDetails(gig._id)"
          :class="{ 'hover-txt': hoverTxt }">
          {{ gig.title }}
        </p>
        <div class="gig-rating">
          <span class="icon-star gold" v-html="getSvg('starGold')"></span>
          <p class="gig-preview-rate">
            {{ gig.rate }}<span class="total-rates">{{ totalRates }} </span>
          </p>
        </div>
      </div>
    </div>
    <div class="gig-preview-price">
      <span @click="addToFav" :class="isFav ? 'fill' : ''" class="icon-heart" v-html="getSvg('heartFill')"></span>
      <p class="txt-capitalized">starting at</p>
      <span class="gig-span-price">US${{ gig.price }}</span>
    </div>
  </section>
</template>

<script>
import { svgService } from '../services/svg.service'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
  name: 'GigPreview',

  props: {
    gig: Object,
  },
  data() {
    return {
      isFav: false,
      hoverTxt: false,
    }
  },
  computed: {
    totalRates() {
      return '(355)'
    },
  },
  methods: {
    addToFav() {
this.isFav = !this.isFav
    },
    getSvg(iconName) {
      return svgService.getSvg(iconName)
    },
    imgUrl(img) {
      return new URL(img, import.meta.url).href
    },
    goToDetails(id) {
      this.$router.push(`/details/${id}`)
    },
  },
  components: {
    VueperSlides,
    VueperSlide,
  },
}
</script>

<template>
  <section class="gig-preview">
    <div class="gig-preview-img">
      <div class="gig-preview-img-container">
        <vueper-slides fade :touchable="false">
          <vueper-slide
            v-for="(img, i) in gig.images"
            :key="i"
            :image="imgUrl(img)" />
        </vueper-slides>
      </div>
    </div>
    <section class="seller-container">
      <div class="seller-img">
        <img :src="gig.owner.imgUrl" alt="" />
      </div>
      <section>
        <div class="seller-info">
          <h4 class="seller-name">{{ gig.owner.fullname }}</h4>
        </div>
      </section>
    </section>
    <div class="gig-preview-info">
      <p class="gig-preview-title">{{ gig.title }}</p>
      <div class="gig-rating">
        <span class="icon-star" v-html="getSvg('star')"></span>
        <p class="gig-preview-rate">
          {{ gig.rate }}<span class="total-rates">{{ totalRates }} </span>
        </p>
      </div>
    </div>
    <div class="gig-preview-price">
      <p class="txt-capitalized">From</p>
      <span class="gig-span-price">${{ gig.price }}</span>
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
  computed: {
    totalRates() {
      return '(355)'
    },
    ownerLevel() {
      return 'Level 2 Seller'
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
  components: {
    VueperSlides,
    VueperSlide,
  },
}
</script>

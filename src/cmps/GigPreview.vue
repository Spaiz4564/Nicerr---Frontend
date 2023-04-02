<template>
  <section :class="['gig-preview', is]">
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
            <h4 class="seller-name">{{ gig.owner.username }}</h4>
            <span class="seller-rate">Level {{ gig.owner.level }} Seller</span>
          </div>
        </section>
      </section>
      <div class="gig-preview-info">
        <p
          class="gig-preview-title"
          @click="goToDetails(gig._id)"
          :class="{ 'hover-txt': hoverTxt }">
          <LongTxt :txt="gig.title" />
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
      <div class="gig-seller-btns">
        <div
          @click="editGig(gig._id)"
          className="icon"
          v-html="getSvg('pencil')"></div>
        <div
          @click="removeGig(gig._id)"
          className="icon"
          v-html="getSvg('trash')"></div>
      </div>
      <span
        @click="addToFav"
        :class="isFav ? 'fill' : ''"
        class="icon-heart"
        v-html="getSvg('heartFill')"></span>
      <div class="price-info flex align-center">
        <p class="txt-capitalized">starting at</p>
        <span class="gig-span-price">US${{ gig.price }}</span>
      </div>
    </div>
  </section>
</template>

<script>
import { svgService } from '../services/svg.service'
import { VueperSlides, VueperSlide } from 'vueperslides'
import { gigService } from '../services/gig.service'
import 'vueperslides/dist/vueperslides.css'
import LongTxt from './LongTxt.vue'
export default {
  name: 'GigPreview',

  props: {
    gig: Object,
    is: {
      type: String,
      default: 'gig-preview',
    },
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
    editGig(gigId) {
      console.log('editGig', gigId)
      this.$router.push(`/edit/${gigId}`)
    },
    removeGig(gigId) {
      console.log('removeGig', gigId)
      this.$store.dispatch({ type: 'removeGig', gigId })
    },
  },

  watch: {
    //if there is a change in the gigs update the store
    gigs() {
      this.$store.commit({ type: 'setGigs', gigs: this.gigs })
    },
  },

  components: {
    VueperSlides,
    VueperSlide,
    LongTxt,
  },
}
</script>

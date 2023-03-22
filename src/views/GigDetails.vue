<template>
  <section class="gig-details-main" v-if="gig">
    <main class="gig-details flex">
      <div class="gig-user-info">
        <!-- <img :src="gig.imgUrl" /> here come the image -->
        <p>{{ gig._id }}</p>
      </div>
      <div class="gig-purchase">
        <section class="header-purchase ">
          <h3 class="flex space-between">
            <b class="gig-title">user.rate</b>
            <div>
              <span class="price">{{ gig.price }}$</span>
            </div>
          </h3>
          <p class="gig-purchase-txt">
            This package is great if you want to try, good quality logo with source files (PSD files)
          </p>
        </section>
        <article>
          <div class="gig-purchase-options flex">
            <div class="delivery-wrapper flex align-center">
              <span className="icon" v-html="getSvg('clock')"></span>
              <b class="delivery"> 5 Days Delivery </b>
            </div>
            <div class="revisions-wrapper flex align-center">
              <span className="icon" v-html="getSvg('recycle')"></span>
              <b class="revisions"> 2 Revisions </b>
            </div>
          </div>
          <ul class="features">
            <li class="flex align-center">
              <span className="check fill" v-html="getSvg('checkSign')"></span>
              <p>1 concept included</p>
            </li>
            <li class="flex align-center">
              <span className="check" v-html="getSvg('checkSign')"></span>

              <p>Logo transparency</p>
            </li>
            <li class="flex align-center">
              <span className="check fill" v-html="getSvg('checkSign')"></span>

              <p>Vector File</p>
            </li>
            <li class="flex align-center">
              <span className="check fill" v-html="getSvg('checkSign')"></span>

              <p>Printable file</p>
            </li>
            <li class="flex align-center">
              <span className="check fill" v-html="getSvg('emptyCheckSign')"></span>

              <p>Include source file</p>
            </li>
          </ul>
          <div class="footer-purchase">
            <button class="btn-purchase">Continue</button>
          </div>
        </article>
        <div class="contact-seller">
          <div class="contact-seller-wrapper">
            <button>contact seller</button>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import { gigService } from '../services/gig.service.local'
import { svgService } from '../services/svg.service'

export default {
  name: 'Gig-Details',
  data() {
    return {
      gig: null,
    }
  },
  methods: {
    getSvg(iconName) {
      return svgService.getSvg(iconName)
    },
  },
  computed: {},
  created() {
    const { id } = this.$route.params
    gigService.getById(id).then(gig => {
      this.gig = gig
    })
  },
  components: {},
}
</script>

<style></style>

<template>
  <section class="gig-details-main main-layout full" v-if="gig">
    <div class="details-nav main-layout full">
      <ul class="details-router clean-list flex">
        <li v-for="route in router" class="detail-router" @click="navigateTo(`${route}`)">{{ route }} </li>
      </ul>
    </div>
    <main id="OverView" class="gig-details flex">
      <div class="gig-user-info flex column">
        <Overview id="OverView" :gig="gig" />
        <Description id="Description" :gig="gig" />
        <div>
          <AboutSeller :gig="gig" />
        </div>
        <Reviews id="Reviews" :gig="gig" />
      </div>
      <div class="gig-purchase" v-if="gig">
        <div class="info">
          <section class="header">
            <h3 class="flex space-between align-center">
              <b class="gig-title">Order Details</b>
              <div>
                <span class="price">${{ gig.price }}</span>
              </div>
            </h3>
            <p class="gig-purchase-txt">
              This package is great if you want to try, good quality logo with source files (PSD files)
            </p>
          </section>
          <article>
            <div class="details-options flex align-center">
              <div class="delivery-wrapper flex align-center">
                <span className="icon" v-html="getSvg('clock')"></span>
                <b class="delivery">{{ gig.daysToDeliver }} Days Delivery </b>
              </div>
              <div class="revisions-wrapper flex align-center">
                <span className="icon" v-html="getSvg('recycle')"></span>
                <b class="revisions"> 2 Revisions </b>
              </div>
            </div>
            <ul class="features">
              <li class="flex align-center">
                <span className="check fillGreen" v-html="getSvg('checkSign')"></span>
                <p>1 concept included</p>
              </li>
              <li class="flex align-center">
                <span className="check fill" v-html="getSvg('checkSign')"></span>

                <p>Logo transparency</p>
              </li>
              <li class="flex align-center">
                <span className="check fillGreen" v-html="getSvg('checkSign')"></span>

                <p>Vector File</p>
              </li>
              <li class="flex align-center">
                <span className="check fill" v-html="getSvg('checkSign')"></span>

                <p>Printable file</p>
              </li>
              <li class="flex align-center">
                <span className="check fillGreen" v-html="getSvg('checkSign')"></span>

                <p>Include source file</p>
              </li>
            </ul>
            <div class="footer" @click="HandlePurchase(gig._id)">
              <button class="btn-purchase">Continue</button>
              <div className="icon arrow" v-html="getSvg('arrowRight')"></div>
            </div>
          </article>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import { gigService } from '../services/gig.service.local'



import AboutSeller from '../cmps/details/AboutSeller.vue';
import Reviews from '../cmps/details/Reviews.vue';
import Description from '../cmps/details/Description.vue';
import Overview from '../cmps/details/Overview.vue';

import { svgService } from '../services/svg.service';

export default {
  name: 'Gig-Details',
  data() {
    return {
      gig: null,
      router: [
        "OverView",
        "Description",
        'AboutSeller',
        "Reviews"
      ]
    }
  },
  methods: {
    navigateTo(id) {
      console.log(id)
      this.$router.push({ hash: `${id}` })
      this.$nextTick(() => {
        const el = document.getElementById(`${id}`)
        console.log(el);
        if (el) {
          el.scrollIntoView((scrollY = 20))
        }
      })
    },
    getSvg(iconName) {
      return svgService.getSvg(iconName)
    },
    HandlePurchase(gigId) {
      this.$router.push(`/purchase/${gigId}`)
    }, imgUrl(img) {
      return new URL(img, import.meta.url).href
    },
  },
  computed: {},
  created() {
    const { id } = this.$route.params
    gigService.getById(id).then((gig) => {
      this.gig = gig
    })
  },
  components: {
    AboutSeller,
    Overview,
    Description,
    Reviews
  },
}
</script>

<style></style>

<template>
  <section class="gig-details-main main-layout full" v-if="gig">
    <div class="details-nav main-layout full">
      <ul class="details-router clean-list flex">
        <li
          v-for="route in router"
          class="detail-router"
          :class="[route === this.route ? 'selected' : '']"
          @click="navigateTo(`${route}`), changeSelect(`${route}`)">
          {{ route }}
        </li>
      </ul>
    </div>
    <main id="OverView" class="gig-details flex">
      <div class="gig-user-info flex column">
        <Overview id="Overview" :gig="gig" />
        <div class="gig-purchase narrow" v-if="gig">
          <div class="info">
            <section class="header">
              <h3 class="flex space-between align-center">
                <b class="gig-title">Order Details</b>
                <div>
                  <span class="price">${{ gig.price }}</span>
                </div>
              </h3>
              <p class="gig-purchase-txt">
                This package is great if you want to try, good quality logo with
                source files (PSD files)
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
                  <p class="revisions">2 Revisions</p>
                </div>
              </div>
              <ul class="features">
                <li class="flex align-center">
                  <span
                    className="check fillGreen"
                    v-html="getSvg('checkSign')"></span>
                  <p>1 concept included</p>
                </li>
                <li class="flex align-center">
                  <span
                    className="check fill"
                    v-html="getSvg('checkSign')"></span>

                  <p>Logo transparency</p>
                </li>
                <li class="flex align-center">
                  <span
                    className="check fillGreen"
                    v-html="getSvg('checkSign')"></span>

                  <p>Vector File</p>
                </li>
                <li class="flex align-center">
                  <span
                    className="check fill"
                    v-html="getSvg('checkSign')"></span>

                  <p>Printable file</p>
                </li>
                <li class="flex align-center">
                  <span
                    className="check fillGreen"
                    v-html="getSvg('checkSign')"></span>

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
        <Description :gig="gig" />
        <AboutSeller id="AboutSeller" :gig="gig" />
        <Reviews :gig="gig" />
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
              This package is great if you want to try, good quality logo with
              source files (PSD files)
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
                <p class="revisions">2 Revisions</p>
              </div>
            </div>
            <ul class="features">
              <li class="flex align-center">
                <span
                  className="check fillGreen"
                  v-html="getSvg('checkSign')"></span>
                <p>1 concept included</p>
              </li>
              <li class="flex align-center">
                <span
                  className="check fill"
                  v-html="getSvg('checkSign')"></span>

                <p>Logo transparency</p>
              </li>
              <li class="flex align-center">
                <span
                  className="check fillGreen"
                  v-html="getSvg('checkSign')"></span>

                <p>Vector File</p>
              </li>
              <li class="flex align-center">
                <span
                  className="check fill"
                  v-html="getSvg('checkSign')"></span>

                <p>Printable file</p>
              </li>
              <li class="flex align-center">
                <span
                  className="check fillGreen"
                  v-html="getSvg('checkSign')"></span>

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
import { gigService } from '../services/gig.service'

import AboutSeller from '../cmps/details/AboutSeller.vue'
import Reviews from '../cmps/details/Reviews.vue'
import Description from '../cmps/details/Description.vue'
import Overview from '../cmps/details/Overview.vue'
import { svgService } from '../services/svg.service'
import {
  socketService,
  SOCKET_EMIT_USER_WATCHING_GIG,
} from '../services/socket.service'

export default {
  name: 'Gig-Details',
  data() {
    return {
      gig: null,
      router: ['Overview', 'Description', 'Aboutseller', 'Reviews'],
      route: 'Overview',
    }
  },
  methods: {
    navigateTo(id) {
      this.$router.push({ hash: `${id}` })
      this.$nextTick(() => {
        const el = document.getElementById(`${id}`)
        console.log(el)
        if (el) {
          el.scrollIntoView()
        }
      })
    },
    getSvg(iconName) {
      return svgService.getSvg(iconName)
    },
    HandlePurchase(gigId) {
      this.$router.push(`/purchase/${gigId}`)
    },
    imgUrl(img) {
      return new URL(img, import.meta.url).href
    },
    changeSelect(route) {
      console.log(this.route, route)
      this.route = route
    },
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser
    },
  },
  async created() {
    const { id } = this.$route.params
    this.gig = await gigService.getById(id)
    if (this.loggedInUser && this.loggedInUser._id !== this.gig.owner._id)
      setTimeout(() => {
        socketService.emit(SOCKET_EMIT_USER_WATCHING_GIG, this.gig)
      }, 32000)
  },

  components: {
    AboutSeller,
    Overview,
    Description,
    Reviews,
  },
}
</script>

<style></style>

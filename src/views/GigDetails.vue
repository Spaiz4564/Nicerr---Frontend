<template>
  <section class="gig-details-main" v-if="gig">
    <main class="gig-details flex">
      <div class="gig-user-info flex column">
        <p class="title">I will create modern unique and creative logo design</p>
        <div class="info-img">
          <img class="logo" :src="gig.owner.imgUrl" alt="" />
          <p class="name">{{ gig.owner.fullname }}</p>
          <p>level 3 Seller (569)</p>
        </div>
        <div class="img">
          <div class="img-container">
            <vueper-slides fade :touchable="false">
              <vueper-slide v-for="(img, i) in gig.images" :key="i" :image="imgUrl(img)" />
            </vueper-slides>
          </div>
        </div>
        <section class="gig-review">
          <section class="header">
            <h2 class="title">What people loved about this seller</h2>
            <a>See all reviews</a>
          </section>
          <section class="review-container">
            <section class="review-preview">
              <section class="grid">
                <img class="img" />
                <section class="user-details flex align-center">
                  <p>Lidor</p>
                  <img class="img" />
                  <p>United State</p>
                  <section>
                    <ul class="ul-rate clean-list  flex justify-center align-center ">
                      <li>
                        <span className="check gold" v-html="getSvg('starGold')"></span>
                      </li>
                      <li>
                        <span className="check gold" v-html="getSvg('starGold')"></span>
                      </li>
                      <li>
                        <span className="check gold" v-html="getSvg('starGold')"></span>
                      </li>
                      <li>
                        <span className="check gold" v-html="getSvg('starGold')"></span>
                      </li>
                      <li>
                        <span className="check gold" v-html="getSvg('starGold')"></span>
                      </li>
                      <p class="rate">5</p>
                    </ul>
                  </section>

                </section>
                <section class="preview-content">
                  <p class="content">Thank you SO MUCH to the seller. He was so patient and willing to work and correct as
                    many times as
                    we needed as some things got miscommunicated and he easily fixed them. Thank you!!!</p>
                </section>
              </section>
            </section>
          </section>
        </section>
      </div>
      <div class="gig-purchase">
        <div class="info">
          <section class="header">
            <h3 class="flex space-between">
              <b class="gig-title">{{ gig.title }}</b>
              <div>
                <span class="price">{{ gig.price }}$</span>
              </div>
            </h3>
            <p class="gig-purchase-txt">
              This package is great if you want to try, good quality logo with source files (PSD files)
            </p>
          </section>
          <article>
            <div class="options flex">
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
                <span className="check fill" v-html="getSvg('checkSign')"></span>

                <p>Include source file</p>
              </li>
            </ul>
            <div class="footer">
              <button @click="HandlePurchase" class="btn-purchase">Continue</button>
            </div>
          </article>
        </div>
        <div class="contact-seller">
          <div class="contact-seller-wrapper">
            <button class="contact-seller-btn">Contact seller</button>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import { gigService } from '../services/gig.service.local'
import { svgService } from '../services/svg.service'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

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
    HandlePurchase() {
      this.$router.push('/')
    }, imgUrl(img) {
      return new URL(img, import.meta.url).href
    },
  },
  computed: {
    handleImages() {
      return this.gig.images[0]
    }
  },
  created() {
    const { id } = this.$route.params
    gigService.getById(id).then(gig => {
      this.gig = gig
    })
  },
  components: {
    VueperSlides,
    VueperSlide,
  },
}
</script>

<style></style>

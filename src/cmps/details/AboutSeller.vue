<template>
  <section id="AboutSeller" class="about-seller" v-if="gig">
    <h2>About The Seller</h2>
    <section class="seller-preview flex">
      <div class="img-container">
        <img :src=gig.owner.imgUrl alt="">
      </div>
      <section class="info-details flex ">
        <section class="line">
          <p class="user-name">{{ gig.owner.fullname }}</p>
          <div class="online-indicator">
            <span class="online">
              <div class="dot" v-html="getSvg('dot')"></div>
              Online
            </span>
          </div>
        </section>
        <p class="seller-level">Level 3 Seller</p>
        <section>
          <ul class="ul-rate clean-list  flex  align-center ">
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
            <p>(569)</p>
          </ul>
        </section>
        <!-- <button class="contact-me-btn">Contact Me</button> -->
      </section>
    </section>
    <section class="seller-details-container">
      <section class="seller-stat">
        <ul class="grid clean-list user-info">
          <li class="flex column">
            <span class="key">From</span>
            <span class="value">Bangladesh</span>
          </li>
          <li class="flex column">
            <span class="key">Member since</span>
            <span class="value">Jan 2023</span>
          </li>
          <li class="flex column">
            <span class="key">Avg. response time</span>
            <span class="value">1 hour</span>
          </li>
          <li class="flex column">
            <span class="key">Last delivery</span>
            <span class="value">about 12 hours</span>
          </li>
        </ul>
        <div class="seller-desc">
          <p>
            I am a professional graphics designer from Canada. Designing is not only my job, it's my
            Passion.</p>
          <p> All I need from you is a rough sketch of your idea. Then you can just relax and see the
            magic happening.</p>
          <p class="end"> Not only you'll get stunning and professional designs, but also you'll have top
            class custome
          </p>
        </div>
      </section>
    </section>
    <!-- <button class="contact-me-btn">Contact Me</button> -->
  </section>
  <section class="seller-details-container">
    <section class="seller-stat">
      <ul class="grid clean-list user-info">
        <li class="flex column">
          <span class="key">From</span>
          <span class="value">Bangladesh</span>
        </li>
        <li class="flex column">
          <span class="key">Member since</span>
          <span class="value">Jan 2023</span>
        </li>
        <li class="flex column">
          <span class="key">Avg. response time</span>
          <span class="value">1 hour</span>
        </li>
        <li class="flex column">
          <span class="key">Last delivery</span>
          <span class="value">about 12 hours</span>
        </li>
      </ul>
      <div class="seller-desc">
        <p>
          I am a professional graphics designer from Canada. Designing is not
          only my job, it's my Passion. All I need from you is a rough sketch
          of your idea. Then you can just relax and see the magic happening.
          Not only you'll get stunning and professional designs, but also
          you'll have top class custome
        </p>
      </div>
    </section>
  </section>
</template>

<script>
import { svgService } from '../../services/svg.service'

export default {
  props: ['gig'],
  name: 'AboutSeller',
  data() {
    return {}
  },
  methods: {
    getSvg(iconName) {
      return svgService.getSvg(iconName)
    },
  },
  computed: {},
  created() { },
  components: {},
}
</script>

<style></style>

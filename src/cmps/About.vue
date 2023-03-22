<template>
  <div class="about-section">
    <div class="info">
      <h2>A whole world of freelance talent at your fingertips</h2>
      <ul>
        <li>
          <div class="title">
            <div class="icon" v-html="getSvg('checkMark')"></div>
            <h6>The best for every budget</h6>
          </div>
          <p>
            Find high-quality services at every price point. No hourly rates,
            just project-based pricing.
          </p>
        </li>
        <li>
          <div class="title">
            <div class="icon" v-html="getSvg('checkMark')"></div>
            <h6>Quality work done quickly</h6>
          </div>
          <p>
            Find the right freelancer to begin working on your project within
            minutes.
          </p>
        </li>
        <li>
          <div class="title">
            <div class="icon" v-html="getSvg('checkMark')"></div>
            <h6>Protected payments, every time</h6>
          </div>
          <p>
            Always know what you'll pay upfront. Your payment isn't released
            until you approve the work.
          </p>
        </li>
        <li>
          <div class="title">
            <div class="icon" v-html="getSvg('checkMark')"></div>
            <h6>24/7 support</h6>
          </div>
          <p>
            Questions? Our round-the-clock support team is available to help
            anytime, anywhere.
          </p>
        </li>
      </ul>
    </div>
    <div class="teaser-img">
      <img src="../assets/images/About/Video Teaser.png" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { svgService } from '../services/svg.service'
export default {
  name: 'Popular Services',
  data() {
    return {}
  },
  methods: {
    getSvg(iconName) {
      return svgService.getSvg(iconName)
    },
  },
  components: {},
}
</script>

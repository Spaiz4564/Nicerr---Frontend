<template>
  <section class="app-footer main-layout">
    <div class="footer-container">
<div class="title">
    <h1>Nicerr</h1>
        <small>© Nicerr International Ltd. 2023</small>
</div>
<div class="social-media">
    <span className="icon" v-html="getSvg('twitter')"></span>
    <span className="icon" v-html="getSvg('facebook')"></span>
    <span className="icon" v-html="getSvg('linkdin')"></span>
    <span className="icon" v-html="getSvg('pintrest')"></span>
    <span className="icon" v-html="getSvg('instagram')"></span>
</div>
      
    </div>
  </section>
</template>

<script>
import { svgService } from '../services/svg.service'
export default {
  name: 'Explore Market',

  methods: {
    getSvg(iconName) {
      return svgService.getSvg(iconName)
    },
  },
}
</script>

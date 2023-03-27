<template>
  <section class="trustedBy-section main-layout">
    <div class="trusted-by">
      <div class="imgs">
        <span>Trusted by:</span>
        <img v-for="img in trustedBy" :src="imgUrl(img)"  alt="">
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { gigService } from '../../services/gig.service.local';
export default {
  name: 'Trusted By',
  data() {
    return {
      trustedBy: gigService.getTrustedBy() 
    }
  },
  methods: {
    imgUrl(img) {
      return new URL(img, import.meta.url).href
    },
  },
  components: {},
}
</script>

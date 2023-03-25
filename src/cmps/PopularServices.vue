<template>
  <div class="popular-services-section">
    <h2>Popular professional services</h2>
    <div class="services">
      <div class="services-img" v-for="service in services">
        <div class="service-info">
          <small>{{ service.desc }}</small>
          <span>{{ service.title }}</span>
        </div>
     <img :src="imgUrl(service.img)" alt="" />
      </div>
     
    </div>
  </div>
</template>

<script>
import { gigService } from '../services/gig.service.local';
export default {
  name: 'Popular Services',
  data() {
    return {
      services: gigService.getPopularServices()
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

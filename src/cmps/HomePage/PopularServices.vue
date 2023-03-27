<template>
  <div class="popular-services-section">
    <h2>Popular professional services</h2>
    <div class="services">
      <vueper-slides
        class="no-shadow"
        :visible-slides="5"
        slide-multiple
        :gap="3"
        :slide-ratio="1 / 4"
        :dragging-distance="200"
        :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
        <vueper-slide
          v-for="(service, i) in services"
          :key="service.img"
          :content="service.title"
          :title="service.desc"
          :image="imgUrl(service.img)"
          :link="service.link" />
      </vueper-slides>
    </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import { gigService } from '../../services/gig.service.local'
export default {
  name: 'Popular Services',
  data() {
    return {
      services: gigService.getPopularServices(),
    }
  },
  methods: {
    imgUrl(img) {
      return new URL(img, import.meta.url).href
    },
    goToService(service) {
      this.$router.push(`/gig/${service.id}`)
    },
  },
  components: {
    VueperSlides,
    VueperSlide,
  },
}
</script>

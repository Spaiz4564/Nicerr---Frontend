<template>
    <section class="nav-vuper">
        <vueper-slides 
        class="no-shadow nav-suggestions full"
        :visible-slides="3"
        slide-multiple
        :gap="2"
        :slide-ratio="1 / 4"
        :dragging-distance="200"
        :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
        <vueper-slide
          v-for="(category, i) in categories"
          :content="category.title"
          :link="category.link" />
      </vueper-slides>
    </section>
    
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import { gigService } from '../services/gig.service';
  export default {
    name: 'Nav vuperslides',

    data() {
      return {
        categories: gigService.getMarketCategories(),
      }
    },
    methods: {},
    components: {
        VueperSlides,
    VueperSlide,
    }
  }
</script>

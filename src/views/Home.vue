<template>
  <HeroSection />
  <TrustedBy />
  <PopularServices />
  <About />
  <ExploreMarket />
</template>

<script>
import HeroSection from '../cmps/homePage/HeroSection.vue'
import TrustedBy from '../cmps/homePage/TrustedBy.vue'
import PopularServices from '../cmps/homePage/PopularServices.vue'
import About from '../cmps/HomePage/About.vue'
import ExploreMarket from '../cmps/homePage/ExploreMarket.vue'

export default {
  name: 'home',
  data() {
    return {}
  },
  methods: {},
  components: {
    HeroSection,
    TrustedBy,
    PopularServices,
    About,
    ExploreMarket,
  },
}
</script>

<template>
  <HeroSection />
  <TrustedBy />
  <PopularServices />
  <About />
</template>

<script>
import HeroSection from '../cmps/HeroSection.vue'
import TrustedBy from '../cmps/TrustedBy.vue'
import PopularServices from '../cmps/PopularServices.vue'
import About from '../cmps/About.vue'

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
  },
}
</script>

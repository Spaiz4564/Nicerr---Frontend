<template>
  <HeroSection />
  <TrustedBy />
  <PopularServices />
</template>

<script>
import HeroSection from '../cmps/HeroSection.vue'
import TrustedBy from '../cmps/TrustedBy.vue'
import PopularServices from '../cmps/PopularServices.vue'

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
  },
}
</script>

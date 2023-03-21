<template>
  <ul class="gig-list">
    <li v-for="gig in gigs" :key="gig._id" @click="goToGigDetails(gig._id)">
      <GigPreview :gig="gig" />
    </li>
  </ul>
</template>

<script>
import GigPreview from './GigPreview.vue'
export default {
  name: 'GigList',
  props: {
    gigs: Array,
  },
  components: {
    GigPreview,
  },
  methods: {
    goToGigDetails(gigId) {
      this.$router.push(`/gig/${gigId}`)
    },
  },
}
</script>

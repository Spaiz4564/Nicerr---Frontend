<template>
  <ul class="gig-list">
    <li v-for="gig in gigs" :key="gig._id">
      <GigPreview :gig="gig" v-if="gig" />
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
    goToDetails(gigId) {
      this.$router.push(`/gig/${gigId}`)
    },
  },
}
</script>

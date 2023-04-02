<template>
  <ul class="gig-list">
    <li v-for="gig in gigs" :key="gig._id">
      <GigPreview :gig="gig" v-if="gig" />
    </li>
  </ul>
</template>

<script>
import GigPreview from './GigPreview.vue'
import ExploreMarket from './HomePage/ExploreMarket.vue'
export default {
  name: 'GigList',

  props: {
    gigs: Array,
    filterCategory: Array,
  },
  components: {
    GigPreview,
    ExploreMarket,
  },

  methods: {
    goToDetails(gigId) {
      this.$router.push(`/gig/${gigId}`)
    },
  },
}
</script>

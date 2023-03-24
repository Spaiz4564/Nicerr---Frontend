<template>
  <section class="seller-profile" v-if="owner">
    <div class="seller-profile-container">
      <div class="seller-profile-header">
        <div class="seller-profile-info">
          <h2>{{ owner.username }}</h2>
          <p>{{ owner.location }}</p>
          <p>{{ owner.description }}</p>
        </div>
      </div>
      <h2>My gigs</h2>
      <div
        class="seller-profile-gig"
        v-for="gig in owner.gigs"
        :key="gig._id"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SellerProfile',
  data() {
    return {
      owner: null,
    }
  },
  created() {
    const id = this.$route.params.id
    this.owner = this.$store.getters.getOwnerById(id)
    console.log('owner', this.owner)
    console.log(this.owner.username)
  },
  methods: {},
}
</script>

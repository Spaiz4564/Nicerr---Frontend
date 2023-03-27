<template>
  <section class="seller-profile" v-if="owner">
    <div class="seller-profile-container">
      <div class="seller-profile-info">
        <h2>{{ owner.username }}</h2>
      </div>
    </div>
    <form @submit.prevent="saveGig">
      <div class="seller-profile-inputs">
        <label class="label" for="title">Title</label>
        <input
          class="input"
          type="text"
          name="title"
          v-model="gigToAdd.title"
          placeholder="Title" />
        <label class="label" for="price">Price</label>
        <input
          class="input"
          v-model="gigToAdd.price"
          type="number"
          name="price"
          placeholder="Price" />
        <button class="btn-sign">Save</button>
      </div>
    </form>
    <div class="seller-profile-gigs">
      <div class="seller-profile-gig" v-for="gig in gigs" :key="gig._id">
        <div class="seller-profile-gig-info">
          <h3>{{ gig.title }}</h3>
          <p>{{ gig.price }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gigService } from '../services/gig.service.local'
import { userService } from '../services/user.service'

export default {
  name: 'SellerProfile',
  data() {
    return {
      gigToAdd: null,
    }
  },
  created() {
    this.gigToAdd = gigService.getEmptyGig()
  },
  computed: {
    owner() {
      return userService.getLoggedinUser()
    },
    gigs() {
      const owner = userService.getLoggedinUser()
      return this.$store.getters.gigsByOwner(owner._id)
    },
  },
  methods: {
    saveGig() {
      this.$store.dispatch({ type: 'saveGig', gig: this.gigToAdd })
      console.log('gig saved')
    },
  },
}
</script>

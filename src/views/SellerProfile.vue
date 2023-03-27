<template>
  <section class="seller-profile main-layout" v-if="owner">
    <div class="seller-profile-container">
      <div class="seller">
        <div class="user-info">   
      <div class="seller-profile-info">
        <div class="seller-profile-img">
        <img :src="owner.imgUrl" alt="" />
        <h2>{{ owner.fullname }}</h2>
      </div>
      <div class="details">
        <h4>Country <span>{{ owner.location }}</span></h4>
        <h4>Member since <span>Mar 2023</span></h4>
      </div>
 
      </div>
        </div>
        <div class="desc-container">
          <h4>Description</h4>
        </div>
    </div>
  
   
    <div class="seller-profile-gigs">
      <h4>Active gigs</h4>
      <div class="seller-profile-gig" v-for="gig in gigs" :key="gig._id">
        <div class="seller-profile-gig-info">
          <h3>{{ gig.title }}</h3>
          <p>{{ gig.price }}</p>
        </div>
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
    this.loadGigs()
  },
  computed: {
    owner() {
      console.log('owner', userService.getLoggedinUser())
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
    loadGigs() {
      this.$store.dispatch({ type: 'loadGigs' })
    },
  },
}
</script>

<!-- 
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
</form> -->
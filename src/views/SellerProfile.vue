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
              <h4>
                Country <span>{{ owner.location }}</span>
              </h4>
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
        <div class="add-gig">
          <div class="flex column align-center">
            <span @click="addGig" class="add-gig-btn">+</span>
            <p>Create a new Gig</p>
          </div>
        </div>
        <GigPreviewSeller v-for="gig in gigs" :gig="gig" :key="gig._id" />
      </div>
    </div>
  </section>
</template>

<script>
import { gigService } from '../services/gig.service.local'
import { userService } from '../services/user.service'
import GigPreviewSeller from '../cmps/GigPreviewSeller.vue'

export default {
  name: 'SellerProfile',
  data() {
    return {
      gigToAdd: null,
    }
  },
  created() {
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
    loadGigs() {
      this.$store.dispatch({ type: 'loadGigs' })
    },
    addGig() {
      console.log('add gig')
      this.$router.push('/edit')
    },
  },

  components: {
    GigPreviewSeller,
  },
}
</script>

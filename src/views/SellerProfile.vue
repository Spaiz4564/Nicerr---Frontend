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
        <div class="gigs-container-seller">
          <div class="gigs-preview-seller">
            <span @click="addGig" class="add-gig-btn">+</span>
            <p>Create a new Gig</p>
          </div>
          <ul class="gigs-list-seller">
            <li v-for="gig in gigs">
              <GigPreview :gig="gig" :is="'gig-preview-seller'" />
              <div class="gig-seller-btns">
                <button @click="editGig(gig._id)" class="btn">Edit</button>
                <button @click="removeGig(gig._id)" class="btn">Remove</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gigService } from '../services/gig.service.local'

import { userService } from '../services/user.service'
import GigPreviewSeller from '../cmps/GigPreviewSeller.vue'
import GigPreview from '../cmps/GigPreview.vue'

export default {
  name: 'SellerProfile',
  data() {
    return {
      gigToAdd: null,
      gigs: null,
    }
  },
  created() {
    this.loadGigsByOwner()
  },
  computed: {
    owner() {
      return userService.getLoggedinUser()
    },
  },
  methods: {
    async loadGigsByOwner() {
      const owner = userService.getLoggedinUser()
      this.gigs = await gigService.query({ owner: owner._id })
    },

    addGig() {
      console.log('add gig')
      this.$router.push('/edit')
    },
    editGig(gigId) {
      console.log('editGig', gigId)
      this.$router.push(`/edit/${gigId}`)
    },
    removeGig(gigId) {
      console.log('removeGig', gigId)
      this.$store.dispatch({ type: 'removeGig', gigId })
      this.loadGigsByOwner()
    },
  },
  watch: {
    $store: {
      handler() {
        this.loadGigsByOwner()
      },
      deep: true,
    },
  },

  components: {
    GigPreviewSeller,
    GigPreview,
  },
}
</script>

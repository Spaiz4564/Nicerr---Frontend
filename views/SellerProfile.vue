<template>
  <section class="seller-profile main-layout full" v-if="owner">
    <div
      class="seller-profile-container flex"
      :class="!owner.isSeller ? 'gigs-not-seller' : ''">
      <div class="seller">
        <div class="user-info">
          <div class="seller-profile-info">
            <div class="seller-profile-img">
              <img :src="owner.imgUrl" alt="" />
              <h2>{{ owner.fullname }}</h2>
            </div>
            <div class="details-container">
              <div class="details">
                <div class="svg-info">
                  <div className="icon" v-html="getSvg('location')"></div>
                  <h4>Country</h4>
                </div>
                <span>Israel</span>
              </div>

              <div class="details">
                <div class="svg-info">
                  <div className="icon" v-html="getSvg('user')"></div>
                  <h4>Member since</h4>
                </div>
                <span>June 2018</span>
              </div>
            </div>
          </div>
        </div>
        <div class="desc-container">
          <div class="desc">
            <h4>Description</h4>
            <p>
              Hello, this is {{ owner.fullname }}, stand up for vividstore,I am
              a young and enthusiastic graphic artist and realistic pencil
              sketch artist. I am certified as graphic designer from George
              Washington University, USA. I have almost 11 years experience in
              this field since my university life. I really love to work with
              Adobe Illustrator, Adobe Photoshop, and so on as a full time
              online freelancer. And also passionate about sketching. Thank you.
            </p>
          </div>
        </div>
      </div>

      <div v-if="owner.isSeller" class="seller-profile-gigs">
        <h4>Active Gigs</h4>
        <div class="gigs-container">
          <ul class="gigs-list-seller">
            <div class="add-gig-container">
              <div class="flex column align-center">
                <span @click="addGig" class="add-gig-btn">+</span>
                <p>Create a new Gig</p>
              </div>
            </div>
            <li v-for="gig in gigs">
              <GigPreview :gig="gig" :is="'gig-preview-seller'" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gigService } from '../services/gig.service'

import { userService } from '../services/user.service'
import GigPreviewSeller from '../cmps/GigPreviewSeller.vue'
import GigPreview from '../cmps/GigPreview.vue'
import { svgService } from '../services/svg.service'

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
      console.log(this.gigs)
    },

    addGig() {
      console.log('add gig')
      this.$router.push('/edit')
    },

    getSvg(iconName) {
      return svgService.getSvg(iconName)
    },
  },

  components: {
    GigPreviewSeller,
    GigPreview,
  },
}
</script>

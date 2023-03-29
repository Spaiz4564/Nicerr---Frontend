<template>
  <section class="gig-edit">
    <form @submit.prevent="saveGig" class="gig-edit-form">
      <div class="gig-edit-header">
        <h2>Edit Gig</h2>
      </div>
      <div class="edit-form" v-if="gigToAdd">
        <label for="title">Title</label>
        <input type="text" id="title" v-model="gigToAdd.title" />
        <label for="price">Price</label>
        <input
          type="number"
          placeholder="Enter price"
          id="price"
          v-model="gigToAdd.price" />
        <label for="category">Category</label>
        <select v-model="gigToAdd.categories" multiple>
          <option value="website design">Website & Design</option>
          <option value="digital marketing">Digital Marketing</option>
          <option value="illustrations">Illustrations</option>
          <option value="ai services">Ai-Services</option>
          <option value="logo design">Logo Design</option>
          <option value="voice over">Voice & Sound</option>
          <option value="business">Business</option>
          <option value="lifestyle">Lifestyle</option>
        </select>
        <label for="days">Days to deliver</label>
        <input
          placeholder="How Many Days To Deliver?"
          type="number"
          id="days"
          v-model="gigToAdd.daysToDeliver" />
      </div>
      <div class="gig-edit-footer">
        <button class="btn">Save</button>
      </div>
    </form>
  </section>
</template>

<script>
import { gigService } from '../services/gig.service.local'
import ImgUploader from '../cmps/ImgUploader.vue'
export default {
  name: ' GigEdit',
  data() {
    return {
      gigToAdd: null,
    }
  },
  async created() {
    const gigId = this.$route.params.gigId
    if (gigId) {
      this.gigToAdd = await gigService.getById(gigId)
    } else {
      this.gigToAdd = gigService.getEmptyGig()
      console.log('empty', this.gigToAdd)
    }
  },
  methods: {
    saveGig() {
      if (this.gigToAdd._id) {
        console.log('update')
        this.$store.dispatch({ type: 'updateGig', gig: this.gigToAdd })
      } else {
        console.log('add')
        this.gigToAdd.owner = this.$store.getters.loggedinUser
        this.$store.dispatch({ type: 'addGig', gig: this.gigToAdd })
      }
      this.$router.push(`/seller/profile/${this.gigToAdd.owner._id}`)
    },
  },

  components: {
    ImgUploader,
  },
}
</script>

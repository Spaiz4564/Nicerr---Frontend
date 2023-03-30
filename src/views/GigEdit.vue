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
import { gigService } from '../services/gig.service'
import ImgUploader from '../cmps/ImgUploader.vue'
export default {
  name: ' GigEdit',
  data() {
    return {
      gigToAdd: null,
      user: null,
    }
  },
  async created() {
    this.user = await this.$store.dispatch({ type: 'loadUser' })
    const gigId = this.$route.params.gigId
    if (gigId) {
      const gig = await gigService.getById(gigId)
      this.gigToAdd = gig
    } else {
      this.gigToAdd = gigService.getEmptyGig()
      this.gigToAdd.owner = this.user
    }
    console.log(this.gigToAdd)
  },
  methods: {
    async saveGig() {
      await gigService.save(this.gigToAdd)
      this.$router.push('/')
    },
  },
  components: {
    ImgUploader,
  },
}
</script>

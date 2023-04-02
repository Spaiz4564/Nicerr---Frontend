<template>
  <section class="gig-edit">
    <form @submit.prevent="saveGig" class="gig-edit-form">
      <div class="top-form flex column space-between" v-if="gigToAdd">
        <label for="title">
          <span class="flex column justify-center">
            <h3>Title</h3>
            <p>
              As your Gig storefront, your title is the most important place to
              include keywords that buyers would likely use to search for a
              service like yours.
            </p>
          </span>
          <input
            type="text"
            id="title"
            v-model="gigToAdd.title"
            placeholder="I will" />
        </label>
        <label class="description">
          <span class="flex column">
            <h3>Description</h3>
            <p>ABriefly Describe Your Gig</p>
          </span>
          <textarea
            v-model="gigToAdd.description"
            placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry...."></textarea>
        </label>
      </div>
      <div class="bottom-form flex space-between">
        <label class="category flex column">
          <span class="flex column">
            <h3>Category</h3>
            <p>Choose the category most suitable for your Gig.</p>
          </span>
          <select v-model="gigToAdd.categories">
            <option value="graphic design">Graphics & Design</option>
            <option value="digital">Digital Marketing</option>
            <option value="writing">Writing & Translation</option>
            <option value="video editing">Video &amp; Animation</option>
            <option value="tech">Programming &amp; Tech</option>
            <option value="business">Business</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="data">Data</option>
          </select>
        </label>
        <label class="days-to-make flex column">
          <span class="flex column">
            <h3>Days To Make</h3>
            <p>Days it will take you on average to finish this gig</p>
          </span>
          <select v-model="gigToAdd.daysToDeliver">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </label>
        <label class="price flex column">
          <span>
            <h3>Price</h3>
            <p>Price you're offering for this gig</p>
          </span>
          <input type="number" v-model="gigToAdd.price"
        /></label>
      </div>
      <div class="images flex column">
        <span>
          <h3>Upload Images</h3>
          <p>
            Encourage buyers to choose your Gig by featuring a variety of your
            work.
          </p>
        </span>
        <section class="img-uploader">
          <label class="upload-container">Upload a file</label>
          <label for="imgUpload"></label>
          <input type="file" accept="img/*" id="imgUpload" />
          <div class="upload-preview flex"></div>
        </section>
      </div>
    </form>
    <div class="btns flex space-between">
      <button class="cancel-btn">Cancel</button>
      <button @click="saveGig" class="save-btn">Save</button>
    </div>
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
  },
  methods: {
    async saveGig() {
      await gigService.save(this.gigToAdd)
      this.$router.push(`/seller/profile/${this.user._id}`)
    },
  },
  components: {
    ImgUploader,
  },
}
</script>

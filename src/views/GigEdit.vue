<template>
  <section class="gig-edit">
    <form @submit.prevent="saveGig">
      <div class="gig-edit-header">
        <h2>Edit Gig</h2>
      </div>
      <div class="edit-form" v-if="gigToAdd">
        <label for="title">Title</label>
        <input type="text" id="title" v-model="gigToAdd.title" />
        <label for="price">Price</label>
        <input type="number" id="price" v-model="gigToAdd.price" />
      </div>
      <div class="gig-edit-footer">
        <button class="btn">Save</button>
      </div>
    </form>
  </section>
</template>

<script>
import { gigService } from '../services/gig.service.local'
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
      this.$router.push('/gig')
    },
  },
}
</script>

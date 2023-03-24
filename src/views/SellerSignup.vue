<template>
  <section class="seller-signup">
    <div class="signup-header">
      <h2>Personal Info</h2>
      <p class="seller-info">
        Tell us a bit about yourself. This information will appear on your
        public profile, so that potential buyers can get to know you better.
      </p>
      <hr />
    </div>
    <div class="seller-signup-form">
      <form>
        <div class="seller-signup-inputs">
          <label class="label" for="full-name">Full name</label>
          <input
            class="input"
            type="text"
            name="full-name"
            v-model="owner.fullname"
            placeholder="Fullname" />
          <label class="label" for="username">Display name</label>
          <input
            type="text"
            class="input"
            name="username"
            v-model="owner.username"
            placeholder="Type your display name " />
          <label class="label" for="description">Description</label>
          <textarea
            class="input"
            name="description"
            v-model="owner.description"
            id=""
            cols="30"
            rows="10"></textarea>
          <label class="label" for="location">Enter your country</label>
          <input
            class="input"
            v-model="owner.location"
            type="text"
            name="location"
            placeholder="Country" />
          <button class="btn-sign" @click.prevent="addOwner">Continue</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { utilService } from '../services/util.service'

export default {
  data() {
    return {
      owner: {
        fullname: '',
        username: '',
        description: '',
        location: '',
        imgUrl: '',
        gigs: [],
        reviews: [],
        orders: [],
      },
    }
  },
  methods: {
    addOwner() {
      const id = utilService.makeId()
      this.owner._id = id

      this.$store.dispatch({ type: 'addNewOwner', owner: this.owner })
      this.$router.push(`/seller/profile/${id}`)
      console.log('owner', this.owner)
    },
  },
}
</script>

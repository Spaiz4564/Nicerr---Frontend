<template>
  <section class="gig-details" v-if="gig">
    <main class="gig-details-main">
      <div class="gig-user-info">
        <h1>{{ gig.title }}</h1>
        <!-- <img :src="gig.imgUrl" /> here come the image -->
        <p>{{ gig._id }}</p>
      </div>
      <div class="gig-purchase">
        price: {{ gig.price }}
        <p> lmao cool gug BRUH</p>
        <button class="btn-purchase">Purchase</button>
        <button class="btn-contact-seller">contact seller</button>
      </div>
    </main>
  </section>
</template>

<script>

import { gigService } from '../services/gig.service.local'

export default {
  name: 'Gig-Details',
  data() {
    return {
      gig: null
    }
  },
  methods: {

  },
  computed: {

  },
  created() {
    const { id } = this.$route.params
    gigService.getById(id).then((gig) => {
      this.gig = gig
    })
  },
  components: {

  },
}
</script>

<style></style>

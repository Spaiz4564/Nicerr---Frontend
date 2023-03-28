<template>
  <section class="gig-details-main" v-if="gig">
    <button @click="navigateTo">About Seller</button>
    <main class="gig-details flex">
      <GigInfoUser id="AboutSeller" :gig="gig" />
      <GigPurchase :gig="gig" />
    </main>
  </section>
</template>

<script>
import { gigService } from '../services/gig.service.local'
import GigPurchase from '../cmps/details/GigDetailsPurchase.vue'
import GigInfoUser from '../cmps/details/GigDetailsInfoUser.vue'
import About from '../cmps/HomePage/About.vue'

export default {
  name: 'Gig-Details',
  data() {
    return {
      gig: null,
    }
  },
  methods: {
    navigateTo() {
      this.$router.push({ hash: '#AboutSeller' })
      this.$nextTick(() => {
        const el = document.getElementById('AboutSeller')
        if (el) {
          el.scrollIntoView()
        }
      })
    }
  },
  computed: {},
  created() {
    const { id } = this.$route.params
    gigService.getById(id).then((gig) => {
      this.gig = gig
    })
  },
  components: {
    GigPurchase,
    GigInfoUser,
    About
  },
}
</script>

<style></style>

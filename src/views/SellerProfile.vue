<template>
  <section v-if="seller" class="seller-profile">
    <h2>hello</h2>
  </section>
</template>

<script>
export default {
  name: 'SellerProfile',
  data() {
    return {
      seller: null,
    }
  },
  async created() {
    const sellerId = this.$route.params.sellerId
    const seller = await this.$store.dispatch({ type: 'loadSeller', sellerId })
    this.seller = seller
    console.log('seller', seller)
  },
  methods: {},
}
</script>

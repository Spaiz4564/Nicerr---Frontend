<template>
  <section class="gig-preview">
    <div class="gig-preview-img">
      <div class="gig-preview-img-container">
        <img :src="gig.imgUrl" alt="" />
      </div>
    </div>
    <section class="seller-container">
      <div class="seller-img">
        <img :src="gig.owner.imgUrl" alt="" />
      </div>
      <div class="seller-info">
        <h4 class="seller-name">{{ gig.owner.fullname }}</h4>
        <p class="gig-seller-rate">{{ ownerLevel }}</p>
      </div>
    </section>
    <div class="gig-preview-info">
      <p class="gig-preview-title">{{ gig.title }}</p>
      <div class="gig-rating">
        <span>★</span>
        <p class="gig-preview-rate">{{ gig.rate }}{{ totalRates }}</p>
      </div>
    </div>
    <div class="gig-preview-price">
      <p class="txt-capitalized">starting at</p>
      <span> US${{ gig.price }}</span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GigPreview',
  props: {
    gig: Object,
  },
  computed: {
    totalRates() {
      return '(355)'
    },
    ownerLevel() {
      return 'Level 2 Seller'
    },
  },
}
</script>

<template>
  <section class="gig-preview">
    <div class="gig-preview-img">
      <div class="gig-preview-img-container">
        <img :src="gig.imgUrl" alt="" />
      </div>
    </div>
    <div class="seller-seller-info">
      <h4>{{ gig.owner.fullname }}</h4>
      <p class="gig-seller-rate">{{ gig.owner.rate }}</p>
    </div>
    <div class="seller-seller-img">
      <img :src="gig.owner.imgUrl" alt="" />
    </div>
    <div class="gig-preview-info">
      <h3>{{ gig.title }}</h3>
      <p class="gig-preview-rate">{{ gig.rate }}{{ totalRates }}</p>
    </div>
    <div class="gig-preview-price">
      <p>starting at</p>
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
      return '(10)'
    },
  },
}
</script>

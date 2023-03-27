<template>
  <section class="gigs-seller">
    <div class="img-container">
      <img :src="gig.imgUrl" alt="" />
    </div>
    <div class="gig-seller-details">
      <h3>{{ gig.title }}</h3>
      <div class="gig-seller-price">
        <h4>starting at {{ gig.price }}$</h4>
      </div>
      <div class="gig-seller-btns">
        <button @click="editGig" class="btn">Edit</button>
        <button @click="removeGig" class="btn">Delete</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    gig: Object,
  },
  name: 'GigPreviewSeller',

  data() {
    return {}
  },
  methods: {
    editGig() {
      console.log('editGig', this.gig._id)
      this.$router.push(`/edit/${this.gig._id}`)
    },
    removeGig() {
      console.log('removeGig', this.gig._id)
      this.$store.dispatch({ type: 'removeGig', gigId: this.gig._id })
    },
  },
}
</script>

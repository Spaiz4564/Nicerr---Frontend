<template>
  <section class="seller-profile" v-if="owner">
    <div class="seller-profile-container">
      <div class="seller-profile-header">
        <div class="seller-profile-info">
          <h2>{{ owner.username }}</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { userService } from '../services/user.service'

export default {
  name: 'SellerProfile',
  data() {
    return {
      gigToAdd: {
        title: '',
        price: '',
        category: '',
      },
    }
  },
  computed: {
    owner() {
      return this.$store.state.owner
    },
  },
  created() {
    const { owner } = this.$store.state
    if (owner) this.owner = owner
    console.log('owner', this.owner)
  },
  methods: {},
}
</script>

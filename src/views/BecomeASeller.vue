<template>
  <section class="seller-signup main-layout full" v-if="userToEdit">
    <div class="seller-signup-form">
      <h1>Register as Seller</h1>
      <form @submit.prevent="saveUser">
        <div class="seller-signup-inputs">
          <label class="label" for="full-name">Full name</label>
          <input
            class="input"
            type="text"
            name="full-name"
            v-model="userToEdit.fullname"
            placeholder="Fullname" />
          <label class="label" for="username">Display name</label>
          <label class="label" for="password">Password</label>
          <input
            type="password"
            class="input"
            name="password"
            v-model="userToEdit.password"
            placeholder="Password" />

          <input
            type="text"
            class="input"
            name="username"
            v-model="userToEdit.username"
            placeholder="Type your display name " />
          <label class="label" for="location">Enter your country</label>
          <input
            class="input"
            v-model="userToEdit.location"
            type="text"
            name="location"
            placeholder="Country" />
          <button class="btn-sign">Continue</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { utilService } from '../services/util.service'
import { userService } from '../services/user.service'

export default {
  name: 'BecomeASeller',
  data() {
    return {
      userToEdit: null,
    }
  },
  created() {
    const loggedinUser = this.$store.getters.loggedinUser
    if (loggedinUser) {
      this.userToEdit = loggedinUser
    } else {
      this.userToEdit = userService.getEmptyUser()
    }
  },

  methods: {
    async saveUser() {
      if (!this.userToEdit._id)
        await this.$store.dispatch({
          type: 'signup',
          user: { ...this.userToEdit, isSeller: true },
        })
      else
        await this.$store.dispatch({
          type: 'updateUsers',
          user: { ...this.userToEdit, isSeller: true },
        })
      this.$router.push(`/seller/profile/${this.userToEdit._id}`)
    },
  },
}
</script>

<template>
  <section class="seller-signup main-layout full" v-if="userToEdit">
    <div class="seller-signup-form">
      <h1 class="txt-header">Register as Seller</h1>
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
          <input
            type="text"
            class="input"
            name="username"
            v-model="userToEdit.username"
            placeholder="Type your display name " />
          <label class="label" for="password">Password</label>
          <input
            type="password"
            class="input"
            name="password"
            v-model="userToEdit.password"
            placeholder="Password" />
          <label class="label" for="location">Enter your country</label>
          <input
            class="input"
            v-model="userToEdit.location"
            type="text"
            name="location"
            placeholder="Country" />
          <h2 class="txt-upload">Upload your profile picture</h2>
          <div :class="[img ? 'clear' : '']">
            <img
              class="img-become"
              src="../assets/images/About/default.png"
              alt="" />
          </div>
          <div class="upload-cmp">
            <div class="img-upload-seller"></div>
            <ImgUploader @uploaded="imgUrl" @image="handleImage" />
          </div>
          <button class="btn-sign">Continue</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { utilService } from '../services/util.service'
import { userService } from '../services/user.service'
import ImgUploader from '../cmps/ImgUploader.vue'

export default {
  name: 'BecomeASeller',
  data() {
    return {
      userToEdit: null,
      img: false,
    }
  },
  created() {
    const userId = this.$route.params.userId
    if (userId) {
      const user = this.$store.getters.users.find((user) => user._id === userId)
      this.userToEdit = user
    } else {
      this.userToEdit = userService.getEmptyUser()
      console.log(this.userToEdit)
    }
  },

  methods: {
    async saveUser() {
      const name = this.toUpperCase(this.userToEdit.fullname)
      this.userToEdit.fullname = name
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
      this.$router.push(`/`)
    },
    imgUrl(url) {
      console.log(url)
      this.userToEdit.imgUrl = url
    },
    handleImage() {
      this.img = !this.img
    },

    toUpperCase(fullname) {
      const name = fullname
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(' ')
      return name
    },
  },
  components: {
    ImgUploader,
  },
}
</script>

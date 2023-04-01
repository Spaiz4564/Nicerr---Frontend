<template>
  <section class="seller-signup main-layout full" v-if="userToEdit">
    <section class="seller-signup-container">
      <h1 class="txt-header">Register as Seller</h1>
      <div class="seller-signup-form">
        <form @submit.prevent="saveUser">
          <div class="seller-signup-inputs">
            <div class="flex column">
              <label class="label" for="full-name">Full name</label>
              <p>Ex. John Smith</p>
            </div>
            <input
              class="input"
              type="text"
              name="full-name"
              v-model="userToEdit.fullname"
            />
            <div class="flex column">
              <label class="label" for="username">username</label>
              <p>this name will be shown to other users</p>
            </div>
            <input
              type="text"
              class="input"
              name="username"
              v-model="userToEdit.username"
            />
            <div class="flex column">
              <label class="label" for="password">Password</label>
              <p>Type your password</p>
            </div>
            <input
              type="password"
              class="input"
              name="password"
              v-model="userToEdit.password"
            />
            <div class="flex column">
              <h2 class="txt-upload">Profile picture</h2>
              <p>
                Add a profile picture of yourself so customers will know exactly
                who they’ll be working with.
              </p>
            </div>
            <div class="img-upload">
              <div :class="[img ? 'clear' : '']">
                <img src="../assets/images/About/default.png" alt="" />
              </div>
              <ImgUploader @uploaded="imgUrl" @image="handleImage" />
            </div>
            <div class="flex column">
              <label class="label" for="location">Description</label>
              <p>
                Share a bit about your work experience, cool projects you’ve
                completed, and your area of expertise.
              </p>
            </div>

            <textarea
              v-model="userToEdit.description"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <div class="flex column">
              <label class="label" for="location">Country</label>
              <p>Where are you from?</p>
            </div>
            <input
              class="input"
              v-model="userToEdit.location"
              type="text"
              name="location"
            />

            <RouterLink to="/"
              ><button class="button-back">Back</button></RouterLink
            >
            <button class="btn-sign">Continue</button>
          </div>
        </form>
      </div>
    </section>
  </section>
  <section />
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
        const user = this.$store.getters.users.find(user => user._id === userId)
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
        this.$router.push('/')
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
          .map(word => word[0].toUpperCase() + word.slice(1))
          .join(' ')
        return name
      },
    },
    components: {
      ImgUploader,
    },
  }
</script>

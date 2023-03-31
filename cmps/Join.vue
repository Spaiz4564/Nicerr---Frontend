<template>
  <div v-clickOutsideDirective="hey" class="container-about">
    <form @submit.prevent="saveUser" class="signup-form">
      <h3>Join Nicerr</h3>
      <div class="img-upload">
        <div :class="[img ? 'clear' : '']">
          <img src="../assets/images/About/default.png" alt="" />
        </div>
        <ImgUploader @uploaded="imgUrl" @image="handleImage" />
      </div>
      <input type="text" v-model="userToEdit.fullname" placeholder="Full name" />
      <input type="text" v-model="userToEdit.username" placeholder="Username" />
      <input type="password" v-model="userToEdit.password" placeholder="Password" />
      <button>Continue</button>
    </form>
  </div>
</template>

<script>
import { userService } from '../services/user.service'
import ImgUploader from './ImgUploader.vue'
export default {
  name: 'Join',
  data() {
    return {
      userToEdit: null,
      img: false,
    }
  },
  computed: {
    users() {
      return this.$store.getters.users
    },
    loggedinUser() {
      return this.$store.getters.loggedinUser
    },
  },
  methods: {
    async saveUser() {
      this.$emit('refreshOrders')
      if (!this.userToEdit._id)
        await this.$store.dispatch({
          type: 'signup',
          user: { ...this.userToEdit, isSeller: false },
        })

      else
        await this.$store.dispatch({
          type: 'updateUsers',
          user: { ...this.userToEdit, isSeller: false },
        })
      this.$router.push(`/`)
    },
    handleImage() {
      this.userToEdit.imageUrl = this.img
      this.img = !this.img
    },
    imgUrl(ev) {
      this.userToEdit.imgUrl = ev
      console.log(this.userToEdit)
    },
    hey() {
      console.log('hi')
    },
  },
  created() {
    const loggedinUser = this.$store.getters.loggedinUser
    if (loggedinUser) {
      this.userToEdit = loggedinUser
    } else {
      this.userToEdit = userService.getEmptyUser()
    }
  },
  components: {
    ImgUploader,
  },
}
</script>

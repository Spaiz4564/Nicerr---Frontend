<template>
  <div class="container-about">
    <form @submit.prevent="saveUser" class="signup-form">
      <h3>Join Nicerr</h3>
      <div class="img-upload">
        <img src="../assets/images/About/default.png" alt="">
      <ImgUploader/>
      </div>
      <input
        type="text"
        v-model="userToEdit.fullname"
        placeholder="Full name"
      />
      <input type="text" v-model="userToEdit.userName" placeholder="Username" />
      <input
        type="password"
        v-model="userToEdit.password"
        placeholder="Password"
      />
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
        this.$router.push(`/seller/profile/${this.userToEdit._id}`)
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

  components:{
    ImgUploader
  }


  }
</script>

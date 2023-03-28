<template>
  <div class="container-about">
    <form @submit.prevent="doLogin" class="login-form">
      <h3>Sign In to Nicerr</h3>
      <input type="text" v-model="loginCred.username" placeholder="Email / Username" />
      <input
        type="password"
        v-model="loginCred.password"
        placeholder="Password" />
      <button>Login</button>
      <span>Dont have an account yet?</span>
      <a href="">Open account</a>
    </form>
  </div>
</template>

<script>
import ImgUploader from '../cmps/ImgUploader.vue'

export default {
  name: 'login-signup',
  data() {
    return {
      loginCred: {
        username: '',
        password: '',
      },
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
    async doLogin() {
      console.log('doLogin')
      await this.$store.dispatch({ type: 'login', userCred: this.loginCred })
      console.log(this.loginCred)
      this.$emit('closeModal')
      console.log('this.loggedinUser', this.loggedinUser)
    },
  },
}
</script>

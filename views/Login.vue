<template>
  <div class="container-about">
    <form @submit.prevent="doLogin" class="login-form">
      <h3>Sign In to Nicerr</h3>
      <input
        type="text"
        v-model="loginCred.username"
        placeholder="Email / Username" />
      <input
        type="password"
        v-model="loginCred.password"
        placeholder="Password" />
      <button>Login</button>
      <span>Dont have an account yet?</span>
      <a @click="handleJoin">Open account</a>
    </form>
    <div v-if="isModalOpen">
      <Join />
    </div>
  </div>
</template>

<script>
import ImgUploader from '../cmps/ImgUploader.vue'
import Join from '../cmps/Join.vue'

export default {
  name: 'login-signup',
  data() {
    return {
      loginCred: {
        username: '',
        password: '',
      },
      isModalOpen: false,
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
    handleJoin() {
      console.log('handleJoin')
      this.isModalOpen = true
    },
  },
  components: {
    Join,
  },
}
</script>

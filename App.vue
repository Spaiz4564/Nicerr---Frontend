<template>
  <section>
    <div
      @click="closeModal"
      :class="isBackdrop ? 'showBackdrop' : 'hideBackDrop'"
      class="backdrop full"></div>
    <div class="modal-sign" v-if="isBackdrop">
      <Login v-if="whatModal === 'signIn'" />
      <Join v-clickOutsideDirective="hey" v-if="whatModal === 'join'" />
    </div>
  </section>
  <div class="main-layout">
    <AppHeader :isBackdrop="isBackdrop" @backdrop="backdrop" />
    <RouterView />
    <UserMsg :msg="adminMsg" />
    <Footer />
    <UserMsg />
  </div>
</template>

<script>
import AppHeader from './cmps/AppHeader.vue'
import UserMsg from './cmps/UserMsg.vue'
import Footer from './cmps/Footer.vue'
import Login from './views/Login.vue'
import Join from './cmps/Join.vue'
import { store } from './store/store'
import { socketService } from './services/socket.service'

export default {
  data() {
    return {
      isBackdrop: false,
      whatModal: null,
      adminMsg: '',
    }
  },
  created() {
    console.log('Vue App created')
    const user = userService.getLoggedinUser()
    console.log(user)
    if (user) store.commit({ type: 'setLoggedInUser', user })
  },
  mounted() {
    socketService.on('admin-update', this.setAdminMsg)
  },

  watch: {
    user: {
      handler() {
        if (this.user) {
          this.isBackdrop = false
        }
      },
      immediate: true,
    },
  },

  components: {
    Join,
    Login,
    AppHeader,
    UserMsg,
    Footer,
  },
  methods: {
    backdrop(isOpen, whichModal) {
      console.log(this.isBackdrop)
      this.whatModal = whichModal
      this.isBackdrop = isOpen
    },
    closeModal() {
      this.isBackdrop = false
    },
    setAdminMsg(msg) {
      console.log(msg)
      this.adminMsg = msg
      setTimeout(() => {
        this.adminMsg = ''
      }, 3000)
    },
  },

  computed: {
    user() {
      return this.$store.getters.loggedinUser
    },
  },
}
</script>

<template>
  <section>
    <div
      @click="closeModal"
      :class="isBackdrop ? 'showBackdrop' : 'hideBackDrop'"
      class="backdrop full"
    ></div>
    <div  class="modal-sign" v-if="isBackdrop">
      <Login v-clickOutsideDirective="hey" v-if="whatModal === 'signIn'" />
      <Join v-if="whatModal === 'join'"/>
    </div>
  </section>
  <div class="main-layout">
    <AppHeader :isBackdrop="isBackdrop" @backdrop="backdrop" />
    <RouterView />
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

  export default {
   
    data() {
      return {
        isBackdrop: false,
        whatModal: null
      }
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
      hey() {
        console.log('hey')
      }
    },
    computed: {
      user() {
        return this.$store.getters.loggedinUser
      },
    
    },
  }
</script>

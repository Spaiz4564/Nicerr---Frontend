<template>
  <div class="main-layout">
    <AppHeader />
    <RouterView />
    <Footer />
    <UserMsg />
  </div>
</template>

<script>
import { userService } from './services/user.service'
import { store } from './store/store'

import AppHeader from './cmps/AppHeader.vue'
import UserMsg from './cmps/UserMsg.vue'
import Footer from './cmps/Footer.vue'

export default {
  created() {
    console.log('Vue App created')
    const user = userService.getLoggedinUser()
    console.log('user:', user)
    if (user) store.commit({ type: 'setLoggedInUser', user })
  },
  components: {
    AppHeader,
    UserMsg,
    Footer,
  },
}
</script>

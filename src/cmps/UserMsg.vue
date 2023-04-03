<template>
  <div v-show="msg" class="user-msg">
    <div class="msg-tick" v-html="getSvg('checkMark')"></div>
    <div class="flex column">
    <p>{{ msg }}</p>
    </div>

    <span class="close-btn" @click="msg = ''">x</span>
    <div class="line"></div>
  </div>
</template>

<script>
import { svgService } from '../services/svg.service'
export default {
  name: 'user-msg',
  props: ['msg'],
  methods: {
    getSvg(iconName) {
      return svgService.getSvg(iconName)
    },
  },
  computed: {
    // msgPartTwo() {
    // console.log(this.msg)
    //   if (this.msg) {
    //     if(this.msg.status === 'status') {
    //       return ` Hey ${this.msg.username}\n Your order's status has been changed.`
    //     } else if(this.msg.status === 'order-processed') {
    //       return "Your order is being processed. stay tuned."
    //     } else if (this.msg.status === 'watching-gig') {
    //       return "A user is watching your gig right now."
    //     } else {
    //       return "A user ordered one of your gigs right now."
    //     }
        
    //   }
    // },
   
  },
 
}
</script>

<template>
  <section :class="msg.type" v-if="msg.txt" class="user-msg-bus">
    {{ msg.txt }}
    <span class="close-btn" @click="msg = ''">x</span>
    <div class="line"></div>
  </section>
</template>

<script>
import { eventBusService } from '../services/event-bus.service.js'

export default {
  data() {
    return {
      msg: { txt: '', type: 'success' },
    }
  },
  methods: {
    showMsg(msg) {
      this.msg = msg
      setTimeout(() => {
        this.msg = ''
      }, 5000)
    },
  },
  created() {
    eventBusService.on('show-msg', this.showMsg)
  },
}
</script>

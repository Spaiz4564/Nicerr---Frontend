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
 
}
</script>

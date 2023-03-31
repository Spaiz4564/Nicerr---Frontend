<template>
  <div v-show="msg" class="user-msg">
    <span>{{ msg }}</span>
    <span class="close-btn" @click="msg = ''">x</span>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: 'user-msg',
  props: ['msg'],
}
</script>

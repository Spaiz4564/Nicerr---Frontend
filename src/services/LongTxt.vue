<template>
  <section class="long-txt">
    <p v-if="!isLongTxt">{{ txtToShow }}</p>
    <p v-else>
      {{ txtToShow }}
    </p>
  </section>
</template>

<script>
export default {
  name: 'LongTxt',
  props: ['txt'],

  data() {
    return {
      isLongTxt: false,
    }
  },
  computed: {
    txtToShow() {
      if (this.txt.length > 20) {
        this.isLongTxt = true
        return this.txt.slice(0, 100) + '...'
      } else {
        return this.txt
      }
    },
  },
}
</script>

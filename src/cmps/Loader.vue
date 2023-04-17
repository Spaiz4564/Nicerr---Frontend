<template>
  <div class="vl-parent">
    <loading
      v-model:active="isLoading"
      :can-cancel="false"
      :is-full-page="fullPage"
      :loader="loader"
      :transition="transition"
      :color="color"
      :background-color="backgroundColor"
      :opacity="opacity"
      :width="100"
      :height="100"
      :isTimeOut="timeOut"></loading>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

export default {
  props: {
    loader: {
      type: String,
      default: 'bars',
    },
    color: {
      type: String,
      default: 'green',
    },
    backgroundColor: {
      type: String,
      default: '#000',
    },
    opacity: {
      type: Number,
      default: 0.5,
    },
    transition: {
      type: String,
      default: 'fade',
    },

    isTimeOut: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isLoading: true,
      fullPage: true,
      timeOut: false,
    }
  },
  components: {
    Loading,
  },

  methods: {
    onCancel() {
      this.isLoading = false
    },
  },
}
</script>

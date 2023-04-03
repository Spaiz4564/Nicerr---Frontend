<template>
  <div class="demo-progress">
    <div class="bar" v-for="(color, i) in customColors">
      <div class="flex space-between">
        <b>{{ color.txt }}</b>
        <p>{{ customColors[i].percentage }}%</p>
      </div>

      <el-progress
        :percentage="customColors[i].percentage"
        :color="customColors[i].color" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ['percentage'],

  data() {
    return {
      customColors: [
        { txt: 'Response Rate', color: '#1dbf73', percentage: 78 },
        {
          txt: 'Orders Completed',
          color: '#1dbf73',
          percentage: 55,
        },
        { txt: 'Delivered on Time', color: '#1dbf73', percentage: 95 },
      ],
    }
  },
  created() {
    this.customColors[1].percentage = this.percentage
  },

  computed: {
    ordersCompleted() {
      return this.customColors[1].percentage
    },
  },

  watch: {
    percentage: function (newVal) {
      this.$emit('percentage', newVal)
      this.customColors[1].percentage = newVal
    },
  },
}
</script>
<style scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>

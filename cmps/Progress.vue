<template>
  <div class="demo-progress">
    <div class="bar" v-for="(color, i) in customColors">
      <div class="flex space-between">
        <b>{{ color.txt }}</b>
        <p>{{ color.percentage }}%</p>
      </div>

      <el-progress
        :percentage="customColors[i].percentage"
        :color="customColors[i].color"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const percentage = ref(20)

  const customColors = [
    { txt: 'Response Rate', color: '#1dbf73', percentage: 78 },
    { txt: 'Orders Completed', color: '#1dbf73', percentage: 29 },
    { txt: 'Delivered on Time', color: '#1dbf73', percentage: 95 },
  ]
</script>
<style scoped>
  .demo-progress .el-progress--line {
    margin-bottom: 15px;
    width: 350px;
  }
</style>

<template>
  <div class="demo-progress">
    <div class="bar" v-for="(color, i) in customColors">
      <div class="flex space-between">
        <b>{{ color.txt }}</b>
        <p>{{ ordersCompleted }}%</p>
      </div>

      <el-progress
        :percentage="customColors[i].percentage"
        :color="customColors[i].color" />
    </div>
  </div>
</template>

<script lang="ts">
import { ordersService } from '../services/order.service.js'

export default {
  data() {
    return {
      customColors: [
        { txt: 'Response Rate', color: '#1dbf73', percentage: 78 },
        {
          txt: 'Orders Completed',
          color: '#1dbf73',
          percentage: this.ordersCompleted,
        },
        { txt: 'Delivered on Time', color: '#1dbf73', percentage: 95 },
      ],

      ordersCompleted: 0,
    }
  },

  methods: {
    async getOrdersCompleted() {
      const orders = await ordersService.query()
      const ordersCompleted = orders.filter(
        (order) => order.status === 'Completed'
      )

      this.ordersCompleted = Math.floor(
        (ordersCompleted.length / orders.length) * 100
      )
    },
  },

  computed: {
    orders() {
      return this.$store.state.ordersByUser
    },
  },

  created() {
    this.getOrdersCompleted()
  },

  watch: {
    ordersCompleted() {
      this.customColors[1].percentage = this.ordersCompleted
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

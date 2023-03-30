<template>
  <el-select :class="value" v-model="value" placeholder="Pending">
    <el-option 
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script lang="ts">
  import { ref } from 'vue'

  export default {
    data() {
      return {
        value: ref(''),
        options: [
          {
            value: 'in-progress',
            label: 'In Progress',
          },
          {
            value: 'completed',
            label: 'Completed',
          },
          {
            value: 'rejected',
            label: 'Rejected',
          },
          {
            value: 'pending',
            label: 'Pending',
          },
        ],
      }
    },
    methods:{
        wow() {
            console.log(this.value)
        }
    }
   }
</script>

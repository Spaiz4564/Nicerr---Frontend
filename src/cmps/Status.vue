<template>
  <el-select @change="setStatus" v-model="value" :placeholder="status">
    <el-option 
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script lang="ts">
 
  export default {
    props: ['status'],
    data() {
      return {
        value: '',
        options: [
          {
            value: 'In-progress',
            label: 'In Progress',
          },
          {
            value: 'Completed',
            label: 'Completed',
          },
          {
            value: 'Rejected',
            label: 'Rejected',
          },
          {
            value: 'Pending',
            label: 'Pending',
          },
        ],

      }
    },
    methods:{
        setStatus() {
          // console.log(this.value)
            this.$emit('status', this.value)
            // this.$emit('backdrop', this.modalSignIsOpen, 'signIn')
        }
    }
   }
</script>

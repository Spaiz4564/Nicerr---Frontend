<template>
  <section class="gigs-filter">
    <input
      type="text"
      placeholder="Search"
      v-model="filterBy.title"
      @input="emitFilter" />
    <input
      type="number"
      placeholder="Price"
      v-model="filterBy.price"
      @input="emitFilter" />
  </section>
</template>

<script>
export default {
  name: 'GigFilter',
  data() {
    return {
      filterBy: {
        title: '',
        price: null,
      },
    }
  },
  methods: {
    emitFilter() {
      this.$emit('filtered', { ...this.filterBy })
    },
  },
}
</script>

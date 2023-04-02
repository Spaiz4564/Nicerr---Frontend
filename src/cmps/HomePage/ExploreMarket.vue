<template>
  <section class="explore-market-section">
    <h2>Explore the marketplace</h2>
    <div class="categories-list">
      <div
        class="category"
        v-for="category in categories"
        @click="showGigsByCategory(category.name)"
        :key="category.name">
        <span v-html="getSvg(category.svg)"></span>
        <h4>{{ category.title }}</h4>
      </div>
    </div>
  </section>
</template>

<script>
import { svgService } from '../../services/svg.service'
import { gigService } from '../../services/gig.service'
export default {
  name: 'Explore Market',
  emits: ['filterByCategory'],
  data() {
    return {
      categories: gigService.getMarketCategories(),
    }
  },
  methods: {
    getSvg(iconName) {
      return svgService.getSvg(iconName)
    },
    showGigsByCategory(categoryId) {
      this.$router.push(`/gig?categoryId=${categoryId}`)
    },
  },
}
</script>

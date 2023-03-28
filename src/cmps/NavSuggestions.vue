<template>
  <div
    class="nav-suggestions full"
    :class="[
      isHome ? 'headerHome' : '',
      isSuggestions ? 'display' : '',
      isWhite ? 'homeScroll' : '',
    ]">
    <div class="suggestions main-layout">
      <ul>
        <li
          @click="filterCategory(category.name)"
          v-for="category in categories">
          {{ category.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { gigService } from '../services/gig.service.local'
export default {
  props: ['isHome', 'isSuggestions', 'isWhite'],
  name: 'Nav Suggestions',
  data() {
    return {
      categories: gigService.getMarketCategories(),
    }
  },
  methods: {
    filterCategory(categoryId) {
      this.$router.push(`/gig?categoryId=${categoryId}`)
    },
  },
}
</script>

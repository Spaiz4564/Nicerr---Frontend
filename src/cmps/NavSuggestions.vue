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
        <li ref="category"
          @click="filterCategory(category.name, index)"
          v-for="(category , index) in categories">
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
    filterCategory(categoryId, index) {
      this.$store.dispatch({ type: 'updateCategory', category: this.$refs.category[index].innerText })
      this.$router.push(`/gig?categoryId=${categoryId}`)
    },
  },
}
</script>

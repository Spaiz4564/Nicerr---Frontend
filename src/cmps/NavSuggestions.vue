<template>
   <div class="nav-suggestions main-layout" :class="[
      isHome ? 'headerHome' : '',
      isSuggestions ? 'display' : '',
      isWhite ? 'homeScroll' : '',

    ]">
      <div class="suggestions main-layout">
        <ul>
          <li @click="filterCategory(category.title)" v-for="category in categories">{{ category.title }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import { gigService } from '../services/gig.service.local';
  export default {
    props: ['isHome','isSuggestions','isWhite'],
    name: 'Nav Suggestions',
  data() {
    return {
        categories: gigService.getMarketCategories()
    }
  },
    methods: {
        filterCategory(categoryId) {
      this.$router.push(`/gig/${categoryId}`)
      this.$store.commit({ type: 'setFilter', filterBy: { categoryId } })
    },
    setSelectedCategory(categoryId) {
        console.log(categoryId)
        this.$emit('setCategory',categoryId )
    }
    },
  }
  </script>
  
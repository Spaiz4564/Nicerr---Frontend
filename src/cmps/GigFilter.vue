<template>
  <section class="gig-filter">
    <div @click="toggleBudget" class="budget-input">
      <p class="txt-budget">Budget</p>
      <div class="arrow-down">
        <span
          v-if="!isBudgetOpen"
          class="icon-arrow"
          v-html="getSvg('arrowDown')"></span>
      </div>
      <div class="arrow-up">
        <span v-if="isBudgetOpen">⬆</span>
      </div>

      <form
        @submit.prevent="filterBudget"
        v-if="budgetDrop"
        class="budget-dropdown">
        <div @click.stop class="inputs">
          <div>
            <p class="bold">MIN.</p>
            <input v-model.number="filterBy.minPrice" />
            <i>$</i>
          </div>
          <div>
            <p class="bold">MAX.</p>
            <input v-model.number="filterBy.maxPrice" />
            <i>$</i>
          </div>
        </div>
        <div @click.stop class="buttons-budget">
          <div class="clear" @click.stop="clearBudget()">Clear All</div>
          <button>Apply</button>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
import { svgService } from '../services/svg.service'
export default {
  name: 'GigFilter',
  emits: ['filtered'],
  data() {
    return {
      filterBy: {
        minPrice: null,
        maxPrice: null,
      },
      isBudgetOpen: false,
    }
  },
  methods: {
    filterBudget() {
      console.log('filtering by budget')
      console.log(this.filterBy)
      this.$emit('filtered', { ...this.filterBy })
    },
    toggleBudget() {
      this.isBudgetOpen = !this.isBudgetOpen
    },
    clearBudget() {
      this.filterBy.min = null
      this.filterBy.max = null
      this.filterBudget()
    },
    getSvg(iconName) {
      return svgService.getSvg(iconName)
    },
  },
  computed: {
    budgetDrop() {
      return this.isBudgetOpen
    },
  },
}
</script>
<!-- // <div className="icon" v-html="getSvg('bars')"></div> -->

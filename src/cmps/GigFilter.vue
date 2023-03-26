<template>
  <section class="gig-filter main-layout full" :class="{ shadow: isBoxShadow }">
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
        v-if="budgetOpen"
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
    <div class="days-deliver">
      <el-select
        v-model="filterBy.daysToDeliver"
        class="m-2"
        placeholder="Select"
        size="large"
        @change="filterBudget">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value" />
      </el-select>
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
        daysToDeliver: null,
      },
      isBudgetOpen: false,
      isBoxShadow: false,
      options: [
        {
          value: '1',
          label: 'Express 24H',
        },
        {
          value: '3',
          label: 'Up to 3 days',
        },
        {
          value: '7',
          label: 'Up to 7 days',
        },
        {
          value: 'any',
          label: 'Anytime',
        },
      ],
    }
  },
  methods: {
    filterBudget() {
      this.$emit('filtered', { ...this.filterBy })
    },
    toggleBudget() {
      this.isBudgetOpen = !this.isBudgetOpen
    },
    clearBudget() {
      this.filterBy.minPrice = null
      this.filterBy.maxPrice = null
      this.filterBudget()
    },
    getSvg(iconName) {
      return svgService.getSvg(iconName)
    },
    handleScroll() {
      const scrollY = window.scrollY
      if (scrollY > 180) {
        this.isBoxShadow = true
      } else {
        this.isBoxShadow = false
      }
    },
  },
  computed: {
    budgetOpen() {
      return this.isBudgetOpen
    },
  },

  created() {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>

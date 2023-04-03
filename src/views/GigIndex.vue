<template>
  <section class="gig-index main-layout full">
    <h1 v-if="category" class="selected-category">{{ category }}</h1>
    <h1 v-if="resultsFor" class="selected-category">
      Results for "{{ resultsFor }}"
    </h1>

    <GigFilter @filtered="setFilter" />
    <div class="sort-container flex">
      <span>{{ gigsLength }} services available</span>
      <div class="sort">
        <p class="sort-txt">Sort by</p>
        <el-select
          v-model="sortBy"
          placeholder="Please select"
          @change="setSort(sortBy)">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <GigList :gigs="gigs" />
  </section>
</template>

<script>
import GigList from '../cmps/GigList.vue'
import GigFilter from '../cmps/GigFilter.vue'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { gigService } from '../services/gig.service'
import {
  getActionRemoveGig,
  getActionUpdateGig,
  getActionAddGigMsg,
} from '../store/gig.store'
export default {
  name: 'GigIndex',
  components: {
    GigList,
    GigFilter,
  },
  data() {
    return {
      gigToAdd: gigService.getEmptyGig(),
      filterBy: {
        title: '',
        price: null,
        categoryId: '',
        daysToDeliver: '',
      },

      options: [
        {
          value: 'level',
          label: 'Level Seller',
        },
        {
          value: 'price',
          label: 'Lowest Price',
        },
        {
          value: 'rate',
          label: 'Highest Rated',
        },
      ],
      sortBy: 'rate',
    }
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser
    },
    category() {
      return this.$store.getters.selectedCategory
    },
    resultsFor() {
      return this.$store.getters.resultsFor
    },
    gigs() {
      return this.$store.getters.gigs
    },
    gigsLength() {
      return this.gigs.length
    },
  },
  created() {
    const query = this.$route.query
    if (query) {
      this.filterBy = query
    }
    this.loadGigs()
  },
  watch: {
    '$route.query': {
      handler() {
        const query = this.$route.query
        if (query) {
          this.filterBy = query
        }
        this.loadGigs()
      },
      immediate: true,
    },
  },
  methods: {
    setSort(sortBy) {
      console.log(sortBy)
      this.sortBy = sortBy
      this.loadGigs()
    },
    setFilter(filterBy) {
      this.filterBy = filterBy
      const query = this.$route.query
      this.$router.push({ path: '/gig', query: { ...query, ...filterBy } })
    },

    async loadGigs() {
      const filterBy = { ...this.filterBy }
      if (filterBy.price) filterBy.price = +filterBy.price
      try {
        await this.$store.dispatch({
          type: 'loadGigs',
          filterBy,
          sortBy: this.sortBy,
        })
      } catch (err) {
        console.log(err)
        showErrorMsg('Cannot load gigs')
      }
    },
  },
  unmounted() {
    this.$store.dispatch({ type: 'updateCategory', category: false })
    this.$store.commit({ type: 'updateResultsFor', resultsFor: false })
  },
}
</script>

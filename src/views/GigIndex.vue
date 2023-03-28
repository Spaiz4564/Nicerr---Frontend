<template>
  <section class="gig-index main-layout full">
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
import { gigService } from '../services/gig.service.local'
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
          value: 'name',
          label: 'Name',
        },
        {
          value: 'price',
          label: 'Price',
        },
      ],
      sortBy: 'name',
      desc: 1,
    }
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser
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
    console.log(query)
    if (query) {
      this.filterBy = query
    }
    this.loadGigs()
  },
  watch: {
    '$route.query': {
      handler() {
        const query = this.$route.query
        console.log(query)
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
      console.log(this.sortBy)
      this.desc *= -1
      this.loadGigs()
    },
    setFilter(filterBy) {
      this.filterBy = filterBy
      console.log(this.filterBy)
      this.$router.push({ path: '/gig', query: { ...filterBy } })
      this.loadGigs()
    },

    async loadGigs() {
      const filterBy = { ...this.filterBy }
      console.log(filterBy)
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
}
</script>

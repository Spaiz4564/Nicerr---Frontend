<template>
  <section class="gig-index main-layout full" v-if="gigs">
    <GigFilter @filtered="setFilter" />
    <div class="sort-container flex">
      <p class="sort-txt">Sort By</p>
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
      <!-- <a class="btn-sort" @click="setSort('name')">Name</a>
      <a class="btn-sort" @click="setSort('price')">Price</a>
      <span>{{ desc === -1 ? '↓' : '↑' }}</span> -->
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
  },
  created() {
    this.loadGigs()
    const filterBy = this.$store.getters.filterBy
    if (filterBy) this.filterBy = filterBy
  },
  methods: {
    setSort(sortBy) {
      console.log(sortBy)
      this.sortBy = sortBy
      console.log(this.sortBy)
      this.desc *= -1
      this.loadGigs()
    },
    async addGig() {
      try {
        await this.$store.dispatch({ type: 'addGig', gig: this.gigToAdd })
        showSuccessMsg('Gig added')
        this.gigToAdd = gigService.getEmptyGig()
      } catch (err) {
        console.log(err)
        showErrorMsg('Cannot add gig')
      }
    },
    async removeGig(gigId) {
      try {
        await this.$store.dispatch(getActionRemoveGig(gigId))
        showSuccessMsg('Gig removed')
      } catch (err) {
        console.log(err)
        showErrorMsg('Cannot remove gig')
      }
    },
    async updateGig(gig) {
      try {
        gig = { ...gig }
        gig.price = +prompt('New price?', gig.price)
        await this.$store.dispatch(getActionUpdateGig(gig))
        showSuccessMsg('Gig updated')
      } catch (err) {
        console.log(err)
        showErrorMsg('Cannot update gig')
      }
    },
    async addGigMsg(gigId) {
      try {
        await this.$store.dispatch(getActionAddGigMsg(gigId))
        showSuccessMsg('Gig msg added')
      } catch (err) {
        console.log(err)
        showErrorMsg('Cannot add gig msg')
      }
    },
    printGigToConsole(gig) {
      console.log('Gig msgs:', gig.msgs)
    },
    setFilter(filterBy) {
      this.filterBy = filterBy
      this.loadGigs()
    },

    async loadGigs() {
      const filterBy = JSON.parse(JSON.stringify(this.filterBy))
      const sortBy = JSON.parse(JSON.stringify(this.sortBy))
      await this.$store.dispatch({ type: 'loadGigs', filterBy, sortBy })
    },
  },
}
</script>

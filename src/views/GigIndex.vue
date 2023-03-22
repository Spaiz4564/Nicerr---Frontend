<template>
  <section class="gig-index" v-if="gigs">
    <GigList :gigs="gigs" />
    <section class="filtering">
      <GigFilter @filtered="setFilter" />
    </section>
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
      try {
        await this.$store.dispatch({
          type: 'loadGigs',
          filterBy: this.filterBy,
        })
      } catch (err) {
        console.log(err)
        showErrorMsg('Cannot load gigs')
      }
    },
  },
}
</script>

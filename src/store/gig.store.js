import { gigService } from '../services/gig.service.local'
// import { gigService } from '../services/gig.service'

export function getActionRemoveGig(gigId) {
  return {
    type: 'removeGig',
    gigId,
  }
}
export function getActionAddGig(gig) {
  return {
    type: 'addGig',
    gig,
  }
}
export function getActionUpdateGig(gig) {
  return {
    type: 'updateGig',
    gig,
  }
}
export function getActionAddGigMsg(gigId) {
  return {
    type: 'addGigMsg',
    gigId,
    txt: 'Stam txt',
  }
}

export const gigStore = {
  state: {
    gigs: [],
    filterBy: {
      minPrice: 0,
      maxPrice: 1000,
      title: '',
      categoryId: '',
    },

    owner: {
      _id: '',
      fullname: '',
      username: '',
      isSeller: false,
      gigs: [],
    },
  },
  getters: {
    gigs({ gigs }) {
      return gigs
    },
    gigById({ gigs }) {
      return (gigId) => {
        return gigs.find((gig) => gig._id === gigId)
      }
    },
    getOwnerByUsername({ owner }) {
      return (username) => {
        console.log('getOwnerByUsername', username)
        return owner
      }
    },
  },
  mutations: {
    setGigs(state, { gigs }) {
      state.gigs = gigs
    },
    addGig(state, { gig }) {
      state.gigs.push(gig)
    },
    updateGig(state, { gig }) {
      const idx = state.gigs.findIndex((c) => c._id === gig._id)
      state.gigs.splice(idx, 1, gig)
    },
    removeGig(state, { gigId }) {
      state.gigs = state.gigs.filter((gig) => gig._id !== gigId)
    },
    addGigMsg(state, { gigId, msg }) {
      const gig = state.gigs.find((gig) => gig._id === gigId)
      if (!gig.msgs) gig.msgs = []
      gig.msgs.push(msg)
    },

    setFilter(state, { filterBy }) {
      console.log(filterBy)
      state.filterBy = filterBy
      this.dispatch({ type: 'loadGigs', filterBy })
    },
    updateOwner(state, { owner }) {
      //we need to update the owner in the stor
      state.owner = owner
    },
    addGigToOwner(state, { gig }) {
      state.owner.gigs.push(gig)
    },
  },
  actions: {
    async addGig(context, { gig }) {
      try {
        gig = await gigService.save(gig)
        context.commit(getActionAddGig(gig))
        return gig
      } catch (err) {
        console.log('gigStore: Error in addGig', err)
        throw err
      }
    },
    async updateGig(context, { gig }) {
      try {
        gig = await gigService.save(gig)
        context.commit(getActionUpdateGig(gig))
        return gig
      } catch (err) {
        console.log('gigStore: Error in updateGig', err)
        throw err
      }
    },
    async loadGigs(context, { filterBy, sortBy }) {
      try {
        const gigs = await gigService.query(filterBy, sortBy)
        context.commit({ type: 'setGigs', gigs })
      } catch (err) {
        console.log('gigStore: Error in loadGigs', err)
        throw err
      }
    },

    async removeGig(context, { gigId }) {
      try {
        await gigService.remove(gigId)
        context.commit(getActionRemoveGig(gigId))
      } catch (err) {
        console.log('gigStore: Error in removeGig', err)
        throw err
      }
    },
    async addGigMsg(context, { gigId, txt }) {
      try {
        const msg = await gigService.addGigMsg(gigId, txt)
        context.commit({ type: 'addGigMsg', gigId, msg })
      } catch (err) {
        console.log('gigStore: Error in addGigMsg', err)
        throw err
      }
    },

    async addOwner(context, { owner }) {
      try {
        context.commit({ type: 'updateOwner', owner })
      } catch (err) {
        console.log('gigStore: Error in addOwner', err)
        throw err
      }
    },
  },
}

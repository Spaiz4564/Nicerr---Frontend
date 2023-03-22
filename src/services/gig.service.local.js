import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'gig'

export const gigService = {
  query,
  getById,
  save,
  remove,
  getEmptyGig,
  addGigMsg,
}
window.cs = gigService

async function query(filterBy = { title: '', minPrice: 0, maxPrice: 2000 }) {
  let gigs = await storageService.query(STORAGE_KEY)
  if (!gigs.length) gigs = _createGigs()
  if (filterBy.title) {
    const regex = new RegExp(filterBy.title, 'i')
    gigs = gigs.filter(
      (gig) => regex.test(gig.title) || regex.test(gig.description)
    )
  }
  if (filterBy.minPrice || filterBy.maxPrice) {
    gigs = gigs.filter((gig) => {
      return gig.price >= filterBy.minPrice && gig.price <= filterBy.maxPrice
    })
  }

  return gigs
}

function getById(gigId) {
  return storageService.get(STORAGE_KEY, gigId)
}

async function remove(gigId) {
  await storageService.remove(STORAGE_KEY, gigId)
}

async function save(gig) {
  var savedGig
  if (gig._id) {
    savedGig = await storageService.put(STORAGE_KEY, gig)
  } else {
    // Later, owner is set by the backend
    gig.owner = userService.getLoggedinUser()
    savedGig = await storageService.post(STORAGE_KEY, gig)
  }
  return savedGig
}

async function addGigMsg(gigId, txt) {
  // Later, this is all done by the backend
  const gig = await getById(gigId)
  if (!gig.msgs) gig.msgs = []

  const msg = {
    id: utilService.makeId(),
    by: userService.getLoggedinUser(),
    txt,
  }
  gig.msgs.push(msg)
  await storageService.put(STORAGE_KEY, gig)

  return msg
}

function getEmptyGig() {
  return {
    title: 'Gig' + (Date.now() % 1000),
    price: utilService.getRandomIntInclusive(5, 200),
  }
}

function _createGig(title) {
  return {
    title,
    price: utilService.getRandomIntInclusive(5, 200),
    images: [
      '../assets/images/gigs/gig1.png',
      '../assets/images/gigs/gig2.png',
    ],
    rate: 4.5,
    owner: {
      _id: 'u101',
      fullname: 'Shuki Cohen',
      imgUrl: '/src/assets/images/avatar.png',
      level: 'basic/intermediate/',
      rate: 4,
    },
  }
}

function _createGigs() {
  const gigs = [
    _createGig('I will create modern unique and creative logo design'),
    _createGig('I will create modern unique and creative logo design'),
    _createGig('I will create modern unique and creative logo design'),
  ]
  storageService.postMany(STORAGE_KEY, gigs)
  return gigs
}

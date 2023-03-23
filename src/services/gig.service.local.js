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

function _createGig(title, images) {
  return {
    title,
    price: utilService.getRandomIntInclusive(5, 200),
    images,
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
    _createGig('I will create soccer pitch for you', [
      '../assets/images/gigs/gig2.png',
      '../assets/images/gigs/gig1.png',
      '../assets/images/gigs/gig4.jpg',
      '../assets/images/gigs/gig5.jpg',
    ]),
    _createGig('I will create logo', [
      '../assets/images/gigs/gig1.png',
      '../assets/images/gigs/gig2.png',
      '../assets/images/gigs/gig4.jpg',
      '../assets/images/gigs/gig5.jpg',
    ]),
    _createGig('I will create website', [
      '../assets/images/gigs/gig5.jpg',
      '../assets/images/gigs/gig2.png',
      '../assets/images/gigs/gig3.png',
      '../assets/images/gigs/gig4.jpg',
    ]),
    _createGig('I will create animals', [
      '../assets/images/gigs/gig6.jpg',
      '../assets/images/gigs/gig5.jpg',
      '../assets/images/gigs/gig1.png',
      '../assets/images/gigs/gig2.png',
    ]),
    _createGig('I will create code', [
      '../assets/images/gigs/gig2.png',
      '../assets/images/gigs/gig3.png',
      '../assets/images/gigs/gig4.jpg',
      '../assets/images/gigs/gig7.jpg',
    ]),
    _createGig('I will create food', [
      '../assets/images/gigs/gig7.jpg',
      '../assets/images/gigs/gig2.png',
      '../assets/images/gigs/gig4.jpg',
      '../assets/images/gigs/gig5.jpg',
    ]),
    _createGig('I will create love', [
      '../assets/images/gigs/gig7.jpg',
      '../assets/images/gigs/gig2.png',
      '../assets/images/gigs/gig4.jpg',
      '../assets/images/gigs/gig5.jpg',
    ]),
    _createGig('I will create pool', [
      '../assets/images/gigs/gig5.jpg',
      '../assets/images/gigs/gig2.png',
      '../assets/images/gigs/gig4.jpg',
      '../assets/images/gigs/gig5.jpg',
    ]),
    _createGig('I will create ball', [
      '../assets/images/gigs/gig4.jpg',
      '../assets/images/gigs/gig2.png',
      '../assets/images/gigs/gig4.jpg',
      '../assets/images/gigs/gig5.jpg',
    ]),
    _createGig('I will create zoo', [
      '../assets/images/gigs/gig7.jpg',
      '../assets/images/gigs/gig2.png',
      '../assets/images/gigs/gig4.jpg',
      '../assets/images/gigs/gig5.jpg',
    ]),
    _createGig('I will create games', [
      '../assets/images/gigs/gig6.jpg',
      '../assets/images/gigs/gig2.png',
      '../assets/images/gigs/gig4.jpg',
      '../assets/images/gigs/gig5.jpg',
    ]),
    _createGig('I will create store', [
      '../assets/images/gigs/gig5.jpg',
      '../assets/images/gigs/gig2.png',
      '../assets/images/gigs/gig4.jpg',
      '../assets/images/gigs/gig5.jpg',
    ]),
    _createGig('I will create database', [
      '../assets/images/gigs/gig7.jpg',
      '../assets/images/gigs/gig2.png',
      '../assets/images/gigs/gig4.jpg',
      '../assets/images/gigs/gig5.jpg',
    ]),
  ]
  storageService.postMany(STORAGE_KEY, gigs)
  return gigs
}

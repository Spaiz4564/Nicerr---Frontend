import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'gig'
const STORAGE_OWNER_KEY = 'seller'

export const gigService = {
  query,
  getById,
  save,
  remove,
  getEmptyGig,
  addGigMsg,
  getMarketCategories,
  getHeroBackgrounds,
  addNewSeller,
  loadSeller,
  addNewOwner,
  loadOwners,
}
window.cs = gigService

async function query(
  filterBy = { title: '', minPrice: 0, maxPrice: 2000 },
  sortBy = { by: 'name', desc: 1 }
) {
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
  if (sortBy === 'name') {
    gigs.sort((a, b) => {
      return a.title.localeCompare(b.title)
    })
  }
  if (sortBy === 'price') {
    gigs.sort((a, b) => {
      return a.price - b.price
    })
  }
  return gigs
}

function getById(gigId) {
  return storageService.get(STORAGE_KEY, gigId)
}

function loadSeller(sellerId) {
  console.log('sellerId', sellerId)
  return storageService.get(STORAGE_SELLER_KEY, sellerId)
}

function loadOwners(gigId) {
  const gig = getById(gigId)
  return gig.owner
}

async function remove(gigId) {
  await storageService.remove(STORAGE_KEY, gigId)
}

function addNewOwner(ownerId) {
  console.log('ownerId', ownerId)
  if (ownerId._id) return storageService.put(STORAGE_OWNER_KEY, ownerId)
  else return storageService.post(STORAGE_OWNER_KEY, ownerId)
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

function addNewSeller(seller) {
  if (seller._id) return storageService.put(STORAGE_SELLER_KEY, seller)
  else return storageService.post(STORAGE_SELLER_KEY, seller)
}

function getEmptyGig() {
  return {
    title: 'Gig' + (Date.now() % 1000),
    price: utilService.getRandomIntInclusive(5, 200),
  }
}

function _createGig(title, images, tags) {
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
    tags,
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

function getMarketCategories() {
  const categories = [
    { title: 'Graphics & Design', svg: 'cupAndPencil' },
    { title: 'Digital Marketing', svg: 'tv' },
    { title: 'Writing & Translition', svg: 'paperAndPen' },
    { title: 'Video & Animation', svg: 'animation' },
    { title: 'Music & Audio', svg: 'music' },
    { title: 'Programming & Tech', svg: 'tech' },
    { title: 'Business', svg: 'business' },
    { title: 'Lifestyle', svg: 'lifestyle' },
    { title: 'Data', svg: 'data' },
    { title: 'Photography', svg: 'photography' },
  ]
  return categories
}

function getHeroBackgrounds() {
  const backgrounds = [
    {
      img: '.././assets/images/Hero-section/Valentina.png',
      name: 'Valentina',
      desc: 'AI Artist'
    },
    {
      img: '.././assets/images/Hero-section/Andrea.png',
      name: 'Andrea',
      desc: 'Fashion Designer'
    },
    {
      img: '.././assets/images/Hero-section/Moon.png',
      name: 'Moon',
      desc: 'Marketing Expert'
    },
    {
      img: '.././assets/images/Hero-section/Ritika.png',
      name: 'Ritika',
      desc: 'Shoemaker and Designer'
    },
    {
      img: '.././assets/images/Hero-section/Zach.png',
      name: 'Zach',
      desc: 'Bar Owner'
    },
    {
      img: '.././assets/images/Hero-section/Gabriella.png',
      name: 'Gabrielle',
      desc: 'Video Editor'
      
    },
  ]
  return backgrounds
}

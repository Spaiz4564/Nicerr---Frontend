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
  getPopularServices,
  addNewSeller,
  loadSeller,
  addNewOwner,
  loadOwners,
  getTrustedBy,
}
window.cs = gigService

async function query(
  filterBy = { title: '', minPrice: 0, maxPrice: 2000, categoryId: '' },
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
  if (filterBy.categoryId) {
    gigs = gigs.filter((gig) => {
      return gig.categoryId === filterBy.categoryId
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
  if (sortBy === 'rate') {
    gigs.sort((a, b) => {
      return a.rate - b.rate
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

function _createGig(title, images, categoryId) {
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
    categoryId,
  }
}

function _createGigs() {
  const gigs = [
    _createGig(
      'I will create soccer pitch for you',
      [
        '../assets/images/gigs/gig2.png',
        '../assets/images/gigs/gig1.png',
        '../assets/images/gigs/gig4.jpg',
        '../assets/images/gigs/gig5.jpg',
      ],
      'graphic'
    ),
    _createGig(
      'I will create logo',
      [
        '../assets/images/gigs/gig1.png',
        '../assets/images/gigs/gig2.png',
        '../assets/images/gigs/gig4.jpg',
        '../assets/images/gigs/gig5.jpg',
      ],
      'graphic'
    ),
    _createGig(
      'I will create website',
      [
        '../assets/images/gigs/gig5.jpg',
        '../assets/images/gigs/gig2.png',
        '../assets/images/gigs/gig3.png',
        '../assets/images/gigs/gig4.jpg',
      ],
      'digital'
    ),
    _createGig(
      'I will create animals',
      [
        '../assets/images/gigs/gig6.jpg',
        '../assets/images/gigs/gig5.jpg',
        '../assets/images/gigs/gig1.png',
        '../assets/images/gigs/gig2.png',
      ],
      'business'
    ),
    _createGig(
      'I will create code',
      [
        '../assets/images/gigs/gig2.png',
        '../assets/images/gigs/gig3.png',
        '../assets/images/gigs/gig4.jpg',
        '../assets/images/gigs/gig7.jpg',
      ],
      'data'
    ),
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
    { title: 'Graphics & Design', svg: 'cupAndPencil', name: 'graphic' },
    { title: 'Digital Marketing', svg: 'tv', name: 'digital' },
    { title: 'Writing & Translition', svg: 'paperAndPen', name: 'writing' },
    { title: 'Video & Animation', svg: 'animation', name: 'video' },
    { title: 'Music & Audio', svg: 'music', name: 'music' },
    { title: 'Programming & Tech', svg: 'tech', name: 'tech' },
    { title: 'Business', svg: 'business', name: 'business' },
    { title: 'Lifestyle', svg: 'lifestyle', name: 'lifestyle' },
    { title: 'Data', svg: 'data', name: 'data' },
    { title: 'Photography', svg: 'photography', name: 'photography' },
  ]
  return categories
}

function getHeroBackgrounds() {
  const backgrounds = [
    {
      img: '.././assets/images/Hero-section/Valentina.png',
      name: 'Valentina',
      desc: 'AI Artist',
      isFiveStars: true,
    },
    {
      img: '.././assets/images/Hero-section/Andrea.png',
      name: 'Andrea',
      desc: 'Fashion Designer',
    },
    {
      img: '.././assets/images/Hero-section/Moon.png',
      name: 'Moon',
      desc: 'Marketing Expert',
      isFiveStars: true,
    },
    {
      img: '.././assets/images/Hero-section/Ritika.png',
      name: 'Ritika',
      desc: 'Shoemaker and Designer',
    },
    {
      img: '.././assets/images/Hero-section/Zach.png',
      name: 'Zach',
      desc: 'Bar Owner',
    },
    {
      img: '.././assets/images/Hero-section/Gabriella.png',
      name: 'Gabrielle',
      desc: 'Video Editor',
      isFiveStars: true,
    },
  ]
  return backgrounds
}

function getPopularServices() {
  const services = [
    {
      desc: 'Add talent to AI',
      title: `AI Artists`,
      img: '.././assets/images/Services/AI-artists.png',
    },
    {
      desc: 'Build your brand',
      title: 'Logo Design',
      img: '.././assets/images/Services/Logo design.png',
    },
    {
      desc: 'Customize your site',
      title: 'WordPress',
      img: '.././assets/images/Services/WordPress.png',
    },
    {
      desc: 'Share your message',
      title: 'Voice Over',
      img: '.././assets/images/Services/Voice Over.png',
    },
    {
      desc: 'Engage your audience',
      title: 'Video Explainer',
      img: '.././assets/images/Services/Video Explainer.png',
    },
    {
      desc: 'Reach more customers',
      title: 'Social Media',
      img: '.././assets/images/Services/Social Media.png',
    },
    {
      desc: 'Unlock growth online',
      title: 'SEO',
      img: '.././assets/images/Services/SEO.png',
    },
    {
      desc: 'Color your dreams',
      title: 'Illustrations',
      img: '.././assets/images/Services/illustration.png',
    },
    {
      desc: 'Go global',
      title: 'Translation',
      img: '.././assets/images/Services/Translation.png',
    },
    {
      desc: 'Learn your business',
      title: 'Data Entry',
      img: '.././assets/images/Services/Data Entry.png',
    },
    // {
    //   desc: 'Showcase your story',
    //   title: 'Book Covers',
    //   img: '.././assets/images/Services/Book Covers.png',
    // },
  ]
  return services
}

function getTrustedBy() {
  const trustedBy = [
    '.././assets/images/trusted by/Meta.png',
    '.././assets/images/trusted by/Google.png',
    '.././assets/images/trusted by/Netflix.png',
    '.././assets/images/trusted by/PG.png',
    '.././assets/images/trusted by/Paypal.png',
  ]
  return trustedBy
}

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
  getMarketCategories,
  getHeroBackgrounds,
  getPopularServices,
  getTrustedBy,
}
window.cs = gigService

async function query(
  filterBy = {
    title: '',
    minPrice: 0,
    maxPrice: 2000,
    categoryId: '',
    daysToDeliver: null,
  },
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
  if (filterBy.daysToDeliver) {
    if (filterBy.daysToDeliver === '1') {
      gigs = gigs.filter((gig) => {
        return gig.daysToDeliver === 1
      })
    } else if (filterBy.daysToDeliver === '3') {
      gigs = gigs.filter((gig) => {
        return gig.daysToDeliver <= 3 && gig.daysToDeliver >= 2
      })
    } else if (filterBy.daysToDeliver === '7') {
      gigs = gigs.filter((gig) => {
        return gig.daysToDeliver <= 7 && gig.daysToDeliver >= 4
      })
    } else if (filterBy.daysToDeliver === 'any') {
      return gigs
    }
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

async function remove(gigId) {
  await storageService.remove(STORAGE_KEY, gigId)
}

async function save(gig) {
  var savedGig
  console.log('gig', gig)
  if (gig._id) {
    savedGig = await storageService.put(STORAGE_KEY, gig)
  } else {
    // Later, owner is set by the backend
    gig.owner = userService.getLoggedinUser()
    // gig._id = utilService.makeId()
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
    title: '',
    price: 0,
    rate: 0,
    daysToDeliver: 0,
    categoryId: '',
  }
}

function _createGig(title, images, categoryId, daysToDeliver) {
  return {
    title,
    price: utilService.getRandomIntInclusive(5, 200),
    images,
    rate: 4.5,
    daysToDeliver,
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
      'I will create soccer pitch for you so you can play soccer with your friends',
      [
        '../assets/images/gigs/gig2.png',
        '../assets/images/gigs/gig1.png',
        '../assets/images/gigs/gig4.jpg',
        '../assets/images/gigs/gig5.jpg',
      ],
      'wordpress',
      3
    ),
    _createGig(
      'I will create logo for your company so you can be more professional',
      [
        '../assets/images/gigs/gig1.png',
        '../assets/images/gigs/gig2.png',
        '../assets/images/gigs/gig4.jpg',
        '../assets/images/gigs/gig5.jpg',
      ],
      'graphic',
      3
    ),
    _createGig(
      'I will create website for your company so you can be more professional',
      [
        '../assets/images/gigs/gig5.jpg',
        '../assets/images/gigs/gig2.png',
        '../assets/images/gigs/gig3.png',
        '../assets/images/gigs/gig4.jpg',
      ],
      'digital',
      3
    ),
    _createGig(
      'I will create animals for your self so you can be more happy',
      [
        '../assets/images/gigs/gig6.jpg',
        '../assets/images/gigs/gig5.jpg',
        '../assets/images/gigs/gig1.png',
        '../assets/images/gigs/gig2.png',
      ],
      'website',
      1
    ),
    _createGig(
      'I will create code for your company to develop your business',
      [
        '../assets/images/gigs/gig2.png',
        '../assets/images/gigs/gig3.png',
        '../assets/images/gigs/gig4.jpg',
        '../assets/images/gigs/gig7.jpg',
      ],
      'ai',
      2
    ),
    _createGig(
      'I will create food to you so you can cook dinner',
      [
        '../assets/images/gigs/gig7.jpg',
        '../assets/images/gigs/gig2.png',
        '../assets/images/gigs/gig4.jpg',
        '../assets/images/gigs/gig5.jpg',
      ],
      'logo',
      1
    ),
    _createGig(
      'I will create love to the whole planet so your find your soulmate ',
      [
        '../assets/images/gigs/gig7.jpg',
        '../assets/images/gigs/gig2.png',
        '../assets/images/gigs/gig4.jpg',
        '../assets/images/gigs/gig5.jpg',
      ],
      'business',
      6
    ),
    _createGig(
      'I will create pool for your house so you can swim ',
      [
        '../assets/images/gigs/gig5.jpg',
        '../assets/images/gigs/gig2.png',
        '../assets/images/gigs/gig4.jpg',
        '../assets/images/gigs/gig5.jpg',
      ],
      'lifestyle',
      2
    ),
    _createGig(
      'I will create ball to the soccer pitch so you can play with your frinds',
      [
        '../assets/images/gigs/gig4.jpg',
        '../assets/images/gigs/gig2.png',
        '../assets/images/gigs/gig4.jpg',
        '../assets/images/gigs/gig5.jpg',
      ],
      'lifestyle',
      2
    ),
    _createGig(
      'I will create zoo so you can explore and find more animals',
      [
        '../assets/images/gigs/gig7.jpg',
        '../assets/images/gigs/gig2.png',
        '../assets/images/gigs/gig4.jpg',
        '../assets/images/gigs/gig5.jpg',
      ],
      'lifestyle',
      7
    ),
    _createGig('I will create games so you can play with all of your friends', [
      '../assets/images/gigs/gig6.jpg',
      '../assets/images/gigs/gig2.png',
      '../assets/images/gigs/gig4.jpg',
      '../assets/images/gigs/gig5.jpg',
    ]),
    _createGig(
      'I will create store that you can sell your products',
      [
        '../assets/images/gigs/gig5.jpg',
        '../assets/images/gigs/gig2.png',
        '../assets/images/gigs/gig4.jpg',
        '../assets/images/gigs/gig5.jpg',
      ],
      'business',
      5
    ),
    _createGig(
      'I will create database so you can control your items',
      [
        '../assets/images/gigs/gig7.jpg',
        '../assets/images/gigs/gig2.png',
        '../assets/images/gigs/gig4.jpg',
        '../assets/images/gigs/gig5.jpg',
      ],
      'data',
      7
    ),
  ]
  storageService.postMany(STORAGE_KEY, gigs)
  return gigs
}

function getMarketCategories() {
  const categories = [
    { title: 'Graphics & Design', svg: 'cupAndPencil', name: 'graphic' },
    { title: 'Digital Marketing', svg: 'tv', name: 'digital' },
    { title: 'Writing & Translation', svg: 'paperAndPen', name: 'writing' },
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

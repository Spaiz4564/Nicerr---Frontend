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
  getGigsByOwnerId,
}
window.cs = gigService

async function query(
  filterBy = {
    title: '',
    minPrice: 0,
    maxPrice: 200000,
    categoryId: '',
    daysToDeliver: null,
  },
  sortBy = { by: 'name', desc: 1 }
) {
  let gigs = await storageService.query(STORAGE_KEY)
  if (!gigs.length) gigs = _createGigs()
  if (!filterBy) return gigs

  const { owner } = filterBy
  if (owner) {
    //we need to return the gigs that the owner has
    gigs = gigs.filter((gig) => {
      return gig.owner._id === owner
    })
  }

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
      return gig.categories.includes(filterBy.categoryId)
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
  if (sortBy === 'level') {
    gigs.sort((a, b) => {
      return b.owner.rate - a.owner.rate
    })
  }
  if (sortBy === 'price') {
    gigs.sort((a, b) => {
      return a.price - b.price
    })
  }
  if (sortBy === 'rate') {
    gigs.sort((a, b) => {
      return b.rate - a.rate
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
  console.log('gig', gig._id)
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
    categories: [],
    description: '',
    images: [
      'https://res.cloudinary.com/dzcangpqd/image/upload/v1680008847/user1/img1_hc4qok.png',
      'https://res.cloudinary.com/dzcangpqd/image/upload/v1680008858/user1/img7_mqbyac.png',
    ],
  }
}

async function getGigsByOwnerId(ownerId) {
  const gigs = await storageService.query(STORAGE_KEY)
  return gigs.filter((gig) => gig.owner._id === ownerId)
}

function _createGig(title, images, categories, daysToDeliver, rate) {
  return {
    title,
    price: utilService.getRandomIntInclusive(5, 200),
    images,
    rate,
    daysToDeliver,
    owner: utilService.getRandomOwners(),
    categories,
  }
}

function _createGigs() {
  const gigs = [
    _createGig(
      'I will create soccer pitch for you so you can play soccer with your friends',
      [
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1680008847/user1/img1_hc4qok.png',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1680008858/user1/img7_mqbyac.png',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1680008856/user1/img6_j5v239.png',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1680008855/user1/img5_awr6af.png',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1680008853/user1/img4_udwrru.png',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1680008851/user1/img3_jvwdgd.png',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1680008849/user1/img2_buznmr.png',
      ],
      ['wordpress', 'digital marketing'],
      3,
      2.5
    ),
    _createGig(
      'I will create logo for your company so you can be more professional',
      [
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925741/cld-sample-5.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925741/cld-sample-4.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925740/cld-sample-3.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925740/cld-sample-2.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925739/cld-sample.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1680008851/user1/img3_jvwdgd.png',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1680008851/user1/img3_jvwdgd.png',
      ],
      ['data entry", "graphic', 'voice over'],
      3,
      4.5
    ),
    _createGig(
      'I will create website for your company so you can be more professional',
      [
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925731/samples/landscapes/landscape-panorama.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925730/samples/animals/kitten-playing.gif',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925720/samples/food/pot-mussels.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925724/samples/landscapes/architecture-signs.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925739/cld-sample.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925725/samples/landscapes/beach-boat.jpg',
      ],
      ['digital', 'wordpress'],
      3,
      3.5
    ),
    _createGig(
      'I will create animals for your self so you can be more happy',
      [
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925730/samples/animals/kitten-playing.gif',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925724/samples/animals/three-dogs.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925739/cld-sample.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925727/samples/imagecon-group.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925725/samples/people/bicycle.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925722/samples/ecommerce/shoes.png',
      ],
      ['website design'],
      1,
      7.5
    ),
    _createGig(
      'I will create code for your company to develop your business',
      [
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925727/samples/ecommerce/accessories-bag.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925724/samples/animals/three-dogs.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925718/samples/food/dessert.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925727/samples/imagecon-group.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925739/cld-sample.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925723/samples/people/boy-snow-hoodie.jpg',
      ],
      ['ai services'],
      2,
      1.5
    ),
    _createGig(
      'I will create food to you so you can cook dinner',
      [
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925726/samples/ecommerce/car-interior-design.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925718/samples/food/dessert.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925725/samples/landscapes/beach-boat.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925740/cld-sample-2.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925722/samples/ecommerce/shoes.png',
      ],
      ['logo design'],
      1,
      3
    ),
    _createGig(
      'I will create love to the whole planet so your find your soulmate ',
      [
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1680008849/user1/img2_buznmr.png',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925724/samples/animals/three-dogs.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925722/samples/ecommerce/shoes.png',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925727/samples/imagecon-group.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925718/samples/food/dessert.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925723/samples/people/boy-snow-hoodie.jpg',
      ],
      ['business', 'voice over'],
      6,
      3.5
    ),
    _createGig(
      'I will create pool for your house so you can swim ',
      [
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925722/samples/landscapes/girl-urban-view.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925723/samples/people/boy-snow-hoodie.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925724/samples/animals/three-dogs.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925727/samples/imagecon-group.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925740/cld-sample-2.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925725/samples/people/bicycle.jpg',
      ],
      ['illustrations', 'lifestyle'],
      2,
      4.5
    ),
    _createGig(
      'I will create ball to the soccer pitch so you can play with your frinds',
      [
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925723/samples/bike.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925718/samples/food/dessert.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925726/samples/ecommerce/leather-bag-gray.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925724/samples/animals/three-dogs.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925725/samples/landscapes/beach-boat.jpg',
      ],
      ['lifestyle', 'video explainer'],
      2,
      5.5
    ),
    _createGig(
      'I will create zoo so you can explore and find more animals',
      [
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925719/samples/people/kitchen-bar.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925722/samples/ecommerce/shoes.png',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925726/samples/ecommerce/leather-bag-gray.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925718/samples/food/dessert.jpg',
      ],
      ['lifestyle', 'social media'],
      7,
      9.5
    ),
    _createGig(
      'I will create games so you can play with all of your friends',
      [
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925718/samples/ecommerce/analog-classic.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925723/samples/people/boy-snow-hoodie.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925726/samples/ecommerce/leather-bag-gray.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925722/samples/ecommerce/shoes.png',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925725/samples/people/bicycle.jpg',
      ],
      ['lifestyle', 'seo'],
      4,
      3.5
    ),
    _createGig(
      'I will create store that you can sell your products',
      [
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1680008851/user1/img3_jvwdgd.png',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925713/sample.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925723/samples/people/boy-snow-hoodie.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925726/samples/ecommerce/leather-bag-gray.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925724/samples/animals/three-dogs.jpg',
      ],
      ['business', 'data entry'],
      5,
      4.5
    ),
    _createGig(
      'I will create database so you can control your items',
      [
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1680008858/user1/img7_mqbyac.png',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925720/samples/food/pot-mussels.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925718/samples/food/dessert.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925725/samples/people/bicycle.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925726/samples/ecommerce/leather-bag-gray.jpg',
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1679925722/samples/ecommerce/shoes.png',
      ],
      ['data', 'translation'],
      7,
      2.5
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
      img: '../../assets/images/Hero-section/Valentina.png',
      name: 'Valentina',
      desc: 'AI Artist',
      isFiveStars: true,
    },
    {
      img: '../../assets/images/Hero-section/Andrea.png',
      name: 'Andrea',
      desc: 'Fashion Designer',
    },
    {
      img: '../../assets/images/Hero-section/Moon.png',
      name: 'Moon',
      desc: 'Marketing Expert',
      isFiveStars: true,
    },
    {
      img: '../../assets/images/Hero-section/Ritika.png',
      name: 'Ritika',
      desc: 'Shoemaker and Designer',
    },
    {
      img: '../../assets/images/Hero-section/Zach.png',
      name: 'Zach',
      desc: 'Bar Owner',
    },
    {
      img: '../../assets/images/Hero-section/Gabriella.png',
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
      img: '../../assets/images/Services/AI-artists.png',
    },
    {
      desc: 'Build your brand',
      title: 'Logo Design',
      img: '../../assets/images/Services/Logo design.png',
      link: '/#/gig?categoryId=logo+design',
    },
    {
      desc: 'Customize your site',
      title: 'WordPress',
      img: '../../assets/images/Services/WordPress.png',
      link: '/#/gig?categoryId=wordpress',
    },
    {
      desc: 'Share your message',
      title: 'Voice Over',
      img: '../../assets/images/Services/Voice Over.png',
      link: '/#/gig?categoryId=voice+over',
    },
    {
      desc: 'Engage your audience',
      title: 'Video Explainer',
      img: '../../assets/images/Services/Video Explainer.png',
      link: '/#/gig?categoryId=video+explainer',
    },
    {
      desc: 'Reach more customers',
      title: 'Social Media',
      img: '../../assets/images/Services/Social Media.png',
      link: '/#/gig?categoryId=social+media',
    },
    {
      desc: 'Unlock growth online',
      title: 'SEO',
      img: '../../assets/images/Services/SEO.png',
      link: '/#/gig?categoryId=seo',
    },
    {
      desc: 'Color your dreams',
      title: 'Illustrations',
      img: '../../assets/images/Services/illustration.png',
      link: '/#/gig?categoryId=illustrations',
    },
    {
      desc: 'Go global',
      title: 'Translation',
      img: '../../assets/images/Services/Translation.png',
      link: '/#/gig?categoryId=translation',
    },
    {
      desc: 'Learn your business',
      title: 'Data Entry',
      img: '../../assets/images/Services/Data Entry.png',
      link: '/#/gig?categoryId=data+entry',
    },
  ]
  return services
}

function getTrustedBy() {
  const trustedBy = [
    '../../assets/images/trusted by/Meta.png',
    '../../assets/images/trusted by/Google.png',
    '../../assets/images/trusted by/Netflix.png',
    '../../assets/images/trusted by/PG.png',
    '../../assets/images/trusted by/Paypal.png',
  ]
  return trustedBy
}

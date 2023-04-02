// import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'
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
  getReviews,
  getHeroBackgrounds,
  getTrustedBy,
  getPopularServices,
}
window.cs = gigService

async function query(filterBy = {}, sortBy = {}) {
  const query = { ...filterBy, ...sortBy }
  const { owner } = filterBy

  const res = await httpService.get(STORAGE_KEY, query)

  if (owner) {
    return res.filter((gig) => {
      return gig.owner._id === owner
    })
  }
  if (sortBy === 'level') {
    res.sort((a, b) => {
      return b.owner.rate - a.owner.rate
    })
  }
  if (sortBy === 'price') {
    res.sort((a, b) => {
      return a.price - b.price
    })
  }
  if (sortBy === 'rate') {
    res.sort((a, b) => {
      return b.rate - a.rate
    })
  }
  return res
}
function getById(gigId) {
  return httpService.get(`gig/${gigId}`)
}

async function remove(gigId) {
  return httpService.delete(`gig/${gigId}`)
}
async function save(gig) {
  var savedGig
  if (gig._id) {
    savedGig = await httpService.put(`gig/${gig._id}`, gig)
  } else {
    savedGig = await httpService.post(`gig`, gig)
    console.log('savedGig', savedGig)
  }
  return savedGig
}

async function addGigMsg(gigId, txt) {
  const savedMsg = await httpService.post(`gig/${gigId}/msg`, { txt })
  return savedMsg
}

function getEmptyGig(owner) {
  return {
    title: '',
    price: null,
    rate: utilService.getRandomIntInclusive(1, 5),
    daysToDeliver: null,
    categories: [],
    images: [
      'https://res.cloudinary.com/dzcangpqd/image/upload/v1680008847/user1/img1_hc4qok.png',
      'https://res.cloudinary.com/dzcangpqd/image/upload/v1680008858/user1/img7_mqbyac.png',
    ],
    owner,
  }
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

function getReviews() {
  const reviews = [
    {
      name: 'khabou',
      imgUrl:
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1680014784/bbeab7dd-e6e9-44e8-ac16-9f73ab57974d_gmwav2.jpg',
      flagImg:
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1680012726/1f1fa-1f1f8_dxvj1l.png',
      country: 'United State',
      rate: 5,
      months: 3,
      txt: 'When I was looking for help with AI SaaS, I had an idea, but wasn’t sure weather it’s feasible, and financially viable. I enjoyed working with Vlad, because the experience just felt natural. I’m not technical, and I didn’t feel to be, his team took a care of whole process. Overall, I’m glad I found Vlad. Hope this is a long-term relationships!',
    },
    {
      name: 'birdcam_vt',
      imgUrl:
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1680014788/7b328e0e-e99a-4504-bde9-3ae9cd115341_oswrvw.jpg',
      flagImg:
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1680012722/1f1ff-1f1e6_fu2irs.png',
      country: 'South Africa',
      rate: 5,
      months: 2,
      txt: 'Urek never disappoints, I provided a reference image and he was able to match it and go above and beyond my expectations. He is truly the best in his field, providing quality AI art for a reasonable price. I strongly recommend him.',
    },
    {
      name: 'diplomattylaa',
      imgUrl:
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1680014786/65b1b4ab-926d-46be-95d0-fe3ebeb2e61f_lnlwu5.jpg',
      flagImg:
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1680012722/1f1ee-1f1f1_opzusm.png',
      country: 'Israel',
      rate: 5,
      months: 1,
      txt: 'Quick and excellent communication with perfect delivery time. The results were superb and urek_arts went above and beyond! Pricing was fair and well worth it. I would recommend urek_arts in a heartbeat to anyone else looking for anime-style artwork creations or editing.',
    },
    {
      name: 'joellauren',
      imgUrl:
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1680014784/bbeab7dd-e6e9-44e8-ac16-9f73ab57974d_gmwav2.jpg',
      flagImg:
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1680012724/1f1f7-1f1f4_s35l9n.png',
      country: 'Romania',
      rate: 5,
      months: 2,
      txt: 'Fast, comprehensive delivery with good quality. Continuous updates and clear maps of how the project will be carried out even before we start it. Highly recommend!',
    },
    {
      name: 'worldexpo2016',
      imgUrl:
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1680014788/7b328e0e-e99a-4504-bde9-3ae9cd115341_oswrvw.jpg',
      flagImg:
        'https://res.cloudinary.com/dzcangpqd/image/upload/v1680012726/1f1fa-1f1f8_dxvj1l.png',
      country: 'United State',
      rate: 5,
      months: 2,
      txt: "I'm so glad I chose tenpixls to do the job! They did an amazing job on my website - quickly and efficiently. The customer service was top-notch and they were always available to answer any questions I had. They even went above and beyond to...",
    },
  ]
  return reviews
}

function getHeroBackgrounds() {
  const backgrounds = [
    {
      img: 'https://res.cloudinary.com/dzcangpqd/image/upload/v1680449385/Valentina_kyge3j.png',
      name: 'Valentina',
      desc: 'AI Artist',
      isFiveStars: true,
    },
    {
      img: 'https://res.cloudinary.com/dzcangpqd/image/upload/v1680449384/Andrea_bfg2b9.png',
      name: 'Andrea',
      desc: 'Fashion Designer',
    },
    {
      img: 'https://res.cloudinary.com/dzcangpqd/image/upload/v1680449384/Moon_hfbyv0.png',
      name: 'Moon',
      desc: 'Marketing Expert',
      isFiveStars: true,
    },
    {
      img: 'https://res.cloudinary.com/dzcangpqd/image/upload/v1680449384/Ritika_wh6ybe.png',
      name: 'Ritika',
      desc: 'Shoemaker and Designer',
    },
    {
      img: 'https://res.cloudinary.com/dzcangpqd/image/upload/v1680449384/Zach_tqg6jf.png',
      name: 'Zach',
      desc: 'Bar Owner',
    },
    {
      img: 'https://res.cloudinary.com/dzcangpqd/image/upload/v1680449384/Gabriella_cw6gqe.png',
      name: 'Gabrielle',
      desc: 'Video Editor',
      isFiveStars: true,
    },
  ]
  return backgrounds
}

function getTrustedBy() {
  const trustedBy = [
    'https://res.cloudinary.com/dzcangpqd/image/upload/v1680453868/Meta_yma7ta.png',
    'https://res.cloudinary.com/dzcangpqd/image/upload/v1680453868/Google_pqvivw.png',
    'https://res.cloudinary.com/dzcangpqd/image/upload/v1680453868/Netflix_nqisvl.png',
    'https://res.cloudinary.com/dzcangpqd/image/upload/v1680453868/PG_z4z4mo.png',
    'https://res.cloudinary.com/dzcangpqd/image/upload/v1680453868/Paypal_st8ymy.png',
  ]
  return trustedBy
}
function getPopularServices() {
  const services = [
    {
      desc: 'Add talent to AI',
      title: `AI Artists`,
      img: 'https://res.cloudinary.com/dzcangpqd/image/upload/v1680451876/AI-artists_mrd0xg.png',
      link: '/#/gig?categoryId=ai+services',
    },
    {
      desc: 'Build your brand',
      title: 'Logo Design',
      img: 'https://res.cloudinary.com/dzcangpqd/image/upload/v1680451877/Logo_design_beni2s.png',
      link: '/#/gig?categoryId=logo+design',
    },
    {
      desc: 'Customize your site',
      title: 'WordPress',
      img: 'https://res.cloudinary.com/dzcangpqd/image/upload/v1680451876/WordPress_rj1zdx.png',
      link: '/#/gig?categoryId=wordpress',
    },
    {
      desc: 'Share your message',
      title: 'Voice Over',
      img: 'https://res.cloudinary.com/dzcangpqd/image/upload/v1680451876/Voice_Over_z6wddg.png',
      link: '/#/gig?categoryId=voice+over',
    },
    {
      desc: 'Engage your audience',
      title: 'Video Explainer',
      img: 'https://res.cloudinary.com/dzcangpqd/image/upload/v1680451876/Video_Explainer_apknks.png',
      link: '/#/gig?categoryId=video+explainer',
    },
    {
      desc: 'Reach more customers',
      title: 'Social Media',
      img: 'https://res.cloudinary.com/dzcangpqd/image/upload/v1680451877/Social_Media_nbdqra.png',
      link: '/#/gig?categoryId=social+media',
    },
    {
      desc: 'Unlock growth online',
      title: 'SEO',
      img: 'https://res.cloudinary.com/dzcangpqd/image/upload/v1680451877/SEO_khi36a.png',
      link: '/#/gig?categoryId=seo',
    },
    {
      desc: 'Color your dreams',
      title: 'Illustrations',
      img: 'https://res.cloudinary.com/dzcangpqd/image/upload/v1680451877/Illustration_cnkoqu.png',
      link: '/#/gig?categoryId=illustrations',
    },
    {
      desc: 'Go global',
      title: 'Translation',
      img: 'https://res.cloudinary.com/dzcangpqd/image/upload/v1680451876/Translation_xbuy9h.png',
      link: '/#/gig?categoryId=translation',
    },
    {
      desc: 'Learn your business',
      title: 'Data Entry',
      img: 'https://res.cloudinary.com/dzcangpqd/image/upload/v1680451877/Data_Entry_dzzil9.png',
      link: '/#/gig?categoryId=data+entry',
    },
  ]
  return services
}

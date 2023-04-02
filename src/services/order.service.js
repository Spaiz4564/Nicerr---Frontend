// import { storageService } from "./async-storage.service.js";
import { httpService } from './http.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
// import { socketService } from './socket.service.js'
// import { store } from '../store/store.js'
// ;(() => {
//   setTimeout(() => {
//     socketService.on('new-order-seller', (order) => {
//       store.commit({ type: 'saveOrder', order })
//     })

//     socketService.on('new-order-buyer', (order) => {
//       store.commit({ type: 'saveOrder', order })
//     })

//     socketService.on('order-changed-status', (order) => {
//       store.commit({ type: 'saveOrder', order })
//     })
//   }, 0)
// })()

const STORAGE_KEY = 'order'

export const ordersService = {
  query,
  save,
  remove,
  getEmptyOrders,
  addOrdersMsg,
  getById,
}
window.cs = ordersService

async function query(
  filterBy = {
    title: '',
  },
  userId = null
) {
  const orders = await httpService.get(STORAGE_KEY, filterBy, userId)

  const { orderId } = filterBy
  const { ownerId } = filterBy
  const { ordersByUser } = filterBy
  if (orderId) {
    return orders.filter((order) => order._id === orderId)
  } else if (ownerId) {
    return orders.filter((order) => order.seller._id === ownerId)
  }

  return orders
}

async function remove(orderId) {
  // await storageService.remove(STORAGE_KEY, orderId)
  return httpService.delete(`order/${orderId}`)
}
async function save(order) {
  var savedOrder
  if (order._id) {
    savedOrder = await httpService.put(`order/${order._id}`, order)
  } else {
    // Later, owner is set by the backend
    order.buyer = await userService.getLoggedInUser()
    // savedOrder = await storageService.post(ORDER_STORAGE_KEY, order)
    savedOrder = await httpService.post(`order`, order)
  }
  return savedOrder
}
function getById(orderId) {
  return httpService.get(STORAGE_KEY, orderId)
}

async function addOrdersMsg(ordersId, txt) {
  const savedMsg = await httpService.post(`order/${ordersId}/msg`, { txt })
  return savedMsg
}

function getEmptyOrders() {
  return {
    fullName,
    _id,
    imgUrl: null,
  }
}

function _createOrder(title, images, categories, daysToDeliver, rate) {
  return {
    title,
    price: utilService.getRandomIntInclusive(5, 200),
    images,
    rate,
    daysToDeliver,
    owner: utilService.getRandomOwners(),
    categories,
    status: 'Pending',
    boughtAt: Date.now(),
    buyer: userService.getLoggedInUser(),
  }
}

function _createOrders() {
  const orders = [
    _createOrder(
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
    _createOrder(
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
    _createOrder(
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
    _createOrder(
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
      2.5
    ),
  ]
  storageService.postMany(STORAGE_KEY, orders)
  return orders
}

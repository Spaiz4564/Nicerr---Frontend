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
  addOrdersMsg,
  getById,
  getOrdersCompleted,
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

async function getOrdersCompleted() {
  const orders = await httpService.get(STORAGE_KEY)
  return orders.filter((order) => order.status === 'Completed')
}

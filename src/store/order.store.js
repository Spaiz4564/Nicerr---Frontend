import { ordersService } from '../services/order.service'
import { userStore } from './user.store.js'

export function getActionRemoveOrders(ordersId) {
  return {
    type: 'removeOrders',
    ordersId,
  }
}
export function getActionAddOrders(order) {
  return {
    type: 'addOrders',
    order,
  }
}
export function getActionUpdateOrders(orders) {
  return {
    type: 'updateOrders',
    orders,
  }
}
export function getActionAddOrdersMsg(ordersId) {
  return {
    type: 'addOrdersMsg',
    ordersId,
    txt: 'Stam txt',
  }
}

export const ordersStore = {
  state: {
    orders: [],
  },
  getters: {
    orders({ orders }) {
      return orders
    },
    ordersByUser({ orders }) {
      if (!orders) return []
      return orders.filter((order) => {
        return order.buyer._id === userStore.state.loggedinUser._id
      })
    },
  },
  mutations: {
    setOrders(state, { orders }) {
      if (!orders) return
      state.orders = orders
    },
    addOrders(state, { orders }) {
      state.orders.push(orders)
    },

    saveOrders(state, { orders }) {
      const idx = state.orders.findIndex(
        (currOrders) => currOrders._id === orders._id
      )
      if (idx !== -1) state.orders.splice(idx, 1, orders)
      else state.orders.push(orders)
    },
    updateOrders(state, { orders }) {
      const idx = state.orders.findIndex((c) => c._id === orders._id)
      state.orders.splice(idx, 1, orders)
    },
    removeOrders(state, { ordersId }) {
      state.orders = state.orders.filter((orders) => orders._id !== ordersId)
    },
    addOrdersMsg(state, { ordersId, msg }) {
      const orders = state.orders.find((orders) => orders._id === ordersId)
      if (!orders.msgs) orders.msgs = []
      orders.msgs.push(msg)
    },

    updateOrder(state, { order }) {
      const idx = state.orders.findIndex((o) => o._id === order._id)
      if (idx !== -1) {
        state.orders.splice(idx, 1, order)
        return
      }
      state.orders.unshift(order)
    },

    setFilter(state, { filterBy }) {
      state.filterBy = filterBy
    },

    saveOrder(state, { order }) {
      const idx = state.orders.findIndex((o) => o._id === order._id)
      if (idx !== -1) {
        state.orders.splice(idx, 1, order)
        return
      }
      state.orders.unshift(order)
    },
  },
  actions: {
    async addOrders(context, { order }) {
      try {
        const orders = await ordersService.save(order)
        context.commit(getActionAddOrders(orders))
        return orders
      } catch (err) {
        console.log('ordersStore: Error in addOrders', err)
        throw err
      }
    },
    async updateOrders(context, { orders }) {
      try {
        orders = await ordersService.save(orders)
        context.commit(getActionUpdateOrders(orders))
        return orders
      } catch (err) {
        console.log('ordersStore: Error in updateOrders', err)
        throw err
      }
    },
    async loadOrders(context) {
      try {
        const orders = await ordersService.query()
        context.commit({ type: 'setOrders', orders })
      } catch (err) {
        console.log('ordersStore: Error in loadOrders', err)
        throw err
      }
    },

    async removeOrders(context, { ordersId }) {
      try {
        await ordersService.remove(ordersId)
        context.commit(getActionRemoveOrders(ordersId))
      } catch (err) {
        console.log('ordersStore: Error in removeOrders', err)
        throw err
      }
    },
    async addOrdersMsg(context, { ordersId, txt }) {
      try {
        const msg = await ordersService.addOrdersMsg(ordersId, txt)
        context.commit({ type: 'addOrdersMsg', ordersId, msg })
      } catch (err) {
        console.log('ordersStore: Error in addOrdersMsg', err)
        throw err
      }
    },

    async addOwner(context, { owner }) {
      try {
        context.commit({ type: 'updateOwner', owner })
      } catch (err) {
        console.log('ordersStore: Error in addOwner', err)
        throw err
      }
    },

    async saveOrder(context, { order }) {
      try {
        order = await ordersService.save(order)
        context.commit({ type: 'saveOrder', order })
        return order
      } catch (err) {
        console.log('orderStore: Error in addOrder', err)
        throw err
      }
    },

    async updateUserOrders(context, { order }) {
      try {
        context.commit({ type: 'updateOrder', order })
      } catch (err) {
        console.log('orderStore: Error in updateUserOrders', err)
        throw err
      }
    },
  },
}

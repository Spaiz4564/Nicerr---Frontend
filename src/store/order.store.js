import { ordersService } from "../services/order.service";

export function getActionRemoveOrders(ordersId) {
  return {
    type: "removeOrders",
    ordersId,
  };
}
export function getActionAddOrders(orders) {
  return {
    type: "addOrders",
    orders,
  };
}
export function getActionUpdateOrders(orders) {
  return {
    type: "updateOrders",
    orders,
  };
}
export function getActionAddOrdersMsg(ordersId) {
  return {
    type: "addOrdersMsg",
    ordersId,
    txt: "Stam txt",
  };
}

export const ordersStore = {
  state: {
    orders: [],
    filterBy: {
      minPrice: 0,
      maxPrice: 1000,
      title: "",
      categoryId: "",
    },
    selectedCategory: null,
  },
  getters: {
    orders({ orders }) {
      return orders;
    },
    ordersById({ orders }) {
      return (ordersId) => {
        return orders.find((orders) => orders._id === ordersId);
      };
    },

    ordersByOwner({ orders }) {
      return (ownerId) => {
        console.log("ordersByOwner", ownerId);
        return orders.filter((orders) => orders.owner._id === ownerId);
      };
    },

    filterBy({ filterBy }) {
      return filterBy;
    },
    selectedCategory(state) {
      return state.selectedCategory;
    },
  },
  mutations: {
    setOrders(state, { orders }) {
      if (!orders) return;
      state.orders = orders;
    },

    updateCategory(state, { category }) {
      state.selectedCategory = category;
    },

    addOrders(state, { orders }) {
      state.orders.push(orders);
    },
    saveOrders(state, { orders }) {
      const idx = state.orders.findIndex(
        (currOrders) => currOrders._id === orders._id
      );
      if (idx !== -1) state.orders.splice(idx, 1, orders);
      else state.orders.push(orders);
    },

    updateOrders(state, { orders }) {
      const idx = state.orders.findIndex((c) => c._id === orders._id);
      state.orders.splice(idx, 1, orders);
    },
    removeOrders(state, { ordersId }) {
      state.orders = state.orders.filter((orders) => orders._id !== ordersId);
    },
    addOrdersMsg(state, { ordersId, msg }) {
      const orders = state.orders.find((orders) => orders._id === ordersId);
      if (!orders.msgs) orders.msgs = [];
      orders.msgs.push(msg);
    },

    setFilter(state, { filterBy }) {
      state.filterBy = filterBy;
    },
  },
  actions: {
    async addOrders(context, { orders }) {
      try {
        orders = await ordersService.save(orders);
        context.commit(getActionAddOrders(orders));
        return orders;
      } catch (err) {
        console.log("ordersStore: Error in addOrders", err);
        throw err;
      }
    },
    async updateOrders(context, { orders }) {
      try {
        orders = await ordersService.save(orders);
        context.commit(getActionUpdateOrders(orders));
        return orders;
      } catch (err) {
        console.log("ordersStore: Error in updateOrders", err);
        throw err;
      }
    },
    async loadOrders(context) {
      try {
        const orders = await ordersService.query();
        console.log(orders);
        context.commit({ type: "setOrders", orders });
      } catch (err) {
        console.log("ordersStore: Error in loadOrders", err);
        throw err;
      }
    },

    async removeOrders(context, { ordersId }) {
      try {
        await ordersService.remove(ordersId);
        context.commit(getActionRemoveOrders(ordersId));
      } catch (err) {
        console.log("ordersStore: Error in removeOrders", err);
        throw err;
      }
    },
    async addOrdersMsg(context, { ordersId, txt }) {
      try {
        const msg = await ordersService.addOrdersMsg(ordersId, txt);
        context.commit({ type: "addOrdersMsg", ordersId, msg });
      } catch (err) {
        console.log("ordersStore: Error in addOrdersMsg", err);
        throw err;
      }
    },

    async addOwner(context, { owner }) {
      try {
        context.commit({ type: "updateOwner", owner });
      } catch (err) {
        console.log("ordersStore: Error in addOwner", err);
        throw err;
      }
    },

    async updateCategory(context, { category }) {
      if (!category) {
        category = null;
      }
      try {
        context.commit({ type: "updateCategory", category });
      } catch (err) {
        console.log("Could not update category");
        throw err;
      }
    },

    async saveOrders({ commit }, { orders }) {
      try {
        const newOrders = await ordersService.save(orders);
        console.log("newOrders", newOrders);
        commit({ type: "saveOrders", orders: newOrders });
      } catch (err) {
        console.log("Could Not save orders");
        throw err;
      }
    },

    async loadOrderssByOwner(context, { ownerId }) {
      console.log("loadOrderssByOwner", ownerId);
      try {
        const orders = await ordersService.query({ ownerId });
        console.log("orders", orders);
        context.commit({ type: "setOrderss", orders });
      } catch (err) {
        console.log("ordersStore: Error in loadOrderss", err);
        throw err;
      }
    },
  },
};

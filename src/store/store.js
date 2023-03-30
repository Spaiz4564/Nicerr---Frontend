import Vuex from "vuex";

import { userStore } from "./user.store.js";
import { gigStore } from "./gig.store.js";
import { reviewStore } from "./review.store.js";
import { ordersStore } from "./order.store";

export const store = Vuex.createStore({
  strict: true,
  modules: {
    userStore,
    gigStore,
    reviewStore,
    ordersStore,
    modalOpen: false,
  },
  getters: {
    changeModal(state) {
      return (state.modalOpen = !state.modalOpen);
    },
  },
  state: {},
  mutations: {},
  actions: {
    changeModalOpen(context) {
      context.commit({ type: "changeModal" });
    },
  },
});

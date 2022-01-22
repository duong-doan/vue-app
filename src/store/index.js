import Vue from "vue";
import Vuex from "vuex";
import products from "./products";
import auth from "./auth";
import cart from "./cart";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    products,
    auth,
    cart,
  },
});

export default store;

import Vue from 'vue'
import Vuex from 'vuex'
import products from './products'
import auth from './auth'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    products,
    auth
  },
})

export default store
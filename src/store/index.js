import Vue from 'vue'
import Vuex from 'vuex'
import productsModule from './products'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    products: productsModule
  }
})

export default store
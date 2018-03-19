import Vue from 'vue'
import Vuex from 'vuex'
import seller from './modules/seller'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    seller
  }
})


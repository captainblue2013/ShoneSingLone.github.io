import Vue from 'vue'
import Vuex from 'vuex'
import mainState from './modules/mainState'
import test from './modules/test'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    mainState,
    // test
  }
})

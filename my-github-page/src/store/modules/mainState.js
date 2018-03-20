import Vue from 'vue';
import {
  shopcart as MT
} from '../mutation-types';
import {
  shopcart as AT
} from '../action-types';


// initial state
const
  state = {
    all: {}
  },
  getters = {
    template: state => state.all
  },
  actions = {
    print({
      commit
    }) {},
    [AT.init]({
      commit
    }) {}
  },
  mutations = {
    [MT.setAll](state, {
      shopcartMT
    }) {}
  };

export default {
  state,
  getters,
  actions,
  mutations
}

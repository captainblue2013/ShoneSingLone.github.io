import {
  SET_DW
} from '../types';

// initial state
const
  state = {
    deviceW: 0 //设备视窗大小
  },
  getters = {
    isMobile: (state) => {
      console.log('getters in mainState');
      if (state.deviceW <= 768) {
        return true;
      }
      return false;
    }
  },
  actions = {
    print({
      commit
    }) {

    }
  },
  mutations = {
    [SET_DW](state,
      deviceW
    ) {
      console.log('in mainState');
      state.deviceW = deviceW;
    }
  };

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

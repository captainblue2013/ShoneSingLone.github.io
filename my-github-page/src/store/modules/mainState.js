import {
  IS_MOBILE,
  SET_DW,
  SET_MODAL_SHOW,
  SET_MODAL_HIDDEN
} from '../types';

// initial state
const
  state = {
    deviceW: 0, //设备视窗大小
    isShowModal: false
  },
  getters = {
    [IS_MOBILE]: (state) => {
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
      state.deviceW = deviceW;
    },
    [SET_MODAL_SHOW](state) {
      state.isShowModal = true;
    },
    [SET_MODAL_HIDDEN](state) {
      state.isShowModal = false;
    },
  };

/**
 * 
 *  return this.$store.getters["IS_MOBILE"];
 */

export default {
  state,
  getters,
  actions,
  mutations
}

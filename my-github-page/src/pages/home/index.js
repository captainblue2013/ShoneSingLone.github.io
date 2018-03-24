// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from '@/router';
import store from '@/store';
import App from './App';

// add plugin
import axios from 'axios';
import VueAxios from 'vue-axios';

import '@csb/bootstrap-Shone.scss';

import jQuery from 'jquery';
import VueJQ from '@/common/js/plugin/vue-jquery.js';


Vue.config.productionTip = true;

Vue.use(VueAxios, axios);
Vue.use(VueJQ, jQuery);

/* eslint-disable no-new */

(function (vue, $ = vue.jQuery) {
  function debounce(method, delay) {
    clearTimeout(method.tId);
    method.tId = setTimeout(function () {
      method.call(this);
    }, delay);
  }

  function consoleWindow() {
    // $screen-xs:                  480px !default;
    // $screen-sm:                  768px !default;
    // $screen-md:                  992px !default;
    // $screen-lg:                  1200px !default;
    // window.matchMedia IE9
    vue.$store.commit("SET_DW", window.innerWidth);
    // console.log(vue.$store.getters["IS_MOBILE"]);
  }
  $(window)
    .on("resize.mobile", function (e) {
      debounce(consoleWindow, 300);
    })
    .trigger("resize.mobile");
})(new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
}));

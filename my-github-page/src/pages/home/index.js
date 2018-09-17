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

window.$ = jQuery;
window.remotHost = ~window.location.hostname.indexOf("localhost") ?
  "http://localhost:3000/" :
  "https://shonesinglone.leanapp.cn/";

/* eslint-disable no-new */
(function (vue, $ = vue.jQuery) {

  function debounce(method, delay) {
    clearTimeout(method.tId);
    method.tId = setTimeout(function () {
      method.call(this);
    }, delay);
  }


  function consoleWindow() {
    vue.$store.commit("SET_DW", window.innerWidth);
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

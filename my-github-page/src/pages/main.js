// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from '../router';
import App from '../App';

// add plugin
import axios from 'axios';
import VueAxios from 'vue-axios';

import '@bsc/bootstrap-Shone.scss';

import VueJQ from '@/common/js/plugin/vue-jquery.js';
import jQuery from 'jquery';

// import store from './store';

Vue.config.productionTip = true;

Vue.use(VueAxios, axios);
Vue.use(VueJQ, jQuery);

/* eslint-disable no-new */
window.VueApp = new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
});

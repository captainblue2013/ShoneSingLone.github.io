// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import jQuery from 'jquery';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';

// import store from './store';

window.jQuery = jQuery;
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);


Vue.config.productionTip = false

/* eslint-disable no-new */
window.VueApp = new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})

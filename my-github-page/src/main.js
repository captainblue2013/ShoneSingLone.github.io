// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import jquery from 'jquery';
// import BootstrapVue from 'bootstrap-vue'
// import store from './store';


Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
// Vue.use(BootstrapVue);
window.$ = jquery;


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

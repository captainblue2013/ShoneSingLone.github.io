import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from "@/utils/axios"
import jquery from "jquery"
window.Vue = Vue;
window.$ = window.jQuery = jquery;
Vue.config.productionTip = false
Vue.prototype.$http = axios;

new Vue({
    router,
    store,
    render: h => h(App)
  })
  .$mount('#app')
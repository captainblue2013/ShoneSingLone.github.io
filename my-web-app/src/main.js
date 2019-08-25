import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import axios from "@/utils/axios";
import jquery from "jquery";
window.Vue = Vue;
window.$ = window.jQuery = jquery;
Vue.prototype.$http = axios;
Vue.config.productionTip = false;
console.time("mount");
let app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  .$mount();
console.timeEnd("mount");
let $app = jquery("#app");
$app.replaceWith(app.$el);
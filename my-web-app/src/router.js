import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '*',
      redirect: '/'
    }, {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import( /* webpackChunkName: "Login" */ './views/Login.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/svg',
      name: 'svg',
      component: () => import( /* webpackChunkName: "svg" */ './views/Svg.vue')
    }
  ]
})
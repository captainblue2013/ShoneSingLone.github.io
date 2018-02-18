import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Upload from '@/components/Upload';
import Download from '@/components/Download';

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    },
    {
      path: '/download',
      name: 'download',
      component: Download
    }
  ]
})

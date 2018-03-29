import HelloWorld from '@c/HelloWorld';
import follow from '@/components/Upload';
import Download from '@/components/Download';


export default {
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: HelloWorld
  }, {
    path: '/follow',
    name: 'follow',
    component: follow
  }, {
    path: '/download',
    name: 'download',
    component: Download
  }]
};

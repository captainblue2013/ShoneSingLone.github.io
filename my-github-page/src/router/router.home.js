import HelloWorld from '@c/HelloWorld';
import Upload from '@/components/Upload';
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
    path: '/upload',
    name: 'upload',
    component: Upload
  }, {
    path: '/download',
    name: 'download',
    component: Download
  }]
};

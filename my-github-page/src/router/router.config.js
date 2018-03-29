import HomePage from '@/pages/home/components/HomePage';
import follow from '@/pages/other/follow';


export default {
  routes: [{
    path: '*',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: HomePage
  }, {
    path: '/follow',
    name: 'follow',
    component: follow
  }, {
    path: '/download',
    name: 'download',
    component: HomePage
  }]
};

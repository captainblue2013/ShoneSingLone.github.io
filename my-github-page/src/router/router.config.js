import HomePage from '@/pages/home/components/HomePage';


export default {
  routes: [{
    path: '*',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: HomePage
  }, {
    path: '/upload',
    name: 'upload',
    component: HomePage
  }, {
    path: '/download',
    name: 'download',
    component: HomePage
  }]
};

import routeHome from './router.home';
import routeBlog from './router.blog';
import routeTest from './router.test';

let routeDefult = {
  path: '*',
  redirect: '/home/portfolio'
};

export default {
  routes: [
    routeDefult,
    routeHome,
    routeBlog,
    routeTest
  ]
};


// [, { path: '/follow', name: 'follow', component: follow }, { path: '/download', name: 'download', component: HomePage }]

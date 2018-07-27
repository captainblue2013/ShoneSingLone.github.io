import routeHome from './router.home';
import routeBlog from './router.blog';
import routeTool from './router.tool';
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
    routeTool,
    // routeTest
  ]
};

// [, { path: '/follow', name: 'follow', component: follow }, { path: '/download', name: 'download', component: HomePage }]

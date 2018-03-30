import routeHome from './router.home'

let routeDefult = {
  path: '*',
  redirect: '/home'
};
export default {
  routes: [
    routeDefult,
    routeHome
  ]
};


// [, { path: '/follow', name: 'follow', component: follow }, { path: '/download', name: 'download', component: HomePage }]

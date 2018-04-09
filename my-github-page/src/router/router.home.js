import HomePage from '@/pages/home/components/HomePage';
import Portfolio from '@/pages/home/components/Portfolio';
import Blog from '@/pages/home/components/Blog';
import Upload from '@cc/Upload';
import Download from '@cc/Download';


// import follow from '@/pages/other/follow';

export default {
  path: '/home',
  name: 'home',
  component: HomePage,
  children: [{
    path: 'portfolio',
    name: 'home.portfolio',
    component: Portfolio,
  }, {
    path: 'blog',
    name: 'home.blog',
    component: Blog,
  }]
};

// { routes: [{ path: '/', redirect: '/home' }, { path: '/home', name: 'home', component: HelloWorld, children: [{ path: 'upload', name: 'upload', component: Upload }, { path: 'download', name: 'download', component: Download }] }, { path: '/follow', name: 'follow', component: follow }, { path: '/download', name: 'download', component: Download }] };

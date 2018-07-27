import BlogDetail from '@/pages/home/components/BlogDetail';
import Upload from '@cc/Upload';
import Download from '@cc/Download';


// import follow from '@/pages/other/follow';

export default {
  path: '/blog',
  name: 'blog.detail',
  component: BlogDetail,
  beforeEnter: (to, from, next) => {
    // ...
  }
};

// { routes: [{ path: '/', redirect: '/home' }, { path: '/home', name: 'home', component: HelloWorld, children: [{ path: 'upload', name: 'upload', component: Upload }, { path: 'download', name: 'download', component: Download }] }, { path: '/follow', name: 'follow', component: follow }, { path: '/download', name: 'download', component: Download }] };

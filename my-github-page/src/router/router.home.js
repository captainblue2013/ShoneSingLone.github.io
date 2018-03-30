import HomePage from '@/pages/home/components/HomePage';
import Upload from '@cc/Upload';
import Download from '@cc/Download';

console.log(Upload);

// import follow from '@/pages/other/follow';

export default {
  path: '/blog',
  name: 'blog',
  component: HomePage,
  children: [{
    path: 'upload',
    name: 'upload',
    component: Upload
  }, {
    path: 'download',
    name: 'download',
    component: Download
  }]
};

// { routes: [{ path: '/', redirect: '/home' }, { path: '/home', name: 'home', component: HelloWorld, children: [{ path: 'upload', name: 'upload', component: Upload }, { path: 'download', name: 'download', component: Download }] }, { path: '/follow', name: 'follow', component: follow }, { path: '/download', name: 'download', component: Download }] };

importScripts('/messidor/static/js/workbox-sw.prod.v2.1.3.js');/**
 * @file service-worker.js with workbox api
 * @desc [example](https://workbox-samples.glitch.me/examples/workbox-sw/)
 * @author ShoneSingLone(ShoneSingLone@gmail.com)
 */

/* globals WorkboxSW */

const workboxSW = new WorkboxSW({
    cacheId: 'lavas-cache',
    ignoreUrlParametersMatching: [/^utm_/],
    skipWaiting: true,
    clientsClaim: true
});

// Define precache injection point.
workboxSW.precache([
  {
    "url": "/messidor/index.html",
    "revision": "925f30f7b464244f5a44619e11ede922"
  },
  {
    "url": "/messidor/static/css/index.56b39a66.css"
  },
  {
    "url": "/messidor/static/fonts/MaterialIcons-Regular.012cf6a1.woff"
  },
  {
    "url": "/messidor/static/fonts/MaterialIcons-Regular.a37b0c01.ttf"
  },
  {
    "url": "/messidor/static/js/0.77ba67d1.js"
  },
  {
    "url": "/messidor/static/js/1.ca373c1a.js"
  },
  {
    "url": "/messidor/static/js/2.f0e2d716.js"
  },
  {
    "url": "/messidor/static/js/index.cc0c39ab.js"
  },
  {
    "url": "/messidor/static/js/manifest.519492a5.js"
  },
  {
    "url": "/messidor/static/js/vendor.194de34c.js"
  },
  {
    "url": "/messidor/static/js/vue.f62a68f9.js"
  },
  {
    "url": "/messidor/static/js/workbox-sw.prod.v2.1.3.js",
    "revision": "a9890beda9e5f17e4c68f42324217941"
  }
]);
workboxSW.router.registerNavigationRoute('/messidor/index.html');


// Define runtime cache.
workboxSW.router.registerRoute(new RegExp('https://query\.yahooapis\.com/v1/public/yql'),
    workboxSW.strategies.networkFirst());

/**
 * example runningCache with api
 */
workboxSW.router.registerRoute(/^https:\/\/lavas\.baidu\.com\/some\/api/,
    workboxSW.strategies.networkFirst());


/**
 * example runningCache with resources from CDN
 * including maxAge, maxEntries
 * cacheableResponse is important for CDN
 */
workboxSW.router.registerRoute(/^https:\/\/cdn\.baidu\.com/i,
    workboxSW.strategies.cacheFirst({
        cacheName: 'lavas-cache-images',
        cacheExpiration: {
            maxEntries: 100,
            maxAgeSeconds: 7 * 24 * 60 * 60
        },
        cacheableResponse: {
            statuses: [0, 200]
        }
    })
);

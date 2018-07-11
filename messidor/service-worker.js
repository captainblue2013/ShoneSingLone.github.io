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
    "revision": "ae89806caac271643a2e5de2676f374a"
  },
  {
    "url": "/messidor/static/css/index.748cbb9f.css"
  },
  {
    "url": "/messidor/static/fonts/MaterialIcons-Regular.012cf6a1.woff"
  },
  {
    "url": "/messidor/static/fonts/MaterialIcons-Regular.a37b0c01.ttf"
  },
  {
    "url": "/messidor/static/img/icons/android-chrome-144x144.png",
    "revision": "d7fd197e2405ea06205d6a4de05dd971"
  },
  {
    "url": "/messidor/static/img/icons/android-chrome-192x192.png",
    "revision": "177600e52eb49209b028b86fec896ce8"
  },
  {
    "url": "/messidor/static/img/icons/android-chrome-512x512.png",
    "revision": "25810de46aaca1f6dafce61812131ad5"
  },
  {
    "url": "/messidor/static/img/icons/apple-touch-icon-120x120.png",
    "revision": "676edac47e6f1c1193a9e47160b05bb0"
  },
  {
    "url": "/messidor/static/img/icons/apple-touch-icon-152x152.png",
    "revision": "fdb0fe887564abf2eea05d5d20d7777b"
  },
  {
    "url": "/messidor/static/img/icons/apple-touch-icon-180x180.png",
    "revision": "3a67273ea320e06b31611a137af407c5"
  },
  {
    "url": "/messidor/static/img/icons/apple-touch-icon-60x60.png",
    "revision": "34b78f2da366321840351720f12d86db"
  },
  {
    "url": "/messidor/static/img/icons/apple-touch-icon-76x76.png",
    "revision": "0921def29e222306286d270749ba2977"
  },
  {
    "url": "/messidor/static/img/icons/favicon-16x16.png",
    "revision": "bae066397ab82c385d3bf24b344e1e9d"
  },
  {
    "url": "/messidor/static/img/icons/favicon-32x32.png",
    "revision": "94725970641c2b2d160f5d1e526ba544"
  },
  {
    "url": "/messidor/static/js/0.77ba67d1.js"
  },
  {
    "url": "/messidor/static/js/1.85511dba.js"
  },
  {
    "url": "/messidor/static/js/2.87544355.js"
  },
  {
    "url": "/messidor/static/js/3.0933f9de.js"
  },
  {
    "url": "/messidor/static/js/index.e44848fe.js"
  },
  {
    "url": "/messidor/static/js/manifest.857f6195.js"
  },
  {
    "url": "/messidor/static/js/vendor.ec57180c.js"
  },
  {
    "url": "/messidor/static/js/vue.adc8f9ae.js"
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

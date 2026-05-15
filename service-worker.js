/* PixSlay Service Worker
   Bump CACHE_VERSION when you push significant updates.
   Installed users will get the fresh version on next open. */

var CACHE_VERSION = 'pixslay-v57';

var APP_SHELL = [
  '/',
  '/index.html',
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap'
];

var DEMO_PHOTOS = [
  '/photos/k1.jpg',
  '/photos/k2.jpg',
  '/photos/k3.jpg',
  '/photos/k4.jpg',
  '/photos/k5.jpg',
  '/photos/k8.JPG',
  '/photos/k9.jpg',
  '/photos/k10.jpg',
  '/photos/k11.jpg',
  '/photos/k12.jpg',
  '/photos/k13.jpg',
  '/photos/k14.jpg',
  '/photos/k15.jpg',
  '/photos/k16.jpg',
  '/photos/k17.jpg',
  '/photos/k18.jpg',
  '/photos/k19.JPG'
];

/* Install — cache app shell + demo photos */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_VERSION).then(function(cache) {
      /* Cache app shell first (must succeed) */
      return cache.addAll(APP_SHELL).then(function() {
        /* Cache demo photos best-effort (failures won't block install) */
        return Promise.allSettled(
          DEMO_PHOTOS.map(function(url) { return cache.add(url); })
        );
      });
    }).then(function() { return self.skipWaiting(); })
  );
});

/* Activate — delete old caches */
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_VERSION; })
            .map(function(k) { return caches.delete(k); })
      );
    }).then(function() { return self.clients.claim(); })
  );
});

/* Fetch — cache-first for app shell + photos, network-first for everything else */
self.addEventListener('fetch', function(e) {
  var url = e.request.url;

  /* Skip non-GET and cross-origin requests we don't control */
  if (e.request.method !== 'GET') return;

  /* Cache-first: app shell + local photos */
  var isLocal = url.startsWith(self.location.origin);
  var isFont  = url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com');

  if (isLocal || isFont) {
    e.respondWith(
      caches.match(e.request).then(function(cached) {
        return cached || fetch(e.request).then(function(res) {
          /* Cache new responses from our own origin */
          if (isLocal && res.ok) {
            var clone = res.clone();
            caches.open(CACHE_VERSION).then(function(c) { c.put(e.request, clone); });
          }
          return res;
        });
      })
    );
  }
  /* All other requests (analytics, etc.) go straight to network */
});

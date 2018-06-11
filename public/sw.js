self.addEventListener('install', function (event) {
      console.log('Service Worker Installed!', event);
      event.waitUntil(
            caches.open('static-v1').then(function (cache) {
                  return cache.addAll([
                        '/',
                        '/index.html',
                        '/app-sw.js',
                        '/favicon.ico',
                        '/static/js/bundle.js',
                        'https://fonts.googleapis.com/css?family=Roboto+Condensed',
                        'https://fonts.gstatic.com/s/robotocondensed/v16/ieVl2ZhZI2eCN5jzbjEETS9weq8-19K7Cwk6YvM.woff',
                        '/manifest.json',
                  ]);
            })
      );
});

self.addEventListener('activate',
      function (event) {
            console.log('Service Worker activated!', event);
            return self.clients.claim();
      });
self.addEventListener('fetch',
      function (event) {
            // Let the browser do its default thing
            // for non-GET requests.
            console.log('Service Worker fetch!', event);
            if (event.request.method != 'GET') return;

            // Prevent the default, and handle the request ourselves.
            event.respondWith(async function () {
                  // Try to get the response from a cache.
                  const cache = await caches.open('static-v1');
                  const cachedResponse = await cache.match(event.request);

                  if (cachedResponse) {
                        // If we found a match in the cache, return it, but also
                        // update the entry in the cache in the background.
                        return cachedResponse;
                  }

                  // If we didn't find a match in the cache, use the network.
                  return fetch(event.request);
            }());
      });

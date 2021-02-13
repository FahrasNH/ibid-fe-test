const CACHE_NAME = "my-site-cache-v1"
const staticCacheName = [
  '/_next/static/css/styles.chunk.css',
  '/_next/static/chunks/pages/login.js',
  '/_next/static/chunks/pages/index.js',
  '/_next/static/chunks/pages/register.js',
]

this.self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(staticCacheName)
    })
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response
      }
      return fetch(event.request)
    })
  )
})

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => {
          return cacheName != CACHE_NAME
        }).map(cacheName => {
          return caches.delete(cacheName)
        })
      )
    })
  )
})
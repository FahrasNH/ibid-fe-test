const CACHE_NAME = "version-1"
const urlsToCache = ['/index.js', '/login.js', '/register.js']

this.self.addEventListener("install", (event) => {
  console.log("Hello world from the Service Worker 🤙")
})

self.addEventListener("fetch", (event) => {
  console.log("Hello world from the Service Worker 🤙")
})

self.addEventListener("activate", (event) => {
  console.log("Hello world from the Service Worker 🤙")
})
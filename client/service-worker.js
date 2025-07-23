const CACHE_NAME = "super-shop-cache-v1";
const urlsToCache = [
  "/index.html",
  "/styles/styles.css",
  "/scripts/main.js",
  "/assets/images/headphones.jpg",
  "/assets/images/smart_watch.jpg",
  "/assets/images/shoes.jpg",
  "/assets/images/jacket.jpg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

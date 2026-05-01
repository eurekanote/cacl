const CACHE_NAME = 'icalc-v2';
const assets = [
  './',
  './index.html',
  'https://cdn-icons-png.flaticon.com/128/891/891175.png'
];

// 安装时缓存所有资源
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// 离线时拦截请求，直接从缓存取
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});

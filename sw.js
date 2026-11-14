// Will. service worker. Bump VERSION on every release.
// Pages and the quote library are network-first (so updates show up right away) with an offline
// fallback; icons are cache-first. This worker never touches localStorage or IndexedDB.
const VERSION = 'will-4.0.0';
const CORE = ['./', './index.html', './library.json', './manifest.webmanifest', './icon-192.png', './icon-512.png'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(VERSION).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => (k.startsWith('will-') || k.startsWith('still-')) && k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  const isPage = req.mode === 'navigate';
  const isData = url.pathname.endsWith('.json') || url.pathname.endsWith('.webmanifest');
  if (isPage || isData) {
    event.respondWith(
      fetch(req).then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(isPage ? './index.html' : req, copy)); }
        return res;
      }).catch(() => caches.match(isPage ? './index.html' : req, { ignoreSearch: true }).then(r => r || caches.match('./')))
    );
    return;
  }
  event.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
    return res;
  })));
});

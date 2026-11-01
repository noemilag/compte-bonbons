/* Compte-Bonbons : service worker minimal.
   Toujours le réseau d'abord (les mises à jour arrivent tout de suite),
   la copie gardée seulement si on est hors ligne. */
const CACHE = 'compte-bonbons-v2';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;  /* fonts and d3 from other sites: let the browser handle them */
  const same = true;
  e.respondWith(
    fetch(req).then((res) => {
      if (same && !url.search && res.ok) {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
      }
      return res;
    }).catch(() => caches.match(req, {ignoreSearch: req.mode === 'navigate'}).then((r) => r || (req.mode === 'navigate' ? caches.match('./') : undefined)))
  );
});

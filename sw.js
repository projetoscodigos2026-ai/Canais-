const CACHE = 'dbtv-v1';
const FILES = [
  '/Canais-/',
  '/Canais-/index.html',
  '/Canais-/channels.js',
  '/Canais-/manifest.json',
  '/Canais-/icon.jpg'
];

// Instala e faz cache dos arquivos principais
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(FILES))
  );
  self.skipWaiting();
});

// Ativa e limpa caches antigos
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Serve do cache se disponível, senão busca na rede
self.addEventListener('fetch', e => {
  // Streams de vídeo nunca vão pro cache
  if (e.request.url.includes('workers.dev') ||
      e.request.url.includes('.ts') ||
      e.request.url.includes('.m3u')) {
    return;
  }

  e.respondWith(
    caches.match(e.request).then(cached => {
      return cached || fetch(e.request).then(response => {
        // Faz cache de novos recursos estáticos
        if (response.ok && e.request.method === 'GET') {
          const clone = response.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return response;
      }).catch(() => cached);
    })
  );
});

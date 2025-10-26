const CACHE='smk-final-v1';
const ASSETS=['./','./index.html','./manifest.json','./service-worker.js','./plan-data.json','./meals-data.json','./icons/icon-192.png','./icons/icon-512.png','./assets/hero-logo.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE&&caches.delete(k))))) });
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))) });
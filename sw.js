const CACHE='guia-vinhos-v1';
const SHELL=['guia-vinhos.html','manifest.webmanifest','icon-192.png','icon-512.png','icon-180.png','favicon-32.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(
    caches.match(e.request).then(hit=> hit || fetch(e.request).then(res=>{
      const cp=res.clone(); caches.open(CACHE).then(c=>{try{c.put(e.request,cp);}catch(_){}}); return res;
    }).catch(()=>hit))
  );
});

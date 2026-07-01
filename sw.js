const CACHE='guia-vinhos-v3';
const SHELL=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','icon-180.png','favicon-32.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const req=e.request;
  const isHTML = req.mode==='navigate' || (req.headers.get('accept')||'').includes('text/html');
  if(isHTML){
    // APP: rede primeiro -> sempre a versão nova quando online; cache só como reserva offline
    e.respondWith(
      fetch(req).then(res=>{const cp=res.clone();caches.open(CACHE).then(c=>c.put(req,cp).catch(()=>{}));return res;})
                .catch(()=>caches.match(req).then(m=>m||caches.match('index.html')))
    );
  } else {
    // estáticos (ícones, fontes, fotos): cache primeiro
    e.respondWith(caches.match(req).then(hit=>hit||fetch(req).then(res=>{const cp=res.clone();caches.open(CACHE).then(c=>c.put(req,cp).catch(()=>{}));return res;}).catch(()=>hit)));
  }
});

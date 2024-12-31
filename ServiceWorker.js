if (navigator.serviceWorker.controller) {
    console.log("Active service worker found");
    } else {
        navigator.serviceWorker
        .register("serviceWorker.js", {
        scope: "./"
        })
        .then(function (reg) {
        console.log("Service worker  registered");
        });
    }
    let CACHE_NAME = 'my-cache';
    let urlsToCache = [
        'style/style.css',    
        'src/images/icons/logo-GXC-256.ico',
        'scripts/scripts.js',
        'index.html',
        'turnos.html'
        ];
    
    self.addEventListener('install', function(event) {
    // Perform install steps
        event.waitUntil(
            caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
            return cache.addAll(urlsToCache);
            })
        );
    });
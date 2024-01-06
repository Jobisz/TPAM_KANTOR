importScripts("https://progressier.app/SxyUNI5KUdrpmst16AqX/sw.js" );

//Service Worker z jakiego korzystamy do wyświetlania treści Offline pozwala nam na działanie
//w formacie First Internet then Cache
//oznacza to, że Nasza aplikacja będzie starał się pobrać content z Internetu, a jeżeli nie uda jej się
//to zacznie pobierać zawartość która znajduje się w Cache

// Tworzymy plik cache o wskazanej nazwie
let CACHE_NAME = 'my-cache-PWA';
// Wskazujemy jakie pliki mają zostać zapamiętane w Cache po połączeniu z internetem
let urlsToCache = [
				"img/icon-bold-wallet-2.svg",
                "img/icon-outlinear-chart-2.svg", 
                "img/icon-outlinear-setting.svg", 
                "img/iconly-light-arrow-left-2-1.svg",
                "img/iconly-light-arrow-left-2-2.svg",
                "img/iconly-light-outline-arrow-down-2.svg",
                "img/iconly-light-outline-arrow-down-2-1.svg",
                "img/iconly-light-outline-arrow-right-2.svg",
                "img/iconly-light-outline-arrow-right-2-9.svg",
                "img/iconly-light-outline-swap.svg",
                "img/logo.svg",
                "img/logo-1.svg",
                "img/logo-2.svg",
                "img/logo-3.svg",
                "img/logo-4.svg",
                "img/logo-5.svg",
                "img/logo-6.svg",
                "img/logo-7.svg",
                "img/logo-8.svg",
                "img/LogoFinal.png",
                "img/notification-bing.png",
                "img/profile-picture.png",
                "img/vuesax-linear-convert.svg",
                "img/vuesax-linear-export.svg",
                "img/vuesax-linear-money-send.svg",  
                "img/devider.svg",        
                "script/main.js",
                "index.html",
                "saldo.html",
                "profile.html",
                "manifest.json",
				"style/style.css",
                "style/globals.css",
                "style/styleguide.css",
                "style/stylesaldo.css",
                "style/globalssaldo.css",
                "style/styleguidesaldo.css",
                "style/styleprofile.css",
                "style/globalsprofile.css",
                "style/styleguideprofile.css",
    ];

self.addEventListener('install', function(event) {
// Iniciujemy "instalację" Cache oznacza to, że w tym momencie Nasz skrypt zapisze wskazane wyżej plik
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
        return cache.addAll(urlsToCache);
        })
    );
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Zwracamy wartości w Cache
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
// Ta częśc kodu pozwala nam "czyścić" Cache jeżeli po ponownym połączeniu z Internetem zostanie wysłane rządanie pobrania nowych treści
self.addEventListener('activate', function(event) {
  var cacheWhitelist = ['my-cache-PWA'];
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
importScripts('js/sw-utils.js');


const CACHE_ESTATICO = 'ITK-cache-estatico-v1';
const CACHE_DINAMICO = 'ITK-cache-dinamico-v1';
const CACHE_INMUTABLE = 'ITK-cache-inmutable-v1';


const APP_SHELL = [
    'img/chedraui.png',
    'img/favicon.png',
    'img/logo_italika.png',
    'img/logo_italika1.png',
    'img/logo_itk_login.svg',
    'img/sams.png',
    'img/textura.png',
    'img/textura2.png',
    'img/autoservicios/bestbuy.png',
    'img/autoservicios/casaley.png',
    'img/autoservicios/chedraui.png',
    'img/autoservicios/comercial.png',
    'img/autoservicios/heb.png',
    'img/autoservicios/lacomer.png',
    'img/autoservicios/lamarina.png',
    'img/autoservicios/liverpool.png',
    'img/autoservicios/mueblesam.png',
    'img/autoservicios/ryse.png',
    'img/autoservicios/Salinasyrocha.png',
    'img/autoservicios/soriana.png',
    'img/autoservicios/walmart.png',
    'img/icons/icon-128x128.png',
    'img/icons/icon-144x144.png',
    'img/icons/icon-152x152.png',
    'img/icons/icon-192x192.png',
    'img/icons/icon-384x384.png',
    'img/icons/icon-512x512.png',
    'img/icons/icon-72x72.png',
    'img/icons/icon-96x96.png',
    'js/functions.js',
    'js/app.js',
    'js/login.js',
    'js/map.js',
    'app-promoactivador.html',
    'login.html'
];

const APP_SHELL_INMUTABLE = [
    'css/estilos_app_promo.css',
    'css/login.css',
    'css/slider.css',
    'css/base/font-awesome.css',
    'css/base/font-roboto.css',
    'css/base/fonts.css',
    'css/base/jquery-ui.css',
    'css/base/reset.css',
    'fonts/fontawesome/fa-brands-400.eot',
    'fonts/fontawesome/fa-brands-400.svg',
    'fonts/fontawesome/fa-brands-400.ttf',
    'fonts/fontawesome/fa-brands-400.woff',
    'fonts/fontawesome/fa-brands-400.woff2',
    'fonts/fontawesome/fa-light-300.eot',
    'fonts/fontawesome/fa-light-300.svg',
    'fonts/fontawesome/fa-light-300.ttf',
    'fonts/fontawesome/fa-light-300.woff',
    'fonts/fontawesome/fa-light-300.woff2',
    'fonts/fontawesome/fa-regular-400.eot',
    'fonts/fontawesome/fa-regular-400.svg',
    'fonts/fontawesome/fa-regular-400.ttf',
    'fonts/fontawesome/fa-regular-400.woff',
    'fonts/fontawesome/fa-regular-400.woff2',
    'fonts/fontawesome/fa-solid-900.eot',
    'fonts/fontawesome/fa-solid-900.svg',
    'fonts/fontawesome/fa-solid-900.ttf',
    'fonts/fontawesome/fa-solid-900.woff',
    'fonts/fontawesome/fa-solid-900.woff2',
    'fonts/fontawesome/FjallaOne-Regular.ttf',
    'fonts/fontawesome/fontawesome-webfont.eot',
    'fonts/fontawesome/fontawesome-webfont.svg',
    'fonts/fontawesome/fontawesome-webfont.ttf',
    'fonts/fontawesome/fontawesome-webfont.woff',
    'fonts/fontawesome/fontawesome-webfont.woff2',
    'fonts/fontawesome/FontAwesome.otf',
    'fonts/roboto/Roboto-Bold.eot',
    'fonts/roboto/Roboto-Bold.svg',
    'fonts/roboto/Roboto-Bold.ttf',
    'fonts/roboto/Roboto-Bold.woff',
    'fonts/roboto/Roboto-BoldItalic.eot',
    'fonts/roboto/Roboto-BoldItalic.svg',
    'fonts/roboto/Roboto-BoldItalic.ttf',
    'fonts/roboto/Roboto-BoldItalic.woff',
    'fonts/roboto/Roboto-Italic.eot',
    'fonts/roboto/Roboto-Italic.svg',
    'fonts/roboto/Roboto-Italic.ttf',
    'fonts/roboto/Roboto-Italic.woff',
    'fonts/roboto/Roboto-Light.eot',
    'fonts/roboto/Roboto-Light.svg',
    'fonts/roboto/Roboto-Light.ttf',
    'fonts/roboto/Roboto-Light.woff',
    'fonts/roboto/Roboto-LightItalic.eot',
    'fonts/roboto/Roboto-LightItalic.svg',
    'fonts/roboto/Roboto-LightItalic.ttf',
    'fonts/roboto/Roboto-LightItalic.woff',
    'fonts/roboto/Roboto-Medium.eot',
    'fonts/roboto/Roboto-Medium.svg',
    'fonts/roboto/Roboto-Medium.ttf',
    'fonts/roboto/Roboto-Medium.woff',
    'fonts/roboto/Roboto-MediumItalic.eot',
    'fonts/roboto/Roboto-MediumItalic.svg',
    'fonts/roboto/Roboto-MediumItalic.ttf',
    'fonts/roboto/Roboto-MediumItalic.woff',
    'fonts/roboto/roboto-regular-webfont.eot',
    'fonts/roboto/roboto-regular-webfont.svg',
    'fonts/roboto/roboto-regular-webfont.ttf',
    'fonts/roboto/roboto-regular-webfont.woff',
    'fonts/roboto/roboto-regular-webfont.woff2',
    'fonts/roboto/Roboto-Regular.eot',
    'fonts/roboto/Roboto-Regular.svg',
    'fonts/roboto/Roboto-Regular.ttf',
    'fonts/roboto/Roboto-Regular.woff',
    'js/jquery-3.3.1.min.js',
    'js/jquery-ui.min.js',
    'js/jquery-ventana.js',
    'js/jquery.min.js',
    'js/slider.js'
];



self.addEventListener('install', e => {


    const cacheStatic = caches.open(CACHE_ESTATICO).then(cache =>
        cache.addAll(APP_SHELL));

    const cacheInmutable = caches.open(CACHE_INMUTABLE).then(cache =>
        cache.addAll(APP_SHELL_INMUTABLE));



    e.waitUntil(Promise.all([cacheStatic, cacheInmutable]));

});


self.addEventListener('activate', e => {

    const respuesta = caches.keys().then(keys => {

        keys.forEach(key => {

            if (key !== CACHE_ESTATICO && key.includes('static')) {
                return caches.delete(key);
            }

            if (key !== CACHE_DINAMICO && key.includes('dynamic')) {
                return caches.delete(key);
            }

        });

    });

    e.waitUntil(respuesta);

});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        fetch(event.request).catch(function () {
            return caches.match(event.request);
        })
    );
});

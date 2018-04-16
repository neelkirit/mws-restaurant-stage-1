const version = "v1::" 
const staticCacheName = `${version}static-resources`;

const offlineStuff = [
    '/css/styles.css',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg',
    'js/dbhelper.js',
    'js/main.js',
    'js/restaurant_info.js',
    'data/restaurants.json'
]

self.addEventListener('install', (event) => {
    console.log('in install')
    event.waitUntil(
        caches
            .open(staticCacheName)
            .then((cache) => {
          cache.add('//cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react.min.js')
                return cache.addAll(offlineStuff);
            })
            .then(() => {
                console.log('WORKER:: install completed');
            })
    )
});

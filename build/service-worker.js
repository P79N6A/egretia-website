"use strict";var precacheConfig=[["./index.html","40d1204d79f9f4a2fcbc3c4fb0831b4d"],["./static/css/main.81af2564.css","81af25641db63dd1263e59e107f42b65"],["./static/js/main.a9f77c67.js","d01b08be976665954d1909fb2380bf20"],["./static/media/Ball_blue2.793fef4b.png","793fef4b98aebd28acfe6ec0eba3bb90"],["./static/media/Ball_blue4.78b1bd41.png","78b1bd41bcda34bcfc356f9daa06a2da"],["./static/media/Ball_yellow2.be3225fe.png","be3225feb30523b6c2c1ab64827969bd"],["./static/media/Ball_yellow3.aaee55ec.png","aaee55ec619c480bf4eaf2f536761884"],["./static/media/Barlow-Bold.a5b7e73e.ttf","a5b7e73e18a0bb2b0f5721574b824edc"],["./static/media/Barlow-Medium.6fcea11e.ttf","6fcea11ee0a3dae626d94f5fce77d9cd"],["./static/media/Barlow-Regular.8377a297.ttf","8377a297aeeea63a8d01811d2a703b5f"],["./static/media/Barlow-SemiBold.d8e8ba5e.ttf","d8e8ba5e26aee1118419c9de9e01150f"],["./static/media/Gotham.7a9df42a.ttf","7a9df42a7d1fa23314400757d762502b"],["./static/media/Product1.2f9590d8.png","2f9590d808859a1ed9339d643405b87a"],["./static/media/Product2.52adb6a1.png","52adb6a1049accd325fdf68ecba294d5"],["./static/media/Product3.8b969281.png","8b969281e45412e1046c45f9cbaa449e"],["./static/media/Product4.8ae7ce1f.png","8ae7ce1f6389fc58df299134c1088d39"],["./static/media/Product5.fbf5f868.png","fbf5f8683eb6ca22e084d3ee6104df76"],["./static/media/Union_3.24de891e.png","24de891ed97007129c85f1e07fa1cc21"],["./static/media/Union_5.c835a120.png","c835a12029f8fc8122f17c97d44d0c1a"],["./static/media/Union_7.3ef50977.png","3ef5097744de7f0697288acbdca3fbb0"],["./static/media/Union_9.d7688e46.png","d7688e46132799057681f97869c3e457"],["./static/media/bangeBall.95421120.png","954211206e18cd16070dbc237e02f30e"],["./static/media/cooperation_03.b6ee8e55.png","b6ee8e55b7aa6f5f3b8013910c78e7b9"],["./static/media/cooperation_08.0404d408.png","0404d408dd1f3706d1f2846e89e8a309"],["./static/media/cooperation_11.f1ab2f85.png","f1ab2f851d96805ba7cdafe6bed2cd38"],["./static/media/development.fe92774d.png","fe92774dbaf2591e7db3e3cff351cf53"],["./static/media/diannao.03685228.png","03685228a2b95e9bffdf209378b2f918"],["./static/media/diannao1.ae43a1d0.png","ae43a1d00cf29d94cd9689d53ab885b7"],["./static/media/footer.7320fc52.png","7320fc52a810669c343a582f780a0e04"],["./static/media/homeKV.01a930b8.png","01a930b85da065ae10aad475ef0cbf57"],["./static/media/homeKV.b9ab1c81.png","b9ab1c815fa81d9ce614c03f9f33fe42"],["./static/media/homeTV1.7c643214.png","7c643214aabbe94bb0ead31ec81eefa2"],["./static/media/img1.290cc511.png","290cc511f49711fa226c7d56296b0c23"],["./static/media/img2.00039433.png","000394339b2b07ad0f28e28387bea5f3"],["./static/media/img3.59ae5c48.png","59ae5c48017cbac64e75de83855f71c5"],["./static/media/img4.2b3a6866.png","2b3a68664a09ac8d4bcf863654154ec0"],["./static/media/img5.4f005ff2.png","4f005ff2bec57758154eb61652b134d8"],["./static/media/img6.ebc4253d.png","ebc4253d16e4aa7be31f352471b62fda"],["./static/media/img7.d12f377e.png","d12f377e30960a0ec4ac39ea71e94343"],["./static/media/img8.804744dd.png","804744ddacd298873c37d214c57d7435"],["./static/media/img9.2d90767a.png","2d90767a2a9be468101a4d3e7d0bee0e"],["./static/media/liuchengyuan.31af5ec4.png","31af5ec409e2e622acc23e763bd09857"],["./static/media/navBJ.06b71a38.png","06b71a388e150a5e0cf0ba8938d16edc"],["./static/media/navBJ.c4d3ae83.png","c4d3ae8323fa7a5bc0d052f4d7feb323"],["./static/media/navBJ.db58caa6.png","db58caa6191d3bffb2c5438f451ed39c"],["./static/media/navBJ1.47345b8c.png","47345b8c721ecc1cb473e5ef58197abd"],["./static/media/quanqiu.bd68a785.png","bd68a785d3c8baad5b54a742d6a6c148"],["./static/media/rightXuxian.152276e3.png","152276e34576600e2e6fc4764c549b22"],["./static/media/showList_1.1666f14f.png","1666f14fbf22eb685ee886d9b7c45c11"],["./static/media/showList_2.212c8104.png","212c8104cfad0d6a9bfbc256d10fe299"],["./static/media/showList_3.417d6649.png","417d664948d5f2ad71bc453e9ea67d56"],["./static/media/timg2.c9b3638c.png","c9b3638c57c1625d81085838187b4c3e"],["./static/media/yiyukuozhan.2b77b37b.png","2b77b37b3e2d13d692cc57835df7fbac"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="./index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});
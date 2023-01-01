'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "88051bc9aea19b10ee60bba929079b1f",
".git/config": "8dde2329b0e1700f5d064a0d6c1f1c66",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b1b37e06bd22e8571771b3b0d8677d0b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "41b988e9771624a152b3c96f5179af80",
".git/logs/refs/heads/main": "41b988e9771624a152b3c96f5179af80",
".git/logs/refs/remotes/origin/main": "7b232a04ea186e71d4a6658ccf73c507",
".git/objects/84/a1177e711c71d2726db9fc316ea06af6cf6330": "fcb457719f36228e51138540b873699e",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/08/88a03a0eed9cebc07bc44e0dd3b1fc5307c781": "1e30035b634c99ff74b1c53c83d2fa02",
".git/objects/0c/01c17e4bc6490a27dad02607d16d4741427278": "99b08bd05689e99d5dab7cf50d2fbe25",
".git/objects/0c/9db89194c0282a7707916b5cd526db18528891": "0c12d48fda7b796b3af1524ab100f272",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/9a2aaa9ac50af8990c80e1bedf76ee25e97cfb": "b2f97d24c6b77c3021066d491eabac16",
".git/objects/13/53cb3b58970950f5dd75767903d56b89c24bdc": "185429f519a3b6b9ca6b6d4071c41683",
".git/objects/19/6c273b3761cd548ba40b1af424d8547eb933af": "b085f7b51dde9d35df4e90e6fd6a20c0",
".git/objects/1c/9ef1eb404107572ec8f39cd7ac32f4a16fda06": "f25e2b8b2d3a1e45af3c53405143cb67",
".git/objects/1f/dba045efdb907c3c177f13b0d9337216db582f": "dc74ab20d046f01765c2986acf4f7eb1",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/15f876d034a4bde13c91deafc35cae541649d6": "cfa923e832df49f26b9c75e365b23c00",
".git/objects/2b/51e373d68c1558a95fcdd08ad34dd04d628ed7": "a95771723bab5103af8b2cb03a9fd26c",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/36/59f6ad9bafe59bed8d64f709244c665a934049": "89d7993e51d2dae9c0fe8bedcb0c1bcb",
".git/objects/36/e2d118c0983ca1a1d20c7440bea4d562b89976": "65c9d73309718f5beb7597405ec16f56",
".git/objects/3f/6967d3322764dd22da9ef529901d5620a36717": "20a58e120e2f9daa306b0273cbf6c96a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/50/a9c60283bcecef77f9ea50fe81991ef77ccb46": "6b2359362b7cec70697b55451a50b2fc",
".git/objects/55/42ba08340b07ea62de21e18965f67c0daba1e6": "17ed9eb40effa14c18aa97ca63e0f39d",
".git/objects/5a/911877a1c3d5608a10c18390a4d843f437567b": "4470d6f5689002c07f3f9abbbbbc60ac",
".git/objects/67/8c6814687d485a7321dd20acd60fff8db3896b": "0275b2a8a943356abc7e913c182457fe",
".git/objects/70/36340175192ad7d24c0723fe8e887d17fb4ccb": "9f709ef3841fd4147248702842e092c5",
".git/objects/71/2b0bbd7bbdc90ff2f3b4fce9e705c4506c1c6c": "d3eea0a93c2d0bb76b428c568e7e3f25",
".git/objects/72/4d4744018158c28f78b102124d5bb4222181cd": "922b89fa2f4817a29a5f84e749a5603f",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/77/3c42c9e5dcad586b83b344843216b89decf57a": "3cec8895ba647778d6187b369e55d425",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/ffcf17606fa27784582bfd3e2a8e87fe2726fd": "0f424a0c97e993ca8e4275713ea9483a",
".git/objects/82/5e0dc4e2823eeffadf12400eeeafd781b01b28": "6a744490fe5147ba3a59f3b7fb2eee67",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/7130f4022fd73ff4984ed2fbf84f2bb03343a3": "a5fde2ebed9a3a500ff6b8caf909dfef",
".git/objects/8f/50af63afa47ee32daaf6f5331b49a770a17a23": "f061355a58f2bcb29fd65fa180c70363",
".git/objects/90/467e139b6fb074180a7d1b3541b0218a78cbc5": "324b216e0634719514cf567ee075b88f",
".git/objects/98/5bd70a53b741e5337ed39e027c0f105437ed28": "b82c9e8d88aa168936105a68cd26c94b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/d5291103652ef63abec13f857481e23ef16113": "4d7a40c3d9dfe6e30eeeaf708d12bebf",
".git/objects/a4/6ac3286739d66a7f00f2349957b6507ff5430d": "2fb38e181ab5bbf1cdb2f69a23cdb9b2",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/7f511a221fce62bcd629e0bb0e00aec9dfe964": "7eb1bcfab66328876ea5d42dac72c7df",
".git/objects/ac/135c1d45012ce41819c2bff8b7e1acaec06935": "b00864bfcbdb1018c3aea8b7fc100c5c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/abf945dced254e6c4349fc0c1ab2ffd2cfa057": "2c5c4409778a7cce0d3f38d0c96d73cb",
".git/objects/c0/05b89d11378821f7f657dcbc2f9bf5ad87d39c": "268b0c40addf62d320564c1bea0f2be8",
".git/objects/c5/67dae265c1afb02e1cc7defcb51a5895662c5d": "f468ab128b3c9cb82031b6fea85ff43d",
".git/objects/c6/047e687a2ba30ec38ef69541e88e30b2444b9d": "de763b5cb2a9c3792ac974791148d600",
".git/objects/ca/0ddd832ccc0bce9957ed54f303e4b9a8b760d0": "c0547729b17a5ff8684443904a836ba7",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/65cc8e2e3c2df7b80105aca9fd558041dd02e4": "e5edec5be164d636e32bb39b115b6e09",
".git/objects/ce/3bd6585077f8fc90eca7b68ab358490420795a": "cf98187765c2f3d34cb2f57f1d21b546",
".git/objects/cf/7f0278f8c21b0cccfeeb84bcd1885bd8110fd6": "c2083caf3e06f2b21b1b9f6124314108",
".git/objects/cf/f8fc3d0cb9134350ae05389b498c3e30e59fdd": "a8655ebac5bc551884748612ead832ec",
".git/objects/d5/73af950d62915d07b20b0c1e97ef93446bd8ed": "d44e98dc80d2f1f16f3699d05980e8b8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e2/e803bd7d590148b5659faabfd237f06f42b9b3": "d3d67f181dbaea3263b9f43025de71ad",
".git/objects/e3/48dec52c1c47ae12c87169b5f2c286fe90ec44": "0ff5e85b46910502abb879b91a75bb39",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9b61534532c494e2dc41d972b0e7dedb45e902": "49d06dab06b79b0f08e8d88e3a8e2456",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e7/da8dd49e77a9af26cd88c3a68a319eb042f289": "acdefbc77bbe5fe934bbfce436842315",
".git/objects/e8/ee15b57798263315bb7ee6ecd24967891d468f": "9f79c78772d24bbcf29dadae54dffbb2",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/b79447e360c12356d590a40f0518e0ce1c066c": "3d1660b9a150bf21983ebfa5cc56284e",
".git/refs/heads/main": "dd3f8712f7706fae17619a03c390d44e",
".git/refs/remotes/origin/main": "dd3f8712f7706fae17619a03c390d44e",
"assets/AssetManifest.json": "c64876906d65fea564d56876a63a2ae2",
"assets/assets/images/122.jpg": "55b24d1e782ebf4977752ea847051a24",
"assets/assets/images/api.png": "5ca9b6ace6f655c3618905056ff5a3bf",
"assets/assets/images/email.png": "bead89aeb9bc5aebdc97232ad34d62b4",
"assets/assets/images/food.png": "fbff3ddfc789d31e5272752a51a1f80b",
"assets/assets/images/front-end.png": "c8d7fd5148ea96bdb9ece57146a5fe02",
"assets/assets/images/github.png": "10c5e07903f7a9da327b7d86ee19fcf0",
"assets/assets/images/linkedins.png": "918edd626a0f66ba9aee1633bc0a6ec8",
"assets/assets/images/playstore.png": "368b2ef331be24b6782eb26f7aa27972",
"assets/assets/images/reminder.png": "cffc617c7986e5dc82d15bec6b2cdb30",
"assets/assets/images/sabitur.png": "e78628acb754c4c608a76d00c851b1ea",
"assets/assets/images/security.png": "a2c8360d693af8805c376b13e490e44f",
"assets/assets/images/task.png": "59d540a08b9d45799f4ffc8805b86da3",
"assets/assets/images/telegram.png": "898f3084d9af62ae3bb7a5217ca35bf1",
"assets/assets/images/twitter.png": "58b537689276dd3432df40b6da7caaa3",
"assets/assets/images/wallpaper.png": "24df098e9bbdf63a72243aef696f935d",
"assets/assets/images/web.png": "4a9cfdb7ee694dc030cd8c266f82c664",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "16f7c101bde4ffb269667532ebe8fb03",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "20b069c1a503a394a3ee80747ca7ac44",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a6facfcbe47f0603edc97b3a8db785d3",
"/": "a6facfcbe47f0603edc97b3a8db785d3",
"loding.gif": "b29833343440b298ef141015db83f904",
"main.dart.js": "cf9714d576390820dec3a159959fc6ee",
"manifest.json": "a9c1050f52781596770f5f21085dd0e6",
"README.md": "88e2c639f93258defc5a26a5615bc1de",
"version.json": "c844b6750b657043340105b99b9b1700"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

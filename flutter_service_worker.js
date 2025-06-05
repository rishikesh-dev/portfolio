'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5cc4360523417d0511d12b563b9f05a0",
".git/config": "904a968f9e7717a8f58d7d85bebfd416",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "3b50389f97dcc78417b2699a5db5a43e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0ffc6d131cc697a6f8d96972767c9461",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8e4b89839d14d93aaeb01976e6b8aa2b",
".git/logs/refs/heads/main": "b8055e064303553ef905df01cd9ec59b",
".git/logs/refs/remotes/origin/main": "39c2fe50c99c470e0d16dd1ce87ef07d",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/e736613a750cdd8d4f54bca28844e2d13257cb": "bd840ac16c281d81f004822f55e1db62",
".git/objects/0f/d0c3c65b8697096671c52878b722722abb8c0b": "b5b1dc18e820ed64758b30d6ba03fb0e",
".git/objects/12/b7b3c40b5c8dd7d90968d43bac7bc673a6c221": "c1ae18fde79c24e596087332de9a1b13",
".git/objects/14/d2b375dc0c2c4aec35b3d9d4bd89d7291c52dd": "ccfdd2e5d5fbb4633b77ee36ca291938",
".git/objects/21/da2679920855f12d41540e08769743a14656f9": "40fd8d85384241b359ba0a39ba0bf307",
".git/objects/24/174906f9906061039a39c4a44939e3d811f79b": "43967b8176d2a8905991d3f21dc82d69",
".git/objects/28/b20cf8c413a976c836e90d6b6c5339b80eb121": "ea48a0d565d1bbfc2b69ac1295044bc0",
".git/objects/28/fc1da80c7f3ab48cd516ff2fb81b928075bcfb": "c257f906b0ecf6ae8fda8adff517a8d6",
".git/objects/30/5c766747602d18c62f2f94b1bb1d9999980c29": "3d87c76348a7843070eb80f4c6b79210",
".git/objects/30/87930ab45e764cc1cb200020f5ace885347d02": "10bc38399829a8014241e78ce5861e35",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3b/0e108bf5bcf3e6ac078ba3a11cc5cd0fcc3ef7": "72575f91dfaceaf1d0693b781af74ed4",
".git/objects/3b/2e37a2d0abda212a2a2266daeb495e431feacd": "deb1a58cf95b5cedc26244dc34765bc8",
".git/objects/3b/7f08abdafd19d9b22ef4bcdd861460efa84c79": "de8d1cd723d8e7552c7dbbc5d3a3fa10",
".git/objects/3c/b40b1a87e4c0697af47963c0a8a17689300876": "143a8e7f86d44579dd980276aae7c729",
".git/objects/3e/6c942233c69f6b30cb8e8cdb4eea44b350586f": "a2e21b1c29619d5ed2b41322316f4ed6",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/3e/ec5cc0447f3c3b6c7e37053882673f1cfc7451": "b25bdf18659402ea12f8abf86c76a9e7",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/421b44ce7cebadb137fb165d949d580dbc5d4b": "3efb620411f7d3bf33b117709c5eb3be",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/8d8c9333b0b5f543a86fceb535d580a200e4e7": "29588bb92034049672912ef9fdcbff90",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/50/b6223e54990cb3da1b75d374a89aa5440f53a3": "74e63318312627a7736eacd659d8e160",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/abb4deb97f541c5ccdd5bbc01af9af4c040abd": "b49dc5b3fb760bc55a988dbbf377699b",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/71/c0f995ee64396f29a3d9ef283b5050f45d6e0f": "aa69ae6032786d8c915bfc9bd1c64c28",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/74/dc97e7cc27f884fc143ce7af0668aebb69f8ff": "e0c413463c39dc60efcd17bf38c36e9e",
".git/objects/75/7f82c3e42ebfad542824fccc7d80b234a5f67e": "af9dfc0b20998f5bacfec6f17c43923a",
".git/objects/79/bef8ac2acbe1e7e8cbb8fd2e01bdf31c546b80": "2e5010f2cc823e4057a65afbb33724e6",
".git/objects/79/f2309841692e832d2b9ab997538b661a07e367": "417045c668a56d616a6400ab2bf998f5",
".git/objects/7a/eb58bd1b9436a814a50ee3539d38f7668908c8": "0b0114f1c99b0ed9088d544092449113",
".git/objects/7c/2e49a24b4fad867d68d79165bc1d5f7a6844ed": "419b3feb8baddf76043a0937d22bc126",
".git/objects/7d/fadffa499cc6d2e2bc506bf51f8ec218e5315e": "c926512f42352018f824b7cf165c82d8",
".git/objects/83/280a4151e30af49623df6b6a404c67720b1ef8": "320d7a486d64040b2fbebc8712e1fca9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/513d94693ae8100315edbb982d7d243f5469f6": "1a977afa8c0dc3ca507a79160ba48a51",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8c/a9429533783323a412ccee584ba1b4ac0c1f9f": "9b5fa116c42fcb3da2a3bb8244a5ed0e",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/fd28173702737d43065e6e4f5c6c572060a4da": "584eb14fe77b0efd250526f5bf15d7fd",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/99/44e875bf4a69a06e13fbb48950bfe1eff76e81": "e934798d190d62e022de8a92897daf17",
".git/objects/9e/70be6a9ef052bd26e248428cb4db214663afca": "d5fbd6ae192ce2144bda4b1ab8f84862",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a3/d0b0cd230eda786bd8fd3f29d7a2ef22cc2706": "6e406aa676bc5a8c8f7766a719279d3b",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ad/ad146d0ef450a7a172227a113cc57b2ad12f99": "ac215d94ab6bf08a9fc37d05bbe01422",
".git/objects/af/7a0325cb46c7bf86f5d671c5e64046370aebc5": "156fb9b3a69a20a315d95a979566ed94",
".git/objects/af/ee1ea71673cd33954afaa0b6e882c2a0c3be75": "533886907a297068b0ba7fcd17503a13",
".git/objects/b6/984953dec14d3ff6384fc5fa9966663547bee4": "647fc985efde915bf9eb3b60400ad675",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/6e2337e0f5f3f20a858ecbd99cf899e0f9a1e2": "79dc34384bedadd0e4d5689893868896",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/3c0384e492066b1065fcba56eb027c27d4312c": "e80ee484946dc6b496081f0ead7c3cec",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/be/67410fd0a5aaf22e118ff0dd3be2dcd441f34c": "6b6267f4eaa77a2f3de6d0252bfef1c8",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cb/f007cb9fce0e50407805a67ec9a2b43d694aed": "1e916c67a043208b2abb802c097a5e66",
".git/objects/d2/149ea4f8c453028710d797a5c5265f71fa277d": "23488e74c720bc10d78b9d67baeeadc3",
".git/objects/d2/c018fb938ba8d33679d923709bc6e550d49ce0": "15b95f1bd7f56efffb79c2ab111dde09",
".git/objects/d2/e4a1214d59a704e58b3da7e80a8a973aa40f30": "3d115dd90f14d1c18aef6d5c45c014d6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/db/77bb4b7b0906d62b1847e87f15cdcacf6a4f29": "a2e10fc9c4f60ac00e2b9b1ed3a0b5ac",
".git/objects/df/7093608a7eb6173529ce9eeeb4d46e3a8290e5": "151239f49193115888a1b60c3a47cefb",
".git/objects/df/b686057696fe1d469d73f921f63bf5c1227421": "c11489bdec9a87217384b161c8fc4cf7",
".git/objects/e2/19e4653a7ca4a158003a306b9c0b80838f5c19": "5adfbc74bf025d12a809a74ff68f64c8",
".git/objects/e2/6db5dd3dbab6fcdb06f7fd9ab9347ead808f02": "2f6d76624a9dec9c6214eeab0f98202e",
".git/objects/e6/1e8e88bdc98d7edba0ba2a372dfd7b4e5c4b3f": "cdc5a17a6724bfcd899294f948824469",
".git/objects/e7/6ec69a650f1323fe9af6dafc55628ca1afc7e1": "cdc851a64d802b21a07c9e1291833911",
".git/objects/e9/34b6faddd96d0c1e783cf7a5b68fdf0b630728": "f729d3c04a75d6196dd27910a20e559c",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/b242b3415bfc708e0b1d189b540241c25f435b": "d42f443cd3bcb59c17d26f725addaeb6",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f1/715bbc0d167f9be07922bff5cf7e4d60a3aa1e": "e2c54443b90f3e8d92b2f88bcb818a8c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/refs/heads/main": "69f2665da0c4d088becdd1a37088dae8",
".git/refs/remotes/origin/main": "69f2665da0c4d088becdd1a37088dae8",
"assets/AssetManifest.bin": "d55d67ae3e00e4d6c08911474d3f9ac0",
"assets/AssetManifest.bin.json": "29ab12792e9922a28acf968e86d5dbcf",
"assets/AssetManifest.json": "ea10e58907d98da028216ff0e6debdbf",
"assets/assets/fonts/poppins/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/poppins/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/poppins/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/assets/fonts/poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/poppins/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/assets/fonts/poppins/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/poppins/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/poppins/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/poppins/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/poppins/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/assets/fonts/poppins/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/poppins/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/assets/fonts/silkscreen/Silkscreen-Bold.ttf": "aa595a6499f28048bc58b8c6d0157d56",
"assets/assets/fonts/silkscreen/Silkscreen-Regular.ttf": "fcd900f12e2344da17896f8e5fe55456",
"assets/assets/image/arrow.png": "429d2223cc6dfa216013c1ed03d76b12",
"assets/assets/image/flutter.png": "0cb1e3149d08426b1db1677edc51e337",
"assets/assets/image/head.png": "e0d2bf343bf37c03b74d56cbcfb0eeb1",
"assets/assets/image/profile.png": "33484c2030d1732f337f963a62f98afc",
"assets/assets/resume/resume.pdf": "cc71d8d570b650be456db2af3d407919",
"assets/FontManifest.json": "177f024bc6995827f3160e78dbf36b71",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "9ca5027ce9a321e41697f863a6252769",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "32db5db84be1533e70c04fc26b742a41",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bf21cd8fd775a3c59fd53afdee39e0e6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ee5466fd6ba95fbb2bb62a722d1222e4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "32594e5292670e175178e45c8b3d0c3f",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "a70df2842853616a4fff25cc39c853f4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e95c89ce6221a37b796b88232323c650",
"/": "e95c89ce6221a37b796b88232323c650",
"main.dart.js": "c27604a1a3d23af808083676a63f9f3a",
"manifest.json": "b2e4121448cd084e02d443dd372f614e",
"version.json": "536dc42524442522d15a255b5eeebed3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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

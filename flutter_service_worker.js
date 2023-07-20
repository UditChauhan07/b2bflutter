'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0029c4337b1cdf4b5dc224da67dfe785",
".git/config": "4f39647b28116d9a4752bc9cb34fe1fc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0bcdf017b55454735ba71cde991d393e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c5ae6795072bd43d677afb934194f377",
".git/logs/refs/heads/main": "1d800c590c657049c2a6bf399092cb01",
".git/logs/refs/heads/master": "1b9d94476310eda9d7f6c030cfe93a76",
".git/logs/refs/remotes/b2b/latest": "a477317f164d92f35bbf4597cf961e5d",
".git/logs/refs/remotes/b2b/main": "bc1b518909ca487901c82858b96a2b93",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/01bcd3e960df67b0124ad820b373e1f549923c": "1cfe4645f9e8b4aea7be5c9e6bdf592e",
".git/objects/04/6fded769d988880ffeb9da9413eeb6a1fcd617": "cc283183900a5d6e11f88ec8c275de39",
".git/objects/06/7d22d7838f95245e938b83249314fbe782f603": "f8e748b1b9c328dc538495faf4e63046",
".git/objects/09/9378654c9efb2cd074ef4461868a4f4a8e44b4": "3843969666dbaa8bfde6a172d4e23a5b",
".git/objects/0a/31f23f38426bb95becfca5ae3694be21ac9702": "0459a53abdabd074dcc4b66965523f74",
".git/objects/0a/5abc6adc18b30752af2a2eec8d3d30ad2c4048": "2799ec50c928f1878692281647609132",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0b/dbc3a38234aa71066e6cc9403eeb511aec282e": "8ab9548c0fb8ab04f5bc170e3f165724",
".git/objects/15/aeb98048c566d479f23a249a46d8507b654243": "dd51ecb08a89c94135c93d08463cb56b",
".git/objects/16/d3a9879bd15bb4e809aabf1242a0db1bf36d84": "5eed67b0fd2354e7672db6493747b4c8",
".git/objects/17/4b26224f0b3467a5cf7cdcecb809d687512a1e": "bc630d6eb8cf0291c4fb5e2f173dfa74",
".git/objects/18/6b6a4a9dfa306ecb7dcb2b0cc67326f3ca65f5": "ca23744c899d60d21bb6fcd565d138e2",
".git/objects/1a/99529abca879b045d3eff2cd41aa42783ec1bb": "244cdf013890e06b73a90c10e6e2867b",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1c/64b8d915388e0466ba46cb79834b66c2bd6562": "de40f0830b32f3fa84776776ae1d03e8",
".git/objects/1c/99b9a7b946481f998b7210f4484e404e027489": "ad2cfac1cc949abcf58bef4ac0d24ac3",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/1f/c1406353f227585851ad0c025f487a01ffbe78": "e7e9b07925f9f1c48ea523ea03468233",
".git/objects/22/6ea751e56775d36f53ca33ec89bd77e846f2aa": "495306d1fee297be07e07c47acc64404",
".git/objects/24/424b6fb20a9cf1748a4af94805cfe7621bfe91": "67d1c0d8e96e774375bc3e3c493f7291",
".git/objects/28/81d2c036d3e28003aad9c9f8adc34e40c11d98": "b64b26e14513b7280f7b9b0ad880f30d",
".git/objects/28/f276dd80e9b3bc7705cf689b08446d15c98a6d": "991f7649c0dab159cbf92cbfb3633f19",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/9152f47612d19ae245f28f25e08f9f958da144": "e986f974de0c92ced6566c66f8c9c9df",
".git/objects/2e/6a5b2743b651fe08029447e225c63c3c3fea98": "d18cac68e9baf094bbf6f3881cda8318",
".git/objects/35/644182590996bc48a42c7dddc46b2e46336347": "7004be066a7daefec009a5eb25242e5e",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/b798693d3ae80ff64a74d7970b9cfa96329623": "ac62d37fcf6cc6c842f1a38678759a7e",
".git/objects/36/fd477ef519f2942890f453fc81bda9f063d346": "0b04b81af1468094df45b340b283d96b",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/b1033e66c87393d048d856cdafec4556960c4d": "4e8988d570630b883511586270e63104",
".git/objects/38/afc665704210bf217799a39e8be0f50bf9fbe2": "1df6627b6949bc82ab3d88ac448306f9",
".git/objects/39/5208cd8e49ccd7bafbcaeb2c313407ed7b5c92": "5ec4be4a57b24533b9acf67c84fad63f",
".git/objects/3b/ce10818cfd6b90407079904bbba549cb098b61": "724fa8cf2df8914dfbe71c788bc214d8",
".git/objects/3c/ccd1c3a5a6ebec5e3d468920378b0a5d83e7d9": "8b6659e75c91ec38d76bca3276e7b4e6",
".git/objects/3c/d2bff996ce5cb6eb19764845b1d6909e70b99f": "4e32e3366518e6444a20903db3ba8fec",
".git/objects/3f/24fb23dc6e93f67a1cb9f8e51fcde59a41ac0b": "28f6ca1ed52355a0b13d91838c05ec59",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/43/508c0adbf776b3fe429c644ff42d369e5af644": "a9fb51cae679171f05785b992660ebdf",
".git/objects/4b/fdb956785f7a88fa427994037fc2e78ced9a69": "a85d8f5052ea4812b9799b69b0132704",
".git/objects/4e/1cd267220549722fc3298f0d64860abec7c981": "84b2b299d6215857bae137a5fc1fd479",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/53/23eb31bd29431d5b347967609d4f6242dca1fb": "213e96760d602a14176cd67351e0e1bd",
".git/objects/54/b0dd037e45a49f304ed47db83d9dd4caa80d44": "ad052620776296bed0d7e63f60283c7d",
".git/objects/5a/45f78badfc886de30619ecad5c352447329ceb": "6bd33465bb831970c4fe5d43035d1a98",
".git/objects/5a/967d31850db87b0c6f4d5afc54aea7458b0355": "869db6a210535a7b4f385cb6de217565",
".git/objects/5b/1c467f59a05f47651e56b7e253ff20b62abb64": "5f3b32cb4095d2c525a4a575855d89af",
".git/objects/5b/f5fd07d63f1e1680bb0363f5b0f90bb0b21016": "5dff6a5da3f3c140b75ffa72ad207afd",
".git/objects/5c/38a98e8ec928f1faf6e7101f4fdf1744895e49": "063857e743a96dffe3662d563633c481",
".git/objects/5d/08df29a7c45a76a0292f4bb32a103f10bdea45": "cb6d724a8fa7dcdcae596927d6cfe4fa",
".git/objects/5d/0a48b7e857d46e41d5e97c8034bb06567870c6": "da716920de5c2bd7fbae2c608a9ee6dd",
".git/objects/5e/450b135989b66ad86e54d9abe3d1999f559f7e": "661e27cba518604cac7dd3c4f3a91dc4",
".git/objects/5f/b89d8ffd3b7fb5e1d513d3f774d9c2c8b5324f": "c9c3900cd620ab56eafc60789d6f1c04",
".git/objects/60/15e9d16182f99618a8dc4473b57789c3a4e8d3": "4eaa40d06080ad89a33398231f2a3de1",
".git/objects/60/a42a031cabd3e10ecc9743e5c1347466d08a31": "b1f324b0fea8f757be87cb96a84e7146",
".git/objects/61/4f96dcac2d8268259896d19af9e3730092eaf8": "cf23f3ffc8d3b175949f69d194fdd730",
".git/objects/61/741b49a5654f84e78abac4836b6863a8ec860c": "69b4aa25006a43dac4bc94583e0a33bf",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/64/5120121d0e3505a6d57062d8378af9b7213cff": "6725a8e70ec926b35d1ba3346714bf5a",
".git/objects/66/e018946c1321139ca6c8ed31d53ed38d7343fb": "6408a69fd503a78c395603687a7c8b70",
".git/objects/6b/b3ce6ae06f4f2601098530d45c7dcfd1f0b32d": "29a95467969170d22412c02761ec04c5",
".git/objects/6d/fa1cb999c07caa435b01773273073ad256ca73": "89e418bc8731407d2094ccb9f215b168",
".git/objects/6e/7dcc38ddfa5c6ae52b08c0597301cacbab7cf1": "2b8e034eb813def02158397246cb9609",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/71/aad807dbc574624fbc67787a817570f078e3c8": "d891f090af18e063a9720ad1df20cf70",
".git/objects/73/6f5753f04544ada1fe477897be50fea20f5e32": "158d9e4cac6c2ed38799a50bb1246c56",
".git/objects/76/65c777536bf76d7595e590667fd068c50e8083": "2165bfac4b30de5b54196dd36f3727d3",
".git/objects/77/8a98c1bd6e667daeab332940c948eb41a16b71": "5b6575c241b51067d3e5b765d98ec654",
".git/objects/77/b0dc9960f5bc1e05405aa30c0fc7ec54a0e177": "06969a7b71ea49eb15b042242bd830b7",
".git/objects/79/38f52df34b597404d0034ae3074064bae5de41": "79f0b48b85bd72bec5b9b27fc604f106",
".git/objects/79/81fe5f9c4142dd8bead8a978aa57b65211aaa6": "cae892338870cb501a9936a4740e56b6",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/0af2eaa5d18ea26d53cbc994049a6dc2a40980": "aee3e11b76200a5ee2d86b4099a61116",
".git/objects/7b/0a209971de7153acc5e97a5a30c362e0e09ed1": "14c54de80df56a76b39bbf62c0390bfb",
".git/objects/7d/d9050edc45ad0f25b90a6b5157e93011f0f228": "2d119356154f97bdb44ac777c19db198",
".git/objects/80/481e2d6440bc802215e331bcad27d03578e6bc": "55d86ca9141476f2fa29018632e0a0db",
".git/objects/84/aead7b5a15e932d168fe3e794fbac8a4041af1": "adc234b049da8ec77672750fbc831069",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/28300c2bc3bd6c09b200d87a1d8c8156968030": "632e265f8a0472cbafcdd726d644488d",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/2bf8b8e1e33a92c07a536a7c753e85e3cfc9a2": "52de69562d7b64e4b5269d0ea5c22bb2",
".git/objects/8e/9387259f4a98773c76d62734c6473b18f9f29e": "f5a588cab7ba6c217dd8dd41a54e1023",
".git/objects/8f/0679f6970cd011a5d1d1ef0df3f6aa937f7831": "3afe6e63fba22d6906905d820a243278",
".git/objects/92/336888d951f9ba867b1e7d48661ac2d7cc0491": "1ecf1062b4d0f610c981d8ae0ec5c40f",
".git/objects/93/eea2bc5504b8942a46fa0f69091d4cbabb4602": "ff88c7efccd1f3438a7f59c3c6bf6895",
".git/objects/96/fbc48b4ae4e500860160e87945207c121ba4aa": "5180e21b7c6b0e2dde30250cfff3ae68",
".git/objects/97/8139e3df400c2d69c47c5ae86aff5d58baf75d": "97c401b2bdeeccc66c35c1e13ccf1005",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/97/de3ae8e84f9ae5a954fc4d641fc51c61cc7cdd": "25cc2613a27fa00faace57159fbde773",
".git/objects/98/ecc7adcb2bdbd64cd1e549c5b6ec1088584039": "7d244e9a4476e55cf45892ea485ba604",
".git/objects/99/b3a5b6ec66be4cec842529a05d39c4c95d2cfc": "b71077bd51a169873a980f671ac3b8e0",
".git/objects/9c/c644c5b9a7461fde99091a366814ed2607bf77": "51a79c9cec2df1f4b367f1349fc381e7",
".git/objects/9e/f60d415d8f5043aa1d227ab671cf14aec59e77": "bd60508ea3ea2ef7b5dbf63c65ea50fd",
".git/objects/a0/9c15d369aa6474ea9b986240f515ac71e9ff59": "80fec07db19129f0f96db4c2f76224f9",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a9/7982163c9feb63e4c99a1905635b7da1adf440": "b44ce85040ffd5dd99351bf81a628f95",
".git/objects/ab/f346fec2d216d55b37e746bd5c30d34df73759": "96ed75c6a34d74bc503fe23864b574df",
".git/objects/ad/f2be357ea6c7d99c36e6cab4e73853db393825": "d3f9d22fe2d330e025c3eaae4e646595",
".git/objects/b0/0c684d3ef14be87f0badd2eecc88babc70fea0": "7b995019412294d024b82f3c623c5831",
".git/objects/b0/b7b567e4da492880486d93f868d41b39b6d2cc": "f4a83369513d2ee1ab90d0f8c04c2668",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b3/eb0f7f12c3c16f18cfdcea01a0fe3777e16811": "8d510d2b751e3743f0bf5970f7fb8628",
".git/objects/b3/f473984f1c950724563ec33eb0842d123414e7": "fd5b695df8e376ef755ac8c304b0cf7a",
".git/objects/b4/1473a3fecb83523b8442883febcd018d001871": "73c3832a995d7db68447513a323fcbd6",
".git/objects/b4/a533904baccbf1fe6cbf086578bcb046df0317": "29c8cdc8b5cc83a84c257f20b7f68434",
".git/objects/b6/51b1229654af811d991c8b1f226d79d82bb553": "a6ae21d8cb19d17c65b7a5688f105db2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/db259fab29334a50545ca0648618922e3168df": "240d3a047605d62a45d3d2a546163c49",
".git/objects/bb/1d8add483ef0f6fdb743ac8a653dd7a862033e": "7aa071030a29ba2eba337998fe02d862",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/151ad3042f57df310f6dca178cd9a7921cf019": "0952d085af10f5f026ec58cbef3a2fe2",
".git/objects/be/85db57d2cd0699db2c33e941b605b6c294a4dc": "fbc5ab2ef2b6ddba8ed6713aff12b8e8",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/c1/20fdb51a1dddbc54c077be84beeb70d8285623": "f1f69234d460369df789fdb5e2511e8f",
".git/objects/c4/556c1050ee59b9d70cb8916a73453d4d43886d": "523d1906d18e6b4a0015f0b0291ababb",
".git/objects/c5/0884cc0314d1d21450109e888c8afb901e0ec4": "53ab907688e5d8f7749942c4d12c95ab",
".git/objects/c7/24c21ccb4b583e7e9183dc9378ca9e54cb5680": "24a4afa5ae4ecd5eb423a0a760412b7d",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/154b6cc90d055faf4d0cb15f4dd617c96691fa": "c484f73a9612a3233d999110df9bdb06",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/5cc5420c203dd771da7ebeb4618d71df419a56": "6670f6a3fb5f685992587c10a947d247",
".git/objects/cd/8f78a04b80e9d7a1eab75502b5a09ba2e3eabe": "8346e7a97b9cefd48dc2fbce4299dca0",
".git/objects/ce/35fbf32363e3587a9e8417d6c56f87a0edd77c": "8955dbdcaecaf7c5a401a0e1c5efe160",
".git/objects/cf/47197ce4942da9a9579d2859c7acb36430606d": "0e8ac285dd6bd1fddc8be144cf6e5a58",
".git/objects/d1/a22e2179c42ef8a411837dc2154fb9532435c5": "3d637d25a6c5a4f733ccd7894b14ef36",
".git/objects/d3/ea80d4898383c7553ce78e76738cd944f251c0": "b9a575e6a8d21736a5a95a1210dd89a4",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/16e63fe87987fb00b4fac7283869e0053413b7": "ca02c9f60ea73e6f0023d1301af1ff79",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/2d9f82a2f57d0c2517c80339dc272163fe8c49": "c6483c2fdb4f232625ce1519aeeac773",
".git/objects/db/8c3461b4577798b34b26dbff09ad015e401fd8": "f6af3e7a8dc13ccfebecd309dabefc77",
".git/objects/dd/5d12458a0deae75b278b71dfa966fd4ad192a3": "9cef17bc04024093061aa8ac46f1eb03",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/e0e8e5c51f3c1d4f55024440527ca853221072": "a050b7046b913a8e38d9a94b51cff759",
".git/objects/df/d5ae14a41d7f107b3631cb5676848d59b6dcec": "71ff094cc175f846674cabfa6ee58e40",
".git/objects/df/f8e85362d5c907c3d2b60148f4bfa7a869985a": "183ac23f6e8c0e3ddc62328ede9df6b7",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/eb854d89be328465440e151ed234cf3f7581d3": "2c430e49dcf11162cabe19796cb3641e",
".git/objects/e2/3d76f2a23dabfc370d8dab31998e0e5492a15a": "64fbc522e7ae704a7c74577b80782f72",
".git/objects/e2/b678fcef47da8ed74d57be7e96fedf3f7d4462": "38c341f6526f4a5455e0c38115729c24",
".git/objects/e2/e1614b7566f2d307bae09d839766c0e43c7360": "80da9ebe99a3a8b608104c9f5e3bb95b",
".git/objects/e5/683f83b4defcaeb9fd0fd6c91fcd71b5667907": "1bdd6462da8c73e62583b7df594d9c47",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/123e1e61a871349ec56e9852b1b80318e1562e": "4a3534db3552a81e04372e4346c1c3a9",
".git/objects/e8/e24c3fb10735c62f32d0507e49bfcabd7736ee": "941356c0eb34d1e110824651f3fd2a24",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/11a54d13e25c64f1f48346771e1a76ffafe6b5": "898075c40b5144b7427978467f5cce07",
".git/objects/f1/19de6efb33f991849b803af43a73a1d3666375": "72fbc612a52e109839b53d26d180f62a",
".git/objects/f2/173b3d08ba13bba9b857213c5e3533821d0875": "6cc009484c42c0b2ee7439cf4358fc30",
".git/objects/f6/2d64eb5c0a356253e8e9c89ac997aff13bb712": "6cbacc1cf8ad3ae8824bb0db2ae10f92",
".git/objects/f9/80b639896e208fc4ccf87e0d72ac627daba095": "2e23dc26a5bf67c914d19e45422e468a",
".git/objects/fc/ba5acc51bb854f58da16ddacd00948adec1fdf": "888f2c2f52d66eb00ac0c965ad73bd7e",
".git/objects/ff/1bcfe9766604b74efcf5e8209cb2e09d9c587a": "9cf9cf7f43ef6d786bdd7c08a4281854",
".git/objects/ff/f01fadcb1630098b8a041c86be6b52d7d7629d": "bd588af0a526d71ec07ced0c4a9c0331",
".git/refs/heads/main": "c1d58a68f136954976c1f16c3f579646",
".git/refs/heads/master": "1ea3c4e9228bf2d5002db1ca59a64b0c",
".git/refs/remotes/b2b/latest": "5975487029e431412529e35f26898347",
".git/refs/remotes/b2b/main": "c1d58a68f136954976c1f16c3f579646",
"assets/AssetManifest.json": "567cc988c27c9dd5df325db386eea40b",
"assets/assets/icons/cart.svg": "05200fffc800d87a21c128549be6c67f",
"assets/assets/icons/setting.svg": "469aa8dce072538da761e26983f0c777",
"assets/assets/icons/user.svg": "95065a518fabb035734f2167cbd39a3d",
"assets/assets/img/1.jpg": "b08d813c342a6cf65848910b0e61a57c",
"assets/assets/img/banner-imag.jpg": "99fcc4f5ee58fbde35af1dcaf21dc3d6",
"assets/assets/img/BeautyFashionLogo.png": "67d097ffb43af9e71e40e3fe304cdeab",
"assets/assets/img/BFS-makeup-bg-Mobile%25201.png": "671f44133a0fe43d6922264d947259c6",
"assets/assets/img/BFS-makeup-bg-with-logo.jpg": "0372f162f82b204ed1f803618648da5b",
"assets/assets/img/boj_1600x.jpg": "ca5c5d527f5365174a093b8245f2e955",
"assets/assets/img/btif-sale-logo%25202.png": "0949bd4b4750ca31b7025f1097a12b39",
"assets/assets/img/Group%25202.png": "c738a12f54f6e28daa286ad34afe86a1",
"assets/assets/img/Hair-care%2520(1).png": "3b834875259e477e9a25ddae6f39b655",
"assets/assets/img/Hair-care.png": "92a6cad647e820e039cd38ef6c942191",
"assets/assets/img/image%2520(1).png": "d7c31843ef2d01f40ad4d94bfa8bf58c",
"assets/assets/img/image%252013.png": "c9548e9472111071f8902603870463b2",
"assets/assets/img/image%25209.png": "973cf968b2e55f7d5586ec49820a2c7e",
"assets/assets/img/menu-banner.jpg": "cef0c0007976a5a3366277c16e5852d3",
"assets/assets/img/Rectangle%25203.png": "2570e5ee7ce3784f4b8634b2da1fee57",
"assets/assets/img/Rectangle%252033.png": "69044be7766eb0abae2f7dd5dd5ffbd3",
"assets/assets/img/Rectangle%252034.png": "bd96496b79dfe1e6edb09ba3f37bb5d3",
"assets/assets/img/Rectangle%252035.png": "8b40bac0285c942f1208b8a12696108c",
"assets/assets/img/Rectangle%25204.png": "30f1b890c9df1fb3cfe15b972c3a61d5",
"assets/assets/img/Rectangle%252042%2520(1).png": "7bec87ce7fcd412040e889214adf2f3b",
"assets/assets/img/Rectangle%252042%2520(2).png": "f09aa1c314d062350168bdefa70e9a39",
"assets/assets/img/Rectangle%252042%2520(3).png": "6a6c45aac7978005bdec29c6dfb0db95",
"assets/assets/img/Rectangle%252042%2520(4).png": "91ebca6ae5e0edc01949eb690261ad68",
"assets/assets/img/Rectangle%252042.png": "f3530c603b8c80a9401fb0fa7c1007d6",
"assets/assets/img/Rectangle%25205.png": "09522ae155a28c0feffe58205575b8af",
"assets/assets/img/skin-care.png": "803ad3373260122478d288e1e5ec780e",
"assets/assets/img/unnamed.jpg": "8532a9feec24dca592e5e92fd7e4e457",
"assets/assets/img/women.jpg": "32f506c8627b0ab00396ca08929ca01f",
"assets/assets/imgss/Bobbi-brown.png": "16fbcc80869131cc1a574d98abd8d997",
"assets/assets/imgss/Bumbleandbumbe.png": "4a0be1058e99733f9458a8a22d17967d",
"assets/assets/imgss/BY%2520TERRY.jpg": "6b4c7bf5119d424c0a0e71c811642f54",
"assets/assets/imgss/Byredo.jpg": "39fa9b24d3b64bfb6d12131667fa368e",
"assets/assets/imgss/Diptyque.jpg": "7584303631d79037bf770879d4f0a11d",
"assets/assets/imgss/Eve%2520Lom.png": "f900705d7a32c31dcba863407f590d94",
"assets/assets/imgss/glamglow.png": "ef209c6787e0a8dfe455d84456700b80",
"assets/assets/imgss/Kevyn%2520Aucoin%2520Cosmetics.jpg": "cfd99c24e3fd8e659e1a1b28c29dbfcd",
"assets/assets/imgss/Maison%2520Margiela.png": "2ae26f2eea502d4d1e564fc7be7725b3",
"assets/assets/imgss/rco-bleu-logo.png": "a18a2ee2ae5dcb2563a2f1a311ced536",
"assets/assets/imgss/RCO_LOGO.jpg": "34e4561cfe5db0f95a49594bdaa2c913",
"assets/assets/imgss/revive-logo.jpg": "063b5f0c86fef5c0c4441d2b46949beb",
"assets/assets/imgss/RMS%2520Beauty%2520logo%2520(1).jpg": "933f77cccf4121f253e667cd3fe0d3aa",
"assets/assets/imgss/RMS%2520Beauty%2520logo%25201.png": "e5b904a54d5d4d12c2e355d5606bc59c",
"assets/assets/imgss/RMS%2520Beauty%2520logo.jpg": "adb17296c782cf66ec7b2e542961e796",
"assets/assets/imgss/RMS%2520Beauty%2520logo.png": "229ea45b34981286647a17f058527ed9",
"assets/assets/imgss/RMS%2520Beauty.png": "229ea45b34981286647a17f058527ed9",
"assets/assets/imgss/Smashbox.jpg": "1b1845ae26bb549441c8ec5e38d6e346",
"assets/assets/imgss/Susanne%2520Kaufmann.jpg": "2798893c649eeb3dee55ade5cff5fc88",
"assets/assets/lotties/check-dark-green.json": "7fbb467a78409050a2d96028a2a013ed",
"assets/assets/Svg/delet1.svg": "0c6d7dfe2264d6725c1dc5d61c08ce2a",
"assets/assets/Svg/Downlod-icon.svg": "83619685208a3027c55c25b1a294f346",
"assets/assets/Svg/image%25209.svg": "c24dcbee1c4753fb9ff7d317d6533ad3",
"assets/assets/Svg/list.svg": "4abbd1d117b11bf4e39bda7bd299f8eb",
"assets/assets/Svg/Vector.svg": "f102460ce796e6958e98909b8cc7905a",
"assets/assets/website/index.html": "267108b27a6d702b8822847d3a7e2386",
"/": "c0decf56f8bd9f9a3038276c8dea2e41",
"assets/assets/website/script.js": "0769e73c3db8bfb657d9a8cbc25b17be",
"assets/assets/website/style.css": "73efffd30e4db5151e8eed10ae9bf3ae",
"assets/FontManifest.json": "2156ad94090fb03fc389e4fd460ec861",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "85c7e945f7e3c32be459786a255bdbcf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "d10ac4ee5ebe8c8fff90505150ba2a76",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "c17d858d09fb1c596ef0adbf08872086",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "6d8ab59254a120b76bf53f167e809470",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"b2b-favicon-removebg-preview.png": "44d8cc12223dfed9ded5ee4f0ceb5bf0",
"b2b-favicon.png": "3852958cc2ae6eb67e959b6f2a245b7b",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/b2b-favicon-removebg-preview.png": "44d8cc12223dfed9ded5ee4f0ceb5bf0",
"icons/b2b-favicon.png": "3852958cc2ae6eb67e959b6f2a245b7b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c0decf56f8bd9f9a3038276c8dea2e41",
"main.dart.js": "89b10381ec0bc93fea00a04b64553b76",
"manifest.json": "ce3f3efcf9b97256d25792aa39c2f627",
"version.json": "8f4f7629a0e8e8dd56cc88cf5f8dbd86"
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

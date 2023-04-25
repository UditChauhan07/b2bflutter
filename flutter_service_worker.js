'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6548d7cfbba0141a85ee4860dd129509",
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
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4f6861e8ca6d7dc5c61ca9c51f3f7ff8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dbcf8039632b3985b89279947ad00f6e",
".git/logs/refs/heads/main": "82f644a1ca97dbdc40ca02c0d9f2a288",
".git/logs/refs/remotes/b2b/main": "a1bd86ce69bd7eb3d411c37f0dc2db14",
".git/objects/02/bd2b7c2e33f654639eaa6ab529d08c0e00cfd2": "e5d80419d2e94970b2e4e5683bf8547f",
".git/objects/04/01bcd3e960df67b0124ad820b373e1f549923c": "1cfe4645f9e8b4aea7be5c9e6bdf592e",
".git/objects/06/5f1b676ca185f8799fc7ae11ccf9f9339e9adf": "53325ced74a4ac58e72839c4b5d0784f",
".git/objects/08/d3b25d9af275ac2512b5841503321224347a30": "4662d7b7e2d8c27a2c05762efd1a2ae5",
".git/objects/09/9378654c9efb2cd074ef4461868a4f4a8e44b4": "3843969666dbaa8bfde6a172d4e23a5b",
".git/objects/0a/31f23f38426bb95becfca5ae3694be21ac9702": "0459a53abdabd074dcc4b66965523f74",
".git/objects/0d/73095a84f74eca6c81d8483cef6bc92784edc5": "e75d1493a12455677d9118379acc5886",
".git/objects/12/e72699fd02769f97f80faeb38fe651dfe78e87": "6e8c2fb24477039079df86abf6dda81f",
".git/objects/15/aeb98048c566d479f23a249a46d8507b654243": "dd51ecb08a89c94135c93d08463cb56b",
".git/objects/17/d316b8faa0efb432b02fee146953219a7e6283": "93d341205028a93625d085154d5776c2",
".git/objects/1a/2ab364d705bc100bfdcf2dbe02a2de23c437dd": "13bb59bdc65fd8037b3f1506b34527d5",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1c/99b9a7b946481f998b7210f4484e404e027489": "ad2cfac1cc949abcf58bef4ac0d24ac3",
".git/objects/1f/23a67d93fb6f539d1fa6eeeb681ea2a4fef817": "54fa6878f8ca5a71dd2cc97037e26007",
".git/objects/1f/c1406353f227585851ad0c025f487a01ffbe78": "e7e9b07925f9f1c48ea523ea03468233",
".git/objects/1f/c2a5ef0b7053d401c59b840e60e2a90a4091da": "b572e6f991bccaa75fc1555c389d164c",
".git/objects/21/dac162fcd48bc0e7b9fa60017c0d0317c425c6": "83f484f7b99f1b1069a41e0e72008172",
".git/objects/22/95b2e2646972593bec0ab7049829ae0553147e": "d6dc1a0682617872327911d26872f08a",
".git/objects/28/81d2c036d3e28003aad9c9f8adc34e40c11d98": "b64b26e14513b7280f7b9b0ad880f30d",
".git/objects/28/f276dd80e9b3bc7705cf689b08446d15c98a6d": "991f7649c0dab159cbf92cbfb3633f19",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/9152f47612d19ae245f28f25e08f9f958da144": "e986f974de0c92ced6566c66f8c9c9df",
".git/objects/2c/160f783876b918dd316f3f56aa284b1ba3150c": "0774db34d958fb66419ec3020c2ba5a9",
".git/objects/2e/6a5b2743b651fe08029447e225c63c3c3fea98": "d18cac68e9baf094bbf6f3881cda8318",
".git/objects/2f/8abb5c97340a9becffb509780c8018c513cba5": "96d62a13cc7576af4a933ca469b7963b",
".git/objects/36/b798693d3ae80ff64a74d7970b9cfa96329623": "ac62d37fcf6cc6c842f1a38678759a7e",
".git/objects/36/fd477ef519f2942890f453fc81bda9f063d346": "0b04b81af1468094df45b340b283d96b",
".git/objects/37/9e9d707011accc58c9cd48c07d90d41a561d67": "077325020dd7c6c0ea15a86e4a778bd2",
".git/objects/3b/cfd309e8c8f48918544fa73bdc3b4ea7287d32": "b4b05dbaa822e488f106a1e4e051308f",
".git/objects/3c/d2bff996ce5cb6eb19764845b1d6909e70b99f": "4e32e3366518e6444a20903db3ba8fec",
".git/objects/3f/24fb23dc6e93f67a1cb9f8e51fcde59a41ac0b": "28f6ca1ed52355a0b13d91838c05ec59",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/45/6b6302535a1525b9423cc896ca1217c3565765": "d28953b79bf182f54d5d9ba7f8ae854d",
".git/objects/4c/b9c68485718aa970495278356a5b75b19c6d66": "2e0b5e7f771136e6161f43cc32324c40",
".git/objects/4e/268bc07243778876909a73765133f65f8b1699": "1dad43232cc1ed220e4fe7baac2a351c",
".git/objects/50/89aa52eb2b921d2b7ad11dad01651b802edd3e": "e0f8b0d7ceb3c593f5dc100d6304aa9b",
".git/objects/52/c180a85ced52d8fcb13d6a3e40b2cba4d47f2b": "a951b36fff59ddf2fd9a7dc7ee40384d",
".git/objects/53/08de7a6db049f57c9ab70ae71d42729b3bc047": "15bee3e76bd91064b67c70f84b414fc8",
".git/objects/53/23eb31bd29431d5b347967609d4f6242dca1fb": "213e96760d602a14176cd67351e0e1bd",
".git/objects/54/b0dd037e45a49f304ed47db83d9dd4caa80d44": "ad052620776296bed0d7e63f60283c7d",
".git/objects/5b/1c467f59a05f47651e56b7e253ff20b62abb64": "5f3b32cb4095d2c525a4a575855d89af",
".git/objects/5d/0a48b7e857d46e41d5e97c8034bb06567870c6": "da716920de5c2bd7fbae2c608a9ee6dd",
".git/objects/5e/450b135989b66ad86e54d9abe3d1999f559f7e": "661e27cba518604cac7dd3c4f3a91dc4",
".git/objects/60/135276638fbdaa09ed742dcc02f2aaab9d96a0": "f752b9d6cb360d179fc2cb3f898e0edc",
".git/objects/60/a42a031cabd3e10ecc9743e5c1347466d08a31": "b1f324b0fea8f757be87cb96a84e7146",
".git/objects/60/c46291eaebc7496e7fbda93ebc535308fce9ca": "fb73152039ea71ea200475f4a3fdc71a",
".git/objects/61/4f96dcac2d8268259896d19af9e3730092eaf8": "cf23f3ffc8d3b175949f69d194fdd730",
".git/objects/64/5120121d0e3505a6d57062d8378af9b7213cff": "6725a8e70ec926b35d1ba3346714bf5a",
".git/objects/6b/6b4b265e81d8fcec33fcefb5bf916769fb5302": "46a22066570d9405c1585ff4fe943a28",
".git/objects/6c/53f63b23526953872a661fabb4041a38149f37": "0183dbec983a03aa8d5f9f3afa0b8261",
".git/objects/6c/f529cb82e2661b1f9f623c5cfc8cf77a452e56": "e79b949159914002ddae6ed52700f343",
".git/objects/6d/8238a4c5b5000e8fb27de3a2cd42d35cb9d27f": "f7d92603bb42b882ad38948646692773",
".git/objects/6d/fa1cb999c07caa435b01773273073ad256ca73": "89e418bc8731407d2094ccb9f215b168",
".git/objects/76/65c777536bf76d7595e590667fd068c50e8083": "2165bfac4b30de5b54196dd36f3727d3",
".git/objects/77/8a98c1bd6e667daeab332940c948eb41a16b71": "5b6575c241b51067d3e5b765d98ec654",
".git/objects/77/b0dc9960f5bc1e05405aa30c0fc7ec54a0e177": "06969a7b71ea49eb15b042242bd830b7",
".git/objects/79/81fe5f9c4142dd8bead8a978aa57b65211aaa6": "cae892338870cb501a9936a4740e56b6",
".git/objects/79/974e236aa46d573f6ea08568b4f3a709527ba6": "8bfed74d6a13b3c5b5a2cdf630654043",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/0af2eaa5d18ea26d53cbc994049a6dc2a40980": "aee3e11b76200a5ee2d86b4099a61116",
".git/objects/7c/02f462f30f4940bc194f2a582decc102e60d1f": "0d2eb877da32fdc44241d77ac0df0f8e",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/7fb9ccee1e3a785ab16bf015692ce398be44cd": "1ac40ed0c956563652a46950cfa85e7e",
".git/objects/7d/d9050edc45ad0f25b90a6b5157e93011f0f228": "2d119356154f97bdb44ac777c19db198",
".git/objects/81/ac926c7d352551ab117def116ff525b1e2b51a": "40700a3cef04353066fe428294a3adbd",
".git/objects/82/a2ad72f4a905af16ecac87de0f4fa77a88ff26": "c81756256fa8ac2b8e8c0b890e44a135",
".git/objects/84/aead7b5a15e932d168fe3e794fbac8a4041af1": "adc234b049da8ec77672750fbc831069",
".git/objects/85/5e93ae4b8972130f17fff28dd0a41faa4fcb19": "df390626e6e34143365b15c5afd5d61e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/2bf8b8e1e33a92c07a536a7c753e85e3cfc9a2": "52de69562d7b64e4b5269d0ea5c22bb2",
".git/objects/90/05e43031018f1f31938d4200d83ffc19436857": "035a3ae46dfe61d4a64515e02f428421",
".git/objects/90/a84ac3d652e58ac50a08aa481b306bed28432b": "58d3beb85acd84e3ce1e37a030ea8950",
".git/objects/91/98d9f771e0149bdb6799ba947c6d0d63221720": "c4b8a205b7b869818c691e76cf2305e2",
".git/objects/92/1c24fcf7dd86d408f3bf392b1dba902abab015": "6b73bfb895d407f46941b866877a9178",
".git/objects/92/336888d951f9ba867b1e7d48661ac2d7cc0491": "1ecf1062b4d0f610c981d8ae0ec5c40f",
".git/objects/92/37a834249c9714537b49bf44a7d1b2f51aac63": "2ccf074ba1c92f696873a2dd1d9be538",
".git/objects/93/eea2bc5504b8942a46fa0f69091d4cbabb4602": "ff88c7efccd1f3438a7f59c3c6bf6895",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/98/03ef6d78e7b8d5e238c1a80d8dd5c3725a6e92": "1c7bdde3829a3d15371208bf989e0013",
".git/objects/98/ecc7adcb2bdbd64cd1e549c5b6ec1088584039": "7d244e9a4476e55cf45892ea485ba604",
".git/objects/9a/78c9edcdf352d98981460d30dd4f692ccaedf9": "2b3530c7b9f3ea8a7142f4f44337f988",
".git/objects/9d/25854e82d92709284eaf4df2b369fa7b07f7c3": "2e3fc2af30123cc830650a9de2943e40",
".git/objects/9e/9298b8f11654d912d85b98d60e7ef9ac937f02": "2f5bf11f9caa4b513a54a47fc8fa0ef9",
".git/objects/9e/f60d415d8f5043aa1d227ab671cf14aec59e77": "bd60508ea3ea2ef7b5dbf63c65ea50fd",
".git/objects/9f/63a91c4fa0eb4e2a939f01a0d77127a8fa1810": "e1938cddc625069d983c5991bbdc5d97",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/ee3d6edee8c23eb09bd89d428ecd4d5faebb1a": "11900b806f601339da37965eaca6cc0d",
".git/objects/a9/7982163c9feb63e4c99a1905635b7da1adf440": "b44ce85040ffd5dd99351bf81a628f95",
".git/objects/aa/369d8d3d65942a2003dc1f2a64676d11fac16a": "2b6455cc61ae2ad95781b14c7afdc38c",
".git/objects/ad/f2be357ea6c7d99c36e6cab4e73853db393825": "d3f9d22fe2d330e025c3eaae4e646595",
".git/objects/ae/80ea4182488fb9c091cc3993230eb7e3bf4aa1": "fd72a19a2bf4718f448a85c08f853377",
".git/objects/b0/b7b567e4da492880486d93f868d41b39b6d2cc": "f4a83369513d2ee1ab90d0f8c04c2668",
".git/objects/b1/679c4313f7889b83816d4185f92208d262be5f": "aacc5cf9d0867ad83936bc16ce642896",
".git/objects/b3/eb0f7f12c3c16f18cfdcea01a0fe3777e16811": "8d510d2b751e3743f0bf5970f7fb8628",
".git/objects/b6/51b1229654af811d991c8b1f226d79d82bb553": "a6ae21d8cb19d17c65b7a5688f105db2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/d0d0ddb1ecf6226e1feb99b2b028cdd44a28a5": "80e7f54f919785d44be6dd36f2da7214",
".git/objects/b8/db259fab29334a50545ca0648618922e3168df": "240d3a047605d62a45d3d2a546163c49",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/8999841a9058c69b1e577c77fec96549efcae7": "86b12a180ae6a0913f0b9b85cedeb03a",
".git/objects/bc/28441d131bdf189fa14e340e2cbc5979a059e3": "21fdf1bf3e023d8dbe9330e67a43807b",
".git/objects/bd/151ad3042f57df310f6dca178cd9a7921cf019": "0952d085af10f5f026ec58cbef3a2fe2",
".git/objects/be/85db57d2cd0699db2c33e941b605b6c294a4dc": "fbc5ab2ef2b6ddba8ed6713aff12b8e8",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/c1/20fdb51a1dddbc54c077be84beeb70d8285623": "f1f69234d460369df789fdb5e2511e8f",
".git/objects/c4/556c1050ee59b9d70cb8916a73453d4d43886d": "523d1906d18e6b4a0015f0b0291ababb",
".git/objects/c4/764b2d9f75a43a134d70fab8471268d617cb23": "830adb27a20150381f8a17d580c2a3b2",
".git/objects/c4/cbd658635156395dd2b9d93b43da9d981f8c17": "e603d6e9f248584067120294058fc00b",
".git/objects/c5/542029258311c2eedf1cd2fa4db94f0edab43d": "b68304291a28aa264853e886847a4049",
".git/objects/ca/ca272919a5065da6bcb51e9c9247070c74db17": "4a4645ea931a142d3d36b832ecd342f4",
".git/objects/cc/3ea9b63c28b84883ce65876ce0a7d8e0f49cd6": "82ae3bf92cb754706dba78454d30533e",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/713d9b4075543dfe6918b60b89ee21f18e6de4": "22ea8a9b6601bd9acbca67fbb7990f9c",
".git/objects/cd/154b6cc90d055faf4d0cb15f4dd617c96691fa": "c484f73a9612a3233d999110df9bdb06",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d1/cd939d52ced2d0f1ef62b1fe51c73da29e6cc4": "31487ff48f485f5403b495cbc058d7b1",
".git/objects/d2/e594e267198a8d1459abdf6b98fab50a94e586": "e78ad20cb3aa29e0214810d57a98c661",
".git/objects/d3/a7932be5da9335f2fd374aea1c240f8606f62d": "98773453a4c9cf840fac59253743e718",
".git/objects/d3/ea80d4898383c7553ce78e76738cd944f251c0": "b9a575e6a8d21736a5a95a1210dd89a4",
".git/objects/d4/d76f9f2bba4d0eb282f4183383bd0ce95073f7": "e3f07b316871dbf694e06909b8bc7ccd",
".git/objects/d5/126012d5dfd9d8800e9fdecd0d7e533cfbcb12": "ef40e7aab578f694d38d0e9d6905d13c",
".git/objects/d5/f00843f42a935c23122ea6c05b1093bc27d377": "6124bf9d8d86d1264691daeadc27c25c",
".git/objects/d6/85510874af238852c0c9fec81b9c5b0f870fce": "ae2fde46017d827b97ba52ebae2b75b9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/2d9f82a2f57d0c2517c80339dc272163fe8c49": "c6483c2fdb4f232625ce1519aeeac773",
".git/objects/db/8c3461b4577798b34b26dbff09ad015e401fd8": "f6af3e7a8dc13ccfebecd309dabefc77",
".git/objects/dd/5edb1a7e46855a8138b7028913a7aed7e07a26": "15779bbfbf84adb4b688dcd6964caa7f",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/e0e8e5c51f3c1d4f55024440527ca853221072": "a050b7046b913a8e38d9a94b51cff759",
".git/objects/df/2c02b8ae04397625c29663b310ef3211f02884": "f6f46fe7d276c100d5554d9e3049a3a6",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e2/3d76f2a23dabfc370d8dab31998e0e5492a15a": "64fbc522e7ae704a7c74577b80782f72",
".git/objects/e2/e1614b7566f2d307bae09d839766c0e43c7360": "80da9ebe99a3a8b608104c9f5e3bb95b",
".git/objects/e4/b6424cd6d44a22f5a6a1c704f0e75478495bc6": "b41bd88302aa7821fcc837ef0b3fe36e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/91b9c6d07596fd3dba80cd40cd0effcc462bc8": "b7bd082218ce764ffacf11f2cdb6d292",
".git/objects/ea/3cfbcf4a9a7ad4fd3fba78185fc377cc7cac6c": "fd3ea34880ca902691d6cfec677c306f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/11a54d13e25c64f1f48346771e1a76ffafe6b5": "898075c40b5144b7427978467f5cce07",
".git/objects/f1/854aeff6388fd35df5ac068dc28392931d4f9e": "88a30c033945d942a9ec943e77864045",
".git/objects/f2/173b3d08ba13bba9b857213c5e3533821d0875": "6cc009484c42c0b2ee7439cf4358fc30",
".git/objects/fa/f35eaa4d23180c75d8fbfdd122ce43365aeba4": "41b5297f137aac33a15cc0f2966b58aa",
".git/objects/fc/ba5acc51bb854f58da16ddacd00948adec1fdf": "888f2c2f52d66eb00ac0c965ad73bd7e",
".git/objects/fc/f4b141b9bfafa4d2c17ddafa136a523f05362d": "f7c74aa08f3944ab4f9b79b0fc6bd8ba",
".git/objects/fd/50d45419eb51005df934c9f6ae7e6309fa6d83": "e0ae5e282464be0f5977d97a26b39be5",
".git/objects/ff/1bcfe9766604b74efcf5e8209cb2e09d9c587a": "9cf9cf7f43ef6d786bdd7c08a4281854",
".git/objects/ff/724c8f50d828d334899ad2ed482b2f83645ae6": "1059a9d3b4c63e82d4bec6d531a85de7",
".git/objects/ff/d4105eb871f5a7b51b621b014db8a4eaefa7fc": "47df8ba74ea2f4e842bf29fbcff2a631",
".git/objects/ff/f01fadcb1630098b8a041c86be6b52d7d7629d": "bd588af0a526d71ec07ced0c4a9c0331",
".git/refs/heads/main": "c5e8ea534f82693ba4a5283cffd198c5",
".git/refs/remotes/b2b/main": "c5e8ea534f82693ba4a5283cffd198c5",
"assets/AssetManifest.json": "2a470162d8a0b7b2a5172e3892463ddc",
"assets/assets/icons/cart.svg": "1e15eba83d04c0c7be4362f5008331ca",
"assets/assets/icons/setting.svg": "3de4e437b76baf71d9d10b4c9f3296b6",
"assets/assets/icons/user.svg": "f176efd029cd406c90fb175ff3a334bf",
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
"assets/assets/imgss/revive-logo.jpg": "063b5f0c86fef5c0c4441d2b46949beb",
"assets/assets/imgss/RMS%2520Beauty%2520logo%2520(1).jpg": "933f77cccf4121f253e667cd3fe0d3aa",
"assets/assets/imgss/RMS%2520Beauty%2520logo%25201.png": "e5b904a54d5d4d12c2e355d5606bc59c",
"assets/assets/imgss/RMS%2520Beauty%2520logo.jpg": "adb17296c782cf66ec7b2e542961e796",
"assets/assets/imgss/RMS%2520Beauty%2520logo.png": "229ea45b34981286647a17f058527ed9",
"assets/assets/imgss/RMS%2520Beauty.png": "229ea45b34981286647a17f058527ed9",
"assets/assets/imgss/Smashbox.jpg": "1b1845ae26bb549441c8ec5e38d6e346",
"assets/assets/imgss/Susanne%2520Kaufmann.jpg": "2798893c649eeb3dee55ade5cff5fc88",
"assets/assets/lotties/check-dark-green.json": "7fbb467a78409050a2d96028a2a013ed",
"assets/assets/Svg/image%25209.svg": "d862e7cf533c463e34d33b108c9e81be",
"assets/assets/website/index.html": "267108b27a6d702b8822847d3a7e2386",
"/": "b3b4c123e51d1863dc5722a18062bd8a",
"assets/assets/website/script.js": "0769e73c3db8bfb657d9a8cbc25b17be",
"assets/assets/website/style.css": "73efffd30e4db5151e8eed10ae9bf3ae",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "a7dbf0ea7df380d773205b5b317b38a2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "dd74f11e425603c7adb66100f161b2a5",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"b2b-favicon.png": "3852958cc2ae6eb67e959b6f2a245b7b",
"btif-sale-logo%202.png": "0949bd4b4750ca31b7025f1097a12b39",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/b2b-favicon.png": "3852958cc2ae6eb67e959b6f2a245b7b",
"icons/BeautyFashionLogo.png": "67d097ffb43af9e71e40e3fe304cdeab",
"icons/btif-sale-logo%202.png": "0949bd4b4750ca31b7025f1097a12b39",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b3b4c123e51d1863dc5722a18062bd8a",
"main.dart.js": "95dbfedfd17733119fdc20c812cc9a9a",
"manifest.json": "94c6c7e59ef486cf00c7717d483cdd0a",
"version.json": "e99042ddaa61e033835fd4222caab906"
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

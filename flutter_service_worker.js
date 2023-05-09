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
".git/index": "b8e344c2e3b9b89ed00d8a0d63ebc3c9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9ac39f2a24bd2eff9b4eba74eb00b326",
".git/logs/refs/heads/main": "fd989d9f45adf5eb157332a2fe912344",
".git/logs/refs/remotes/b2b/main": "ee9ae5511462f7b538f4b93a887e5ec1",
".git/objects/02/2e5264807849d98cf5baf2b558d5c65ee70a52": "29a2f0a23c1abcd36710d87913ab08a8",
".git/objects/02/bd2b7c2e33f654639eaa6ab529d08c0e00cfd2": "e5d80419d2e94970b2e4e5683bf8547f",
".git/objects/04/01bcd3e960df67b0124ad820b373e1f549923c": "1cfe4645f9e8b4aea7be5c9e6bdf592e",
".git/objects/04/449a52213ac854280c0bb6d9168dcd6f8d50d7": "4b2880c1314fbb69fdc87e56225f2262",
".git/objects/06/5cbfccddafddfa1be41f8f23223906a5ba0732": "12f23033e7d0a18756bfd8e4fb26fdc1",
".git/objects/06/5f1b676ca185f8799fc7ae11ccf9f9339e9adf": "53325ced74a4ac58e72839c4b5d0784f",
".git/objects/06/b2e57ec80faf9c3aa09c86249279461b3d5e63": "ea2b499baf314f3b39c6e6071c449e5d",
".git/objects/07/5aaf8e34448155e90a1274ffb9aaaf0ee9c3ac": "6c1fac44a7d5dfeffe467ef8d22e46b6",
".git/objects/07/6ec15ea63b64f724ce2ae43f1e0aac1d401be9": "2125ddf3192c84ca7e85c30d1c4786d0",
".git/objects/08/d3b25d9af275ac2512b5841503321224347a30": "4662d7b7e2d8c27a2c05762efd1a2ae5",
".git/objects/09/9378654c9efb2cd074ef4461868a4f4a8e44b4": "3843969666dbaa8bfde6a172d4e23a5b",
".git/objects/0a/31f23f38426bb95becfca5ae3694be21ac9702": "0459a53abdabd074dcc4b66965523f74",
".git/objects/0b/825ed59f8ad92fb52353ec697d47b48598efbc": "c02130431f2fa5bc7cb798d1d4eb7230",
".git/objects/0d/73095a84f74eca6c81d8483cef6bc92784edc5": "e75d1493a12455677d9118379acc5886",
".git/objects/12/e72699fd02769f97f80faeb38fe651dfe78e87": "6e8c2fb24477039079df86abf6dda81f",
".git/objects/12/ff69fb81f26bf44d988df3ab5544f72d9966b7": "fcff95c85368c582140e5ec969f16e36",
".git/objects/15/aeb98048c566d479f23a249a46d8507b654243": "dd51ecb08a89c94135c93d08463cb56b",
".git/objects/16/6f483554ad50cba687e101529f5cc4cbf41b8b": "2e2a8812c722956ef46f265b932b2b44",
".git/objects/17/c013f4bfdf49dea06625745e8a6c8ac23e0fb2": "9bd2088c0b4e63a9182e3c2a7902812e",
".git/objects/17/d316b8faa0efb432b02fee146953219a7e6283": "93d341205028a93625d085154d5776c2",
".git/objects/18/fad437fef9d5780f8d91aff5e9199331883119": "34ef804b0bb9aeafaf76a1bbaa71b378",
".git/objects/1a/2ab364d705bc100bfdcf2dbe02a2de23c437dd": "13bb59bdc65fd8037b3f1506b34527d5",
".git/objects/1a/7425102fcfc07657301f12b702ccdeb3a1f0c5": "42488f7fb15ac04200678006ca95f4e4",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1c/99b9a7b946481f998b7210f4484e404e027489": "ad2cfac1cc949abcf58bef4ac0d24ac3",
".git/objects/1f/23a67d93fb6f539d1fa6eeeb681ea2a4fef817": "54fa6878f8ca5a71dd2cc97037e26007",
".git/objects/1f/c1406353f227585851ad0c025f487a01ffbe78": "e7e9b07925f9f1c48ea523ea03468233",
".git/objects/1f/c2a5ef0b7053d401c59b840e60e2a90a4091da": "b572e6f991bccaa75fc1555c389d164c",
".git/objects/21/dac162fcd48bc0e7b9fa60017c0d0317c425c6": "83f484f7b99f1b1069a41e0e72008172",
".git/objects/22/61ee9014da5119f312244f4717ac027b43328d": "a438d003801beee7f7503c7455a09ed3",
".git/objects/22/6938c2db11c6150944dc7afae2c78d94204ce0": "ad1fe7eac663561d1879773de7dd0037",
".git/objects/22/95b2e2646972593bec0ab7049829ae0553147e": "d6dc1a0682617872327911d26872f08a",
".git/objects/27/647321c6d50571fb388c847d82092988917c8c": "60d8305415f05e5f69b86c31f91afea9",
".git/objects/28/81d2c036d3e28003aad9c9f8adc34e40c11d98": "b64b26e14513b7280f7b9b0ad880f30d",
".git/objects/28/dbb93b4c9c0fb7064237a04c4cb28c7ce69aa8": "4ba5e44ca4b76a7b976fd96ef3ad1955",
".git/objects/28/f276dd80e9b3bc7705cf689b08446d15c98a6d": "991f7649c0dab159cbf92cbfb3633f19",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/9152f47612d19ae245f28f25e08f9f958da144": "e986f974de0c92ced6566c66f8c9c9df",
".git/objects/2c/160f783876b918dd316f3f56aa284b1ba3150c": "0774db34d958fb66419ec3020c2ba5a9",
".git/objects/2e/6a5b2743b651fe08029447e225c63c3c3fea98": "d18cac68e9baf094bbf6f3881cda8318",
".git/objects/2f/4dfd965f2982d6cb4332456e4301670cb40e8c": "b2d4e82269e2acabcea32c492df60aec",
".git/objects/2f/8abb5c97340a9becffb509780c8018c513cba5": "96d62a13cc7576af4a933ca469b7963b",
".git/objects/31/6b75078f46f559d6b491944702367948e2258f": "4b9cb78b7670a7df2b71b8fc906013e9",
".git/objects/32/301fadb1b2ff16e26da70022582fc009016225": "6af72565bd18c3d36d36d81b615f8799",
".git/objects/34/025c613ebe83699947679d883a9f51bd2fea7d": "f8b76fe35c4d332096699c33322f3899",
".git/objects/36/5f78e43ed4428c068d20f9974467d1ba6f86a0": "d32edc2bbedb48e0efce186298548e08",
".git/objects/36/b798693d3ae80ff64a74d7970b9cfa96329623": "ac62d37fcf6cc6c842f1a38678759a7e",
".git/objects/36/fd477ef519f2942890f453fc81bda9f063d346": "0b04b81af1468094df45b340b283d96b",
".git/objects/37/9e9d707011accc58c9cd48c07d90d41a561d67": "077325020dd7c6c0ea15a86e4a778bd2",
".git/objects/3a/3d41cb612710ddc14c730c44c85c6ce50d5ee0": "98b69854422d40afb7f29691293ad450",
".git/objects/3a/675d996cf810b5c76c9c52b618d60392e6f761": "52b1b32ca13062ec096e18cc56f76515",
".git/objects/3b/43bec7dc6bf77dfd1f37897d1340e5f5ee303d": "0eef993b6360a67d2403ed3b7cf11be2",
".git/objects/3b/cfd309e8c8f48918544fa73bdc3b4ea7287d32": "b4b05dbaa822e488f106a1e4e051308f",
".git/objects/3c/d2bff996ce5cb6eb19764845b1d6909e70b99f": "4e32e3366518e6444a20903db3ba8fec",
".git/objects/3f/24fb23dc6e93f67a1cb9f8e51fcde59a41ac0b": "28f6ca1ed52355a0b13d91838c05ec59",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/43/cb036b290e22320ebd2bf59484bea6e6302e35": "ad131051bc1a9fb0a187a018c814ec5d",
".git/objects/45/2fac703641005656ca7f77bf8b9dcc778eb914": "4920bf3bc4688db022c6f35a75287dd4",
".git/objects/45/6b6302535a1525b9423cc896ca1217c3565765": "d28953b79bf182f54d5d9ba7f8ae854d",
".git/objects/47/3062d68d1700c4b1727bed0853a53ae216eceb": "ba4d0cfef3f3a2695824630d900ea14b",
".git/objects/49/39fcb1c820beb7cab96538c8eb57c8fd6778ec": "591a168d65636a178017a4e04f64a7f7",
".git/objects/4c/b9c68485718aa970495278356a5b75b19c6d66": "2e0b5e7f771136e6161f43cc32324c40",
".git/objects/4d/1132a2dae61bf8ded1f91bd4bfb3ad9dc91d91": "4bf4ec62b2e1cb273fbbb71bb59e4290",
".git/objects/4d/cde0ac54c5d81e9041b62eb66d9e6eda612629": "8cc517ed75ac6b33bf63f93eb4c21a0e",
".git/objects/4e/268bc07243778876909a73765133f65f8b1699": "1dad43232cc1ed220e4fe7baac2a351c",
".git/objects/4e/644330f035f3bffa70e5af70b9f026dbcdf485": "42ad6aab9c472161a7d6775821ec6642",
".git/objects/50/85a8e4f1aa0c378c9badd48aadf9a29b28fef9": "74b5824f9805e4f8aaabf08ab17a6ed6",
".git/objects/50/89aa52eb2b921d2b7ad11dad01651b802edd3e": "e0f8b0d7ceb3c593f5dc100d6304aa9b",
".git/objects/52/c180a85ced52d8fcb13d6a3e40b2cba4d47f2b": "a951b36fff59ddf2fd9a7dc7ee40384d",
".git/objects/53/08de7a6db049f57c9ab70ae71d42729b3bc047": "15bee3e76bd91064b67c70f84b414fc8",
".git/objects/53/23eb31bd29431d5b347967609d4f6242dca1fb": "213e96760d602a14176cd67351e0e1bd",
".git/objects/54/1f184e1109183fa4187a8c6c2f2f9001894b0a": "69313ae17e9bc3001e07876932ae0982",
".git/objects/54/b0dd037e45a49f304ed47db83d9dd4caa80d44": "ad052620776296bed0d7e63f60283c7d",
".git/objects/55/71cf1fc65a9c5c6f16f6a7bfebd059b3fd7624": "8f9b47dde57728d9e68d5d23254febdb",
".git/objects/59/a254da8210402560cfeabd11745237237c8de1": "b4a31aa591acc2e0c41aef309d954f6e",
".git/objects/5a/4d8416441b233700ac93f7748d81b43af537ef": "0e9e9160db9bad1482ac5a89e75a2ab3",
".git/objects/5a/7a0b5f01d35dc148d993b2a1d25f6f06db2fb0": "8d7a6b82af41bfe937718310f3f01468",
".git/objects/5b/1c467f59a05f47651e56b7e253ff20b62abb64": "5f3b32cb4095d2c525a4a575855d89af",
".git/objects/5d/0a48b7e857d46e41d5e97c8034bb06567870c6": "da716920de5c2bd7fbae2c608a9ee6dd",
".git/objects/5d/19fc9da1ab59e986535fef242e15947d9856ff": "0f3955165be43480a76e6984c4e600d7",
".git/objects/5e/450b135989b66ad86e54d9abe3d1999f559f7e": "661e27cba518604cac7dd3c4f3a91dc4",
".git/objects/5e/64d7de075604808bef841bd94fdad4e50334a6": "27618273ed36ba91c7a619e60e5d3f23",
".git/objects/5e/8633fc7fac6db246561bf3c646e61af47e9384": "aa7b09069cfc014d50a31d1501d04791",
".git/objects/60/135276638fbdaa09ed742dcc02f2aaab9d96a0": "f752b9d6cb360d179fc2cb3f898e0edc",
".git/objects/60/19dc826d86c6d70b33cd3536cb61c9cec41128": "0685e300bed38cfacf6e64e01ac3c166",
".git/objects/60/a42a031cabd3e10ecc9743e5c1347466d08a31": "b1f324b0fea8f757be87cb96a84e7146",
".git/objects/60/c46291eaebc7496e7fbda93ebc535308fce9ca": "fb73152039ea71ea200475f4a3fdc71a",
".git/objects/61/4f96dcac2d8268259896d19af9e3730092eaf8": "cf23f3ffc8d3b175949f69d194fdd730",
".git/objects/61/8dc7e4e9f4183bb1feabaced85a8c54ba92f8e": "54a3e8e9f1e35dbc126cbb4e9c76e4f7",
".git/objects/64/50cfbba70106b4104a0b8874dd9409e229b5c2": "428d1cbb7f63ac1c7b5cc1604723f775",
".git/objects/64/5120121d0e3505a6d57062d8378af9b7213cff": "6725a8e70ec926b35d1ba3346714bf5a",
".git/objects/64/6083fa8075fa854eac4a3f7c5b4ad6155a57ff": "7ecdfc5c1973c405cad0e08c9139d0b5",
".git/objects/66/67ac8f0d74b7b0b5955be8fe98cf1841903984": "8fb8ae521a3f072e8d92df7432c69387",
".git/objects/66/c5cf06a1e0f5db317494e87d044c2f3534fb3b": "517a314cf35721613b7dd8b3b80d18a9",
".git/objects/67/595b472b36c257221616b49b13ad53081b9006": "b760be4e2b4f6e2c7c58af4390f8c5f2",
".git/objects/67/995136431e05c4c4c44d86cc60ecc3d3495bc3": "d724ec77d9853b0aea40c734ab89611a",
".git/objects/67/c09b28b2398b5dd8299f37051b44b9aea3ab9e": "9ec0017654ee08fa5cfe6ef5db815b16",
".git/objects/68/1f4f7fffee460daf3324582f1a0332b60ef0ad": "f1a509a366a0582ce991671e041bf810",
".git/objects/6b/28ef62ac0f3461a3877acb13a557adad9056e9": "afd184d5726a03b40a377584b4210aea",
".git/objects/6b/6b4b265e81d8fcec33fcefb5bf916769fb5302": "46a22066570d9405c1585ff4fe943a28",
".git/objects/6c/53f63b23526953872a661fabb4041a38149f37": "0183dbec983a03aa8d5f9f3afa0b8261",
".git/objects/6c/b614f17600333cb1434b05ef8fa75c01df66e6": "5944c8cff3afb1bbd9b37f50af1ef1a0",
".git/objects/6c/f529cb82e2661b1f9f623c5cfc8cf77a452e56": "e79b949159914002ddae6ed52700f343",
".git/objects/6d/8238a4c5b5000e8fb27de3a2cd42d35cb9d27f": "f7d92603bb42b882ad38948646692773",
".git/objects/6d/bc5d3380778ab77e9bfc17d02ee1ba51afaef1": "8823e0f53e96476438ef4895f0532a29",
".git/objects/6d/fa1cb999c07caa435b01773273073ad256ca73": "89e418bc8731407d2094ccb9f215b168",
".git/objects/70/b58131490b2dff16c6a2baa7bcd054f37159a0": "5e96d3eebc99639f4776feb5c541f83c",
".git/objects/72/79727d4c27fae82575be2e2eb2f0e31816160e": "854ad1e681e081ec38fd16fa727925fd",
".git/objects/73/cfed8838a78fa35d1c4d7e701e4d91e9fb9060": "1efd2bd1e59e94f8a859e0184111eb38",
".git/objects/74/e3baecf1f0b1c15c25f7ef4b28e7c56b8fcfd4": "9953818f67be99accb7b0697170c7f8e",
".git/objects/76/65c777536bf76d7595e590667fd068c50e8083": "2165bfac4b30de5b54196dd36f3727d3",
".git/objects/77/8a98c1bd6e667daeab332940c948eb41a16b71": "5b6575c241b51067d3e5b765d98ec654",
".git/objects/77/b0dc9960f5bc1e05405aa30c0fc7ec54a0e177": "06969a7b71ea49eb15b042242bd830b7",
".git/objects/77/ffcb9dea27acca78f20f4dd9b41f8980ab4cf5": "8438003b46cf5e8def07f69464e9992d",
".git/objects/78/ae49e2c088b414b94886a9c0c3b3b5fefc7156": "56082c2848f41f45216a2129c5dfdafe",
".git/objects/79/81fe5f9c4142dd8bead8a978aa57b65211aaa6": "cae892338870cb501a9936a4740e56b6",
".git/objects/79/974e236aa46d573f6ea08568b4f3a709527ba6": "8bfed74d6a13b3c5b5a2cdf630654043",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/0af2eaa5d18ea26d53cbc994049a6dc2a40980": "aee3e11b76200a5ee2d86b4099a61116",
".git/objects/7b/64f43651119044573345cebc447eaffe87c05c": "8a247d86ffb2d862dd2d0a0fbe79e65b",
".git/objects/7b/de2573eb5ba669b2df8852ad795777025ed524": "97f6e86cadb52ff4f5148cc45a86f83a",
".git/objects/7c/02f462f30f4940bc194f2a582decc102e60d1f": "0d2eb877da32fdc44241d77ac0df0f8e",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/7fb9ccee1e3a785ab16bf015692ce398be44cd": "1ac40ed0c956563652a46950cfa85e7e",
".git/objects/7d/979674fa4a7cc66d5ab9df9657dc1997bd2ed8": "ed4012a7274d6a88ab832e7a59c0e59d",
".git/objects/7d/d9050edc45ad0f25b90a6b5157e93011f0f228": "2d119356154f97bdb44ac777c19db198",
".git/objects/81/ac926c7d352551ab117def116ff525b1e2b51a": "40700a3cef04353066fe428294a3adbd",
".git/objects/82/a2ad72f4a905af16ecac87de0f4fa77a88ff26": "c81756256fa8ac2b8e8c0b890e44a135",
".git/objects/83/094dac739151bf95ed4639942c95113246366b": "104b3e9ab5a56970cfcbdf94c42f8bd5",
".git/objects/83/13f38a1fd034643169169414ee54b0dbb97148": "e24724c63fa9e3e049c77307698192e2",
".git/objects/83/f268cb91ae065f47f68cdabcef6b9b3402022d": "cf586f6a4971d267b03c3e0bce7b11a1",
".git/objects/84/aead7b5a15e932d168fe3e794fbac8a4041af1": "adc234b049da8ec77672750fbc831069",
".git/objects/85/0d52fd8748d4cfb9600a20a9e25d6dfa0e0b7c": "45e72bb6e2970b0192618fa5c883dedb",
".git/objects/85/5e93ae4b8972130f17fff28dd0a41faa4fcb19": "df390626e6e34143365b15c5afd5d61e",
".git/objects/87/273678d5ddd2780752c4db374dd26a7d1f782b": "e2e933e8f72ff885c4b5cf650cfa0955",
".git/objects/87/930ea61d38173ffeb3e9ad0120e0ada72a8093": "cc89a2ad28d1f83bf27868cb01a76d68",
".git/objects/88/9ee2b737996167c1f5f10c420b6a05b257a6fb": "e68e7dbaa7f15a985bd89558c5cfa2f7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/7c0c1e13aac0b0141c4ef7fe27a8450ddeb6db": "04afcfdc6db58bc6305c6ed3091e39a9",
".git/objects/8a/3694c3ab9b6a2acb8f5dbfd18ccc495450c0e0": "9d95ee5a1510415e466415088d236dba",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/2bf8b8e1e33a92c07a536a7c753e85e3cfc9a2": "52de69562d7b64e4b5269d0ea5c22bb2",
".git/objects/90/05e43031018f1f31938d4200d83ffc19436857": "035a3ae46dfe61d4a64515e02f428421",
".git/objects/90/a84ac3d652e58ac50a08aa481b306bed28432b": "58d3beb85acd84e3ce1e37a030ea8950",
".git/objects/91/6442dd41458a8e0c90358dd49a20313830400b": "be6061434adf6eea3e6523142372f751",
".git/objects/91/98d9f771e0149bdb6799ba947c6d0d63221720": "c4b8a205b7b869818c691e76cf2305e2",
".git/objects/92/1c24fcf7dd86d408f3bf392b1dba902abab015": "6b73bfb895d407f46941b866877a9178",
".git/objects/92/336888d951f9ba867b1e7d48661ac2d7cc0491": "1ecf1062b4d0f610c981d8ae0ec5c40f",
".git/objects/92/37a834249c9714537b49bf44a7d1b2f51aac63": "2ccf074ba1c92f696873a2dd1d9be538",
".git/objects/93/eea2bc5504b8942a46fa0f69091d4cbabb4602": "ff88c7efccd1f3438a7f59c3c6bf6895",
".git/objects/95/c08dcc2560e13c01881c2e3b7237cb83a8aaea": "e74ae30bba7f41af0993edbdc5740b10",
".git/objects/95/df4b16d1b0feb4dbcc1f681e1a58c675b390ca": "ea29f0aac405f42c1d74858facbb21f6",
".git/objects/95/f8a153f03bbacb568be207ff01e5d47807470a": "e562c02f6d0abed072844d49cf34504d",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/98/03ef6d78e7b8d5e238c1a80d8dd5c3725a6e92": "1c7bdde3829a3d15371208bf989e0013",
".git/objects/98/12a055713659b65611255cc5b754978b79226b": "0dbeb6e5955ffdddcf88abeee1790074",
".git/objects/98/9ccdff4e3a0a5c526a3a936bbc2fa7ab0c77e2": "641895f732ba1ac537b3f02c00006b10",
".git/objects/98/ecc7adcb2bdbd64cd1e549c5b6ec1088584039": "7d244e9a4476e55cf45892ea485ba604",
".git/objects/99/9627cd025e9fe6af04ec9fc81d3ecc921d1a1f": "fe01733723658a8838e29ec5f47b8352",
".git/objects/9a/78c9edcdf352d98981460d30dd4f692ccaedf9": "2b3530c7b9f3ea8a7142f4f44337f988",
".git/objects/9c/4b39b03f8fe81fce651cec4821ab223635d3a9": "697e79dbb997a8759380475b269333c4",
".git/objects/9d/25854e82d92709284eaf4df2b369fa7b07f7c3": "2e3fc2af30123cc830650a9de2943e40",
".git/objects/9e/346f03ae650e60b5af759febd5e5a57666a82a": "3ae2cc17350aeab10b97a43ddd4efa39",
".git/objects/9e/9298b8f11654d912d85b98d60e7ef9ac937f02": "2f5bf11f9caa4b513a54a47fc8fa0ef9",
".git/objects/9e/99f35d347d9fda15c7ccaf2fbd631827f327a8": "d481cc844390f5de1c5e126ebabed3ec",
".git/objects/9e/f60d415d8f5043aa1d227ab671cf14aec59e77": "bd60508ea3ea2ef7b5dbf63c65ea50fd",
".git/objects/9f/63a91c4fa0eb4e2a939f01a0d77127a8fa1810": "e1938cddc625069d983c5991bbdc5d97",
".git/objects/9f/7cad65e5f97dbb4c2ec59296a027dfdc7d1b12": "04443e2cc4bb79a027a0a9df66823dc4",
".git/objects/9f/d04bcaa51cc32e6e6ef301a37726d92a232818": "dee07cc86055ccc574a5c1fde334412f",
".git/objects/a0/9b0b7db8c3da0c25f13ab67240369d37d2893a": "5b835f7484d02feccf3f97500175d1b6",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a1/0c225249ac10ce4b32405f0c57877446e8b6a2": "ac941b2a5c82529d921b0e3be69a4b28",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/ee3d6edee8c23eb09bd89d428ecd4d5faebb1a": "11900b806f601339da37965eaca6cc0d",
".git/objects/a9/7982163c9feb63e4c99a1905635b7da1adf440": "b44ce85040ffd5dd99351bf81a628f95",
".git/objects/aa/369d8d3d65942a2003dc1f2a64676d11fac16a": "2b6455cc61ae2ad95781b14c7afdc38c",
".git/objects/ab/5e4962bf982c4abc7e31b267df387a4be0347b": "5bc83bc659e17011a4c38097117b3d1e",
".git/objects/ab/b31d32a4b9237a456716caf72467252fef3fa3": "cd09bbba68b2127f324e0c3451eb9a06",
".git/objects/ad/f2be357ea6c7d99c36e6cab4e73853db393825": "d3f9d22fe2d330e025c3eaae4e646595",
".git/objects/ae/80ea4182488fb9c091cc3993230eb7e3bf4aa1": "fd72a19a2bf4718f448a85c08f853377",
".git/objects/b0/b7b567e4da492880486d93f868d41b39b6d2cc": "f4a83369513d2ee1ab90d0f8c04c2668",
".git/objects/b0/ba238ba0d69b36db77814a63a284004b1d5985": "f2ea29559b23960dd19b1dcfa7521cb1",
".git/objects/b1/679c4313f7889b83816d4185f92208d262be5f": "aacc5cf9d0867ad83936bc16ce642896",
".git/objects/b3/8e205119ff57cc1d2742eb33666002871f06c7": "d9e54a38b3c753aca9e86c3e9f41448a",
".git/objects/b3/eb0f7f12c3c16f18cfdcea01a0fe3777e16811": "8d510d2b751e3743f0bf5970f7fb8628",
".git/objects/b5/2ea7f467527162a73788b06f41b5729843b20a": "7c6d7e1c7a9defd5588a15656ad9fa00",
".git/objects/b6/51b1229654af811d991c8b1f226d79d82bb553": "a6ae21d8cb19d17c65b7a5688f105db2",
".git/objects/b6/863bf1567790713bd1c4e734038abc4ceaafd8": "a076cc2c412f6138d50b03c4340b0606",
".git/objects/b6/9cac5e56462fe5cf124801c43d8a5b2bdfc856": "0931ce2940373dc1c3c4ca7c97e9690b",
".git/objects/b6/aec4ee3060342c9a5a8dc48308885f146b5a4a": "7e640b9b23b0daf8b815acb2b982ab07",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/d0d0ddb1ecf6226e1feb99b2b028cdd44a28a5": "80e7f54f919785d44be6dd36f2da7214",
".git/objects/b8/4cb9a7d2ab3a9ae8fcfd6305041c6eb8976cb6": "969272de175d530e84d2ca1b98d06ed1",
".git/objects/b8/db259fab29334a50545ca0648618922e3168df": "240d3a047605d62a45d3d2a546163c49",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/8999841a9058c69b1e577c77fec96549efcae7": "86b12a180ae6a0913f0b9b85cedeb03a",
".git/objects/bc/28441d131bdf189fa14e340e2cbc5979a059e3": "21fdf1bf3e023d8dbe9330e67a43807b",
".git/objects/bd/151ad3042f57df310f6dca178cd9a7921cf019": "0952d085af10f5f026ec58cbef3a2fe2",
".git/objects/bd/7be9888c6226531b0e60238e8582f82146f18d": "232f229fe747e644c23330c831bbdea6",
".git/objects/bd/cf8f9adb64ad6dd405ff9eb3454ff01d711565": "a85e42a5a30946da46491d0932249373",
".git/objects/be/85db57d2cd0699db2c33e941b605b6c294a4dc": "fbc5ab2ef2b6ddba8ed6713aff12b8e8",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/bf/72f61323bc3c53081d1a40a9dfdc3b835717b1": "e6376368770322e996c691652919c17c",
".git/objects/c1/20fdb51a1dddbc54c077be84beeb70d8285623": "f1f69234d460369df789fdb5e2511e8f",
".git/objects/c1/2227d82830cd362bf5ed36725da8c29f04b226": "f7b43808b72d8d70e3f154e264c351f8",
".git/objects/c4/556c1050ee59b9d70cb8916a73453d4d43886d": "523d1906d18e6b4a0015f0b0291ababb",
".git/objects/c4/764b2d9f75a43a134d70fab8471268d617cb23": "830adb27a20150381f8a17d580c2a3b2",
".git/objects/c4/cbd658635156395dd2b9d93b43da9d981f8c17": "e603d6e9f248584067120294058fc00b",
".git/objects/c5/542029258311c2eedf1cd2fa4db94f0edab43d": "b68304291a28aa264853e886847a4049",
".git/objects/c6/1d7d33ba0a0ec671934c60890f3f784232e06e": "793f5aa799dd6633eb307f24f6306be0",
".git/objects/c6/69c1a7791e02259f7a09286316ea2c06a9752a": "10eb3ec3babbf501aec23da45eebbb9c",
".git/objects/c6/73b049e05b9858bcfb424db118fccf2c2926a9": "9459abb312e07dc45fac24a67b223756",
".git/objects/c7/909393913af66d833b6d2fdc0de2a7bff4c048": "672758dccbd08243633eba8a8e8af0b5",
".git/objects/ca/ca272919a5065da6bcb51e9c9247070c74db17": "4a4645ea931a142d3d36b832ecd342f4",
".git/objects/cc/3ea9b63c28b84883ce65876ce0a7d8e0f49cd6": "82ae3bf92cb754706dba78454d30533e",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/68919eabfe7ecfa829581d4b4338b068a7fec2": "2bba11d520dfe4dcada9bbc4227fe9e2",
".git/objects/cc/713d9b4075543dfe6918b60b89ee21f18e6de4": "22ea8a9b6601bd9acbca67fbb7990f9c",
".git/objects/cc/f305e728a3fa6ffba6f0a6c05656c83d9db134": "6be4ee6323c2216129811a8fa805d0a1",
".git/objects/cd/154b6cc90d055faf4d0cb15f4dd617c96691fa": "c484f73a9612a3233d999110df9bdb06",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/a3b11375c0c186f9f5ca0d12d03291d9a28c31": "5dc9f4ec211a4393eba6a7002107021d",
".git/objects/cf/9ddbe5e8ee14b237de19a069b42fd838b11d1c": "4d1e79971623dd896bf926649c457036",
".git/objects/d1/cd939d52ced2d0f1ef62b1fe51c73da29e6cc4": "31487ff48f485f5403b495cbc058d7b1",
".git/objects/d1/ee62de39a9533fbdfeb2c1376ed7fca5c83bdb": "c1d4fcf545021b7c3a96267abd1aacac",
".git/objects/d2/e594e267198a8d1459abdf6b98fab50a94e586": "e78ad20cb3aa29e0214810d57a98c661",
".git/objects/d3/3b6a2efd1ab0f244a36b5e6ccd8cf3c8f4b8fd": "2b9be5fae183cbcf01ef7c6046eef98e",
".git/objects/d3/46a20ba1ad77cc14ffff40dcc9624c16c1acee": "618484cfbc4ef60fccd2a39ee43eee6a",
".git/objects/d3/a7932be5da9335f2fd374aea1c240f8606f62d": "98773453a4c9cf840fac59253743e718",
".git/objects/d3/ea80d4898383c7553ce78e76738cd944f251c0": "b9a575e6a8d21736a5a95a1210dd89a4",
".git/objects/d3/f4611c9b886b71803e4059e7ff99180a567ac7": "e8b0aab98dc63436288660a3da04641e",
".git/objects/d4/d76f9f2bba4d0eb282f4183383bd0ce95073f7": "e3f07b316871dbf694e06909b8bc7ccd",
".git/objects/d5/126012d5dfd9d8800e9fdecd0d7e533cfbcb12": "ef40e7aab578f694d38d0e9d6905d13c",
".git/objects/d5/f00843f42a935c23122ea6c05b1093bc27d377": "6124bf9d8d86d1264691daeadc27c25c",
".git/objects/d6/85510874af238852c0c9fec81b9c5b0f870fce": "ae2fde46017d827b97ba52ebae2b75b9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/2d9f82a2f57d0c2517c80339dc272163fe8c49": "c6483c2fdb4f232625ce1519aeeac773",
".git/objects/da/e5db38ec8466e62e263a733248d5db1f8bbb1f": "d45a49affc892a461175057a873c2018",
".git/objects/db/8c3461b4577798b34b26dbff09ad015e401fd8": "f6af3e7a8dc13ccfebecd309dabefc77",
".git/objects/dc/1507dcbbb3d140fdf490571fccc83952797be8": "f8f671388aa9ccfa410c8a706fa7be62",
".git/objects/dd/5edb1a7e46855a8138b7028913a7aed7e07a26": "15779bbfbf84adb4b688dcd6964caa7f",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/e0e8e5c51f3c1d4f55024440527ca853221072": "a050b7046b913a8e38d9a94b51cff759",
".git/objects/df/2c02b8ae04397625c29663b310ef3211f02884": "f6f46fe7d276c100d5554d9e3049a3a6",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/90d4477bfbbe550677b5dc42515f1fb575caa3": "e643c0aa2ae2f27c080e6b610db3a4ee",
".git/objects/e2/3d76f2a23dabfc370d8dab31998e0e5492a15a": "64fbc522e7ae704a7c74577b80782f72",
".git/objects/e2/e1614b7566f2d307bae09d839766c0e43c7360": "80da9ebe99a3a8b608104c9f5e3bb95b",
".git/objects/e4/1852cc28385b8206179d40ce48ff48efc4cf8f": "24c80bf8ee188202fe22fbb26177bab6",
".git/objects/e4/b6424cd6d44a22f5a6a1c704f0e75478495bc6": "b41bd88302aa7821fcc837ef0b3fe36e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/91b9c6d07596fd3dba80cd40cd0effcc462bc8": "b7bd082218ce764ffacf11f2cdb6d292",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e8/788b7a3a29512a5dc1d713ddea756edc543e1b": "56d4fe77b0ad38fea9b13c3694db5c06",
".git/objects/ea/3cfbcf4a9a7ad4fd3fba78185fc377cc7cac6c": "fd3ea34880ca902691d6cfec677c306f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/11a54d13e25c64f1f48346771e1a76ffafe6b5": "898075c40b5144b7427978467f5cce07",
".git/objects/ee/3df04d16e1aad3795675444cbee5e5c6d5a29b": "166c0eabd8cb2631c75794f856f97ed3",
".git/objects/ee/acd052489fe554f5834fac25b38c7dffffe879": "2e7e172358a355d1cee9b0ecb1a7904d",
".git/objects/ee/c462087be26d6557d841e7595aa622110896ce": "a1793d19434922f8d08621fd7c6fea6e",
".git/objects/ee/cffcdbbe966e017811defc388da620ab333143": "de9f32486357d643d55cb16b2e0924e7",
".git/objects/ee/d22f170c5f17f254c21576cafbdd910348fa18": "7ce14ab7e4d7f39ff659c6f3d012017d",
".git/objects/ee/f73a3325de8924da78cabc6bdc7b6912f602eb": "5bb61ef41ed826546a8f9513b60b1db4",
".git/objects/ef/daabc33a1b8c4e56831aafcc0a6c4180e8177e": "e0afb62b71b9d322ca9d88f78202e0c6",
".git/objects/f1/854aeff6388fd35df5ac068dc28392931d4f9e": "88a30c033945d942a9ec943e77864045",
".git/objects/f2/173b3d08ba13bba9b857213c5e3533821d0875": "6cc009484c42c0b2ee7439cf4358fc30",
".git/objects/f5/4d4a053ae3a990e87693efdc04ecbaf19d71e0": "b22c77f68ba8dd157b8f7b480d2ad0ca",
".git/objects/f6/1ee4f3f215833e44a3294b08bb7b452816838c": "903bed194a0a0282e8a1c8ae737ac931",
".git/objects/f6/d76269ad6ab87508fef675b18218d52e520780": "06ce08e854aac7212ac3dfd52d8b1f10",
".git/objects/f6/fffdea1af6006415312c4edccdea2a975d6aa9": "168b31d719d847141405ad055f250107",
".git/objects/f7/441873cdc4f74558aad6bdb1e5d8999b8f3af9": "f7c26fbf8156b49833dc8411661884be",
".git/objects/f7/4c8e79e48d1ca7add82b697851c8cd3a757051": "beba5a464f895f36660ce252dd92aae1",
".git/objects/f7/a1259d9f369d1643c0fe7f105b8db2901f03e0": "14b3cdfe3765e2b3b79578c3e8adf6b2",
".git/objects/f7/c3633324d7f5d5678f03668857d692bd83f258": "b0677b0bdf1ffa2cd9d68b85b7c6e381",
".git/objects/f8/3e37516f8f39edfc168a50bec914812dd4a69d": "5f3ddda0fa4542215e872bb887f34f41",
".git/objects/fa/f35eaa4d23180c75d8fbfdd122ce43365aeba4": "41b5297f137aac33a15cc0f2966b58aa",
".git/objects/fc/ba5acc51bb854f58da16ddacd00948adec1fdf": "888f2c2f52d66eb00ac0c965ad73bd7e",
".git/objects/fc/f4b141b9bfafa4d2c17ddafa136a523f05362d": "f7c74aa08f3944ab4f9b79b0fc6bd8ba",
".git/objects/fd/50d45419eb51005df934c9f6ae7e6309fa6d83": "e0ae5e282464be0f5977d97a26b39be5",
".git/objects/ff/1bcfe9766604b74efcf5e8209cb2e09d9c587a": "9cf9cf7f43ef6d786bdd7c08a4281854",
".git/objects/ff/724c8f50d828d334899ad2ed482b2f83645ae6": "1059a9d3b4c63e82d4bec6d531a85de7",
".git/objects/ff/d4105eb871f5a7b51b621b014db8a4eaefa7fc": "47df8ba74ea2f4e842bf29fbcff2a631",
".git/objects/ff/f01fadcb1630098b8a041c86be6b52d7d7629d": "bd588af0a526d71ec07ced0c4a9c0331",
".git/refs/heads/main": "875dbacac03d301f8905116c72e2c611",
".git/refs/remotes/b2b/main": "875dbacac03d301f8905116c72e2c611",
"assets/AssetManifest.json": "0003ad89267ba7b224692c1f6f436862",
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
"assets/assets/Svg/Downlod-icon.svg": "b6032d7b5c8e8dc4141ef6d67492938e",
"assets/assets/Svg/image%25209.svg": "d862e7cf533c463e34d33b108c9e81be",
"assets/assets/website/index.html": "267108b27a6d702b8822847d3a7e2386",
"/": "b4d842bd77779f4313592377c92d0d79",
"assets/assets/website/script.js": "0769e73c3db8bfb657d9a8cbc25b17be",
"assets/assets/website/style.css": "73efffd30e4db5151e8eed10ae9bf3ae",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "8f928e959e7ece3ecf5c3cb1565d0eac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "dd74f11e425603c7adb66100f161b2a5",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"b2b-favicon-removebg-preview.png": "fe76fd4092e6eb082099686244bbb935",
"b2b-favicon.png": "3852958cc2ae6eb67e959b6f2a245b7b",
"btif-sale-logo%202.png": "0949bd4b4750ca31b7025f1097a12b39",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/b2b-favicon-removebg-preview.png": "fe76fd4092e6eb082099686244bbb935",
"icons/b2b-favicon.png": "3852958cc2ae6eb67e959b6f2a245b7b",
"icons/BeautyFashionLogo.png": "67d097ffb43af9e71e40e3fe304cdeab",
"icons/btif-sale-logo%202.png": "0949bd4b4750ca31b7025f1097a12b39",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b4d842bd77779f4313592377c92d0d79",
"main.dart.js": "63309cbe86f82ec18698166aaf9c41c1",
"manifest.json": "d193ec07f05cbebd0e03fedee103b1d4",
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

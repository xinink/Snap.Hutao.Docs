if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let r={};const t=e=>a(e,d),f={module:{uri:d},exports:r,require:t};s[d]=Promise.all(c.map((e=>f[e]||t(e)))).then((e=>(i(...e),r)))}}define(["./workbox-33d91895"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-a24c0f04.js",revision:"21149cf4625fbfe8290206275bfffdc9"},{url:"assets/404.html-cc4520a7.js",revision:"603894850918e0d0424fa87be67b1b21"},{url:"assets/achievements.html-43d5b625.js",revision:"8761aa4b06ba8e12df6fd0bf5a8146b6"},{url:"assets/achievements.html-48ffc151.js",revision:"13a76d7e8cfcf1bd939c185ee15085f9"},{url:"assets/achievements.html-916a8019.js",revision:"78bd8f467dc525bfb152bf6c1f0afafd"},{url:"assets/achievements.html-a6a0de9a.js",revision:"75eab6790f6d5e7f011445af2520df05"},{url:"assets/app-5f037d70.js",revision:"7cbd772d4e44603db31217e8c0d7fd5c"},{url:"assets/bug-report.html-310cbc3b.js",revision:"0b90cc93185ccd747c1d04a2ccf8210e"},{url:"assets/bug-report.html-66ab749d.js",revision:"b1a4b12f5770b1440d231f368ca70e18"},{url:"assets/bug-report.html-84fe1704.js",revision:"cdc39d1ae597168004ffecbec46ca1aa"},{url:"assets/bug-report.html-f1593c75.js",revision:"d3393c022ac04da225e39c8189c2f702"},{url:"assets/character-data.html-42720767.js",revision:"26bb97d023b8bf081334042267a35385"},{url:"assets/character-data.html-6e778948.js",revision:"6e7c43d0df03e2a42421f8020402d841"},{url:"assets/character-data.html-8a78117e.js",revision:"f3941634724fcc4938079fa9c55a2b01"},{url:"assets/character-data.html-ffd1c9a1.js",revision:"d674e0294b00259224b540bab170ad4b"},{url:"assets/character-wiki.html-1b9db7c1.js",revision:"c254c0d48e5fcdac79185e870835dbf0"},{url:"assets/character-wiki.html-7a8d95f4.js",revision:"7e87761ae0a8233c3f0269ee5dc345da"},{url:"assets/character-wiki.html-8204aa78.js",revision:"65e6538e61dd9efa9799c4fb57b85e7c"},{url:"assets/character-wiki.html-90b9eedb.js",revision:"8dfc2f275cfe6ccfc8159cc3ffbdb9bd"},{url:"assets/community.html-6532b1b5.js",revision:"4cf7daf2b2c4ecf83eb759ffef7f55e4"},{url:"assets/community.html-6540718d.js",revision:"92e0a4559cf969a2acf616b6cb10536b"},{url:"assets/community.html-84f8e709.js",revision:"044388d4b7b8152ac5df304c080d0cc7"},{url:"assets/community.html-f8bc6215.js",revision:"1cc0d886bc7215b0fb5bccbe0128639d"},{url:"assets/component-69b78553.js",revision:"2e28411775082295ca602ec53bc3e861"},{url:"assets/contribute.html-3cbfd48c.js",revision:"cfab4754765b88567c7045afb3b93539"},{url:"assets/contribute.html-64ac2d95.js",revision:"204b515728553ce1d712a01e2c249605"},{url:"assets/contribute.html-7f946320.js",revision:"18599b25749263485f64f72421a43ddf"},{url:"assets/contribute.html-d891f64a.js",revision:"230b3598c8b53ab1e3948efa2243500f"},{url:"assets/dashboard.html-06f29937.js",revision:"84847d4c76432a90b74304d3ff3590f8"},{url:"assets/dashboard.html-50b728ce.js",revision:"4f61da7b47cc877825b939ca85ef9c21"},{url:"assets/dashboard.html-de43d08c.js",revision:"196a6ca2646b2292ace1ae77cee8b4d0"},{url:"assets/dashboard.html-f2e19a3c.js",revision:"6ef11b7039c251a012cdbaf5d8ca6937"},{url:"assets/dependency.html-4f730826.js",revision:"b43ccdc1e69aef31a0e221e3026a4809"},{url:"assets/dependency.html-6aa2a973.js",revision:"e669ebecaa985c9836b7cbbe1a3b7efa"},{url:"assets/dependency.html-8580a695.js",revision:"43a79baab5bcb5e411e8943a81811879"},{url:"assets/dependency.html-cb812315.js",revision:"e8577918470c24e6896599ffc443359e"},{url:"assets/develop-plan.html-0fe64aa7.js",revision:"774efd64342bcc81f61a27b4b23b192f"},{url:"assets/develop-plan.html-4cd8de09.js",revision:"0ea5475c971b1fa3c7eac3c95d82c901"},{url:"assets/develop-plan.html-4f454998.js",revision:"937f86d5866ab2dcee1382549f648b68"},{url:"assets/develop-plan.html-72b138aa.js",revision:"9070fb1ed188e5fa1c8efa2619e90818"},{url:"assets/docsearch-1d421ddb.js",revision:"582ce23a3b7a09735ae2e462904b2e3a"},{url:"assets/exceptions.html-5c42d340.js",revision:"1933f7d59917a1dca079b84cb41e67e5"},{url:"assets/exceptions.html-7d9e8827.js",revision:"c2b53dc7e98d450679a8bf0f569ef7a1"},{url:"assets/exceptions.html-a05a1b2d.js",revision:"968828e74ee284108dd0e46d80800d01"},{url:"assets/exceptions.html-c6af1565.js",revision:"127288dcf812439bd07635e2ad78a0eb"},{url:"assets/FAQ.html-243f1b6c.js",revision:"c463e5b28cdbc053ad05786b1f2f6603"},{url:"assets/FAQ.html-58ca3047.js",revision:"dee0c9854d3a79e051cc52f64d85107c"},{url:"assets/FAQ.html-7315c41c.js",revision:"256bc830c78d798d0e19060d4a1bc0c8"},{url:"assets/FAQ.html-83d69344.js",revision:"06e81bad2e5a25e20efd947e46a01dca"},{url:"assets/Gacha-system-and-export-principal.html-015af494.js",revision:"ce641ab3fb44cf7d3c118e52e2e9e4b7"},{url:"assets/Gacha-system-and-export-principal.html-1f6e4314.js",revision:"d020094478b60ed5f2daa8103b675c8a"},{url:"assets/Gacha-system-and-export-principal.html-81906cdb.js",revision:"c294c2c93b1030af939992f5cac028c5"},{url:"assets/Gacha-system-and-export-principal.html-d66985b2.js",revision:"d020094478b60ed5f2daa8103b675c8a"},{url:"assets/game-launcher.html-125485d9.js",revision:"bcafa71cc71a5fcebfb875a4491e94a8"},{url:"assets/game-launcher.html-48fbcd0a.js",revision:"faa3250409d30ba684322ed2a33905f5"},{url:"assets/game-launcher.html-bbaa8a3b.js",revision:"c7706ba704e184828516d14b397f693a"},{url:"assets/game-launcher.html-eb77933d.js",revision:"7d77a77239627abd4ad4ba091cf6bf8c"},{url:"assets/get-stoken-cookie-from-the-third-party.html-68d90101.js",revision:"f73ebc6f71501f57eecc60efd9c81139"},{url:"assets/get-stoken-cookie-from-the-third-party.html-698c6b8e.js",revision:"48059663f453f004ae4149f5c79744bb"},{url:"assets/get-stoken-cookie-from-the-third-party.html-75f986b3.js",revision:"dc026647681da97901bf0668ea77dd31"},{url:"assets/get-stoken-cookie-from-the-third-party.html-b83f1b87.js",revision:"bf13438e6c316d2b4a0e767974e1d5c0"},{url:"assets/hutao-API.html-1c4f3d4a.js",revision:"d5ac12760cc621e47c768b3d9a133b4b"},{url:"assets/hutao-API.html-4088b7a3.js",revision:"6205c4f437dc582fe620a9bbed791e31"},{url:"assets/hutao-API.html-ad2567e6.js",revision:"1a217b0c46e50a33b102e90abfa538bc"},{url:"assets/hutao-API.html-c450cbe0.js",revision:"ab57dba63ac53e3e1a265e0df685f731"},{url:"assets/hutao-settings.html-280e1afc.js",revision:"cb5fe502c022604c20df1164c9cb854c"},{url:"assets/hutao-settings.html-72e1a0f6.js",revision:"5a49038d6e41a095c6a58534b035b254"},{url:"assets/hutao-settings.html-7edbdfb9.js",revision:"d554318474afabd490e703afbf970937"},{url:"assets/hutao-settings.html-bea74162.js",revision:"19a971f5d8e78c8ca5efa212e1e9e851"},{url:"assets/i18n.html-10933388.js",revision:"c4b1d2626298dff9d345783c66c1b9a8"},{url:"assets/i18n.html-622188cd.js",revision:"561730601b2bef0e4d6867552c6f192b"},{url:"assets/i18n.html-7b5e2093.js",revision:"c9ba71582660bab9e6dc6b7f6daff616"},{url:"assets/i18n.html-f972be08.js",revision:"baa9fa66b31c0976d12bc702842da205"},{url:"assets/index-82585c84.js",revision:"938526a93de840eecd804073030c5832"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-061d6dc0.js",revision:"b28f922d563cf64d86259330b9927a11"},{url:"assets/index.html-279f7857.js",revision:"30e9584503c92ac28b592451f4482133"},{url:"assets/index.html-27a468b6.js",revision:"8ab5534431937193edc9188a4e4bfe95"},{url:"assets/index.html-3216a9e5.js",revision:"eaf3b1d621d6705eb2c3476f8159906c"},{url:"assets/index.html-34322aa0.js",revision:"b2b338cbdf1ec4b17e4dd2aac76d93f6"},{url:"assets/index.html-49861eb0.js",revision:"a5fc6218cdee9b1e31d9718ab083bd86"},{url:"assets/index.html-5d96501a.js",revision:"8f7738574edb19d7ab84049987889b32"},{url:"assets/index.html-6913b6c2.js",revision:"3472044dc3e4d1ec7359aabd1c35ad31"},{url:"assets/index.html-6a43042e.js",revision:"77cf96b2c3c39b7a622a3d95997b13a0"},{url:"assets/index.html-7c27e2e3.js",revision:"55db8aa0e47a6f9f3c66d11f39f4b00c"},{url:"assets/index.html-81dd031d.js",revision:"fd8b9ba49115551d897d53bc6841ee7e"},{url:"assets/index.html-8616774c.js",revision:"edbefcde92c4e01f99fae9abdcfd403f"},{url:"assets/index.html-947e2238.js",revision:"d896dd240ff16005bd475786b8c4b389"},{url:"assets/index.html-97c7f3e9.js",revision:"2591bd34f702f822033dcf42122b3bd8"},{url:"assets/index.html-a228d087.js",revision:"f597a202ff25b04eb08d9f40b4ecb9c6"},{url:"assets/index.html-b0b98754.js",revision:"b03d0bbca3b18cae009f5b8deffbb761"},{url:"assets/index.html-ce254148.js",revision:"f4f322313fa70ab549b3d165ac5b1273"},{url:"assets/index.html-e0ab7158.js",revision:"57aa0f7e709a75d8ab2793c453e6dff3"},{url:"assets/index.html-ead0711a.js",revision:"de8de7dab77f3d8beb7480ed2831da3a"},{url:"assets/index.html-ebd7e97c.js",revision:"8d3222c4f4f2b3c31be77c26ad44ff46"},{url:"assets/index.html-f3203ced.js",revision:"4c2b03deda9ad37f253fe3737508bebf"},{url:"assets/index.html-fa1027d1.js",revision:"b95cbef9fc507ada45f3a4516d644b16"},{url:"assets/known-issue.html-353310f4.js",revision:"67ee4533cb4264ff960dead3eae34430"},{url:"assets/known-issue.html-ca343ddc.js",revision:"5c887afdd452f9281d609d9de03de7a7"},{url:"assets/known-issue.html-d0272cd8.js",revision:"afd024cff520cad35e8c87a686815f8c"},{url:"assets/known-issue.html-dcf2dda3.js",revision:"2477a2e8cec3fe145c1f586abdab2efe"},{url:"assets/menu.html-37a47978.js",revision:"91b7cf707098fb8026edcbe62c9f6322"},{url:"assets/menu.html-5e29ea11.js",revision:"43c77387eb0d9c82cc4f34720cac295e"},{url:"assets/menu.html-a06345b0.js",revision:"907ec8ab2eba57e0162a3f2c652d3c86"},{url:"assets/menu.html-fe789527.js",revision:"656f2f5d6503378d41fecdf1722e4d63"},{url:"assets/mhy-account-switch.html-bc1cb067.js",revision:"ff0824ae65f9a7b78b347b38f06f120e"},{url:"assets/mhy-account-switch.html-ca9beaf1.js",revision:"a7b9508fbf561048c43b568df3ecd41c"},{url:"assets/mhy-account-switch.html-db811865.js",revision:"cd64d7c7287848c2efae0443ba2db1f5"},{url:"assets/mhy-account-switch.html-f90aacbf.js",revision:"dd6077aa6281cc261dd442158a6a8d4f"},{url:"assets/monster-wiki.html-0846e448.js",revision:"641e8f6f10fb9c1074bc544394801bff"},{url:"assets/monster-wiki.html-33b29fc4.js",revision:"68190108ce7491ebe7ae2a51365e377e"},{url:"assets/monster-wiki.html-a4668d7a.js",revision:"7970433e2b9746f25307b2fa55a36772"},{url:"assets/monster-wiki.html-ed4ef353.js",revision:"16f8fda35bffa7a5ba4ba2c2f7c22cb7"},{url:"assets/photoswipe.esm-1464cdb9.js",revision:"3a72d9823ffa5943f03c5e884d0f66d8"},{url:"assets/platform.html-418ea75f.js",revision:"9e4491560afaf1f59865545a9e49b554"},{url:"assets/platform.html-5dee34cc.js",revision:"1709133704c2ac95244b4c903695e9f3"},{url:"assets/platform.html-a018603e.js",revision:"89a4ccb7922e5cb9670e02ecdd58b44f"},{url:"assets/platform.html-ec227b31.js",revision:"f4a3b4723af281c3c3146be834b362de"},{url:"assets/plugin-vue_export-helper-c27b6911.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/privacy-notice.html-4768dc63.js",revision:"3d7a945bb94f44eb8ac2800f960d294a"},{url:"assets/privacy-notice.html-69586390.js",revision:"ccbb4203331610ce1af193c2dd780239"},{url:"assets/privacy-notice.html-964ea2ff.js",revision:"e0139fdf3d437a6fde6f1ed50372e261"},{url:"assets/privacy-notice.html-e40ff099.js",revision:"a2760af798972147096754cf017bfad9"},{url:"assets/project.html-37b94413.js",revision:"49f6c7113ae8d682dcb90838534b4b59"},{url:"assets/project.html-6a6a1ceb.js",revision:"1800646addb0a0b8becfd8c50d170b75"},{url:"assets/project.html-747e49a9.js",revision:"05883fbc9b9430ba7fda560533b16457"},{url:"assets/project.html-9b08d186.js",revision:"8b7bd376d882e29ce9bd60798ba8b388"},{url:"assets/quick-start.html-25418c6c.js",revision:"ef5a1b3a57a0b0b03e3cb1d2eace83a4"},{url:"assets/quick-start.html-56412b4c.js",revision:"1da24b5833cdc2915de6acc1b1a8eb50"},{url:"assets/quick-start.html-81abe9d6.js",revision:"bb55b841d43eb1cd770e1a508aca5c30"},{url:"assets/quick-start.html-dab9eba3.js",revision:"d57e2e2fbfbbe1bc1b00db57d852ac70"},{url:"assets/real-time-notes.html-42fa37e7.js",revision:"8b78216f937b1bcab42706be284aef40"},{url:"assets/real-time-notes.html-6da9b42a.js",revision:"e65f142d514ee140637c5b27fef42581"},{url:"assets/real-time-notes.html-c4a6a5d8.js",revision:"41406e015b82cdf551b81bfd85a3f6f5"},{url:"assets/real-time-notes.html-fad93b58.js",revision:"18071d3a82642c2100ebac75d3c0cb5a"},{url:"assets/setup.html-829b4bbd.js",revision:"29faf34d3d34b295983b32617e7e13d7"},{url:"assets/setup.html-90d00586.js",revision:"ed822e6364ea361c52b84ccaf7093be4"},{url:"assets/setup.html-aafdb4bd.js",revision:"5a3cc25e8bb7cb44732a536df71a3700"},{url:"assets/setup.html-af40dc11.js",revision:"6f53b9f1930e2cac3d641fc5ec228489"},{url:"assets/side-load.html-0a898ed6.js",revision:"0415aa8e51f3730757e450a47b30d441"},{url:"assets/side-load.html-6e696cd4.js",revision:"9736ac888dc0846f60a09ef414bc56c1"},{url:"assets/side-load.html-93a3f61b.js",revision:"d3123e3e80faa5a4ba2f51acb5b018b3"},{url:"assets/side-load.html-e1a99ec0.js",revision:"9736ac888dc0846f60a09ef414bc56c1"},{url:"assets/star-request.html-7eb45c92.js",revision:"8cc4261c8c2d6cd3629d1bbfb1938580"},{url:"assets/star-request.html-7f0089f1.js",revision:"27dfdc170327f7658b49d86d88cff1c4"},{url:"assets/star-request.html-cc20eb21.js",revision:"b28e0aca24bec81af0bebfb60f2d8be1"},{url:"assets/star-request.html-eb357667.js",revision:"79801dfbfe99d5202323c4f6f246c0a1"},{url:"assets/style-a6da9cda.css",revision:"707a73c999e23d0d084e6d4f04805655"},{url:"assets/style-e9220a04.js",revision:"b40fc755bce11d2ee5ec6b814c802a65"},{url:"assets/symposium1.html-4ca69a8e.js",revision:"9e38d23bebd819ee8112e2306c0f6999"},{url:"assets/symposium1.html-d228b448.js",revision:"06a28c4a6d3877ece93f40fa88a70916"},{url:"assets/symposium2.html-afc2b4b9.js",revision:"d0887242f813222fe4a81c5d28601f13"},{url:"assets/symposium2.html-b9b55802.js",revision:"4737a434d776df0d0bee1391970bb013"},{url:"assets/tos.html-1fd0351d.js",revision:"5046b0f291d9cea5bfebc1cd031a8523"},{url:"assets/tos.html-3a563f3d.js",revision:"668d37e9508582d680a270647bc68159"},{url:"assets/tos.html-723f0b30.js",revision:"45d6d1a562d5dcb60347269818f63f15"},{url:"assets/tos.html-e7fb0dd0.js",revision:"a5509330b39e17b8587d6bf82fbca7a9"},{url:"assets/uninstall.html-3103004e.js",revision:"a4d27d8eb36ac36ae4c92b4f25674223"},{url:"assets/uninstall.html-51ed7af9.js",revision:"f22ed1ddc65c44ad8e209d464e2025e8"},{url:"assets/uninstall.html-90d5e7a1.js",revision:"79bdca9323776fd73ad0d21f21437fa9"},{url:"assets/uninstall.html-b601214f.js",revision:"8416bfa2d602d62cd43d4c2e0d68e981"},{url:"assets/update-log.html-3de5af0e.js",revision:"20c531f67dd16a7dfae4329cb0819cd0"},{url:"assets/update-log.html-432adcb0.js",revision:"da6c728cdbd23c60c984e81b8ed3f48b"},{url:"assets/update-log.html-586203d4.js",revision:"7de8870152c398020801e60a1fcbf0ad"},{url:"assets/update-log.html-ea435cfd.js",revision:"22aae4259ced4f2320a05cc2f5a231fd"},{url:"assets/waline-meta-56fbc549.js",revision:"fe8fce833452b0c8ea188f0342a2ce65"},{url:"assets/weapon-wiki.html-12997220.js",revision:"9fcc3412dd2c6e3c6585e894b6fae4d8"},{url:"assets/weapon-wiki.html-13e7acbe.js",revision:"bca96349518adfe531e38503baaef5e6"},{url:"assets/weapon-wiki.html-381fbef5.js",revision:"c406c7725d280e385d78af4646907ce6"},{url:"assets/weapon-wiki.html-5c2ca54e.js",revision:"49f602a411138efd8ce35cfa6c50886c"},{url:"assets/wish-export.html-0e82753b.js",revision:"4578dee26f8595b5d69d390fff8f4049"},{url:"assets/wish-export.html-30e5101d.js",revision:"2d0cac968845f5bc436e697f71a0739c"},{url:"assets/wish-export.html-8e614338.js",revision:"2cf7984d5f7dd14cc5411296bc8d185e"},{url:"assets/wish-export.html-b1d5faab.js",revision:"e94740d52a7512ddfd9df61af8db93dd"},{url:"fontlist/demo.css",revision:"c470b271d96640b2d527d864d838d550"},{url:"fontlist/iconfont.css",revision:"47f9418c83e516e2f92fffa11e06ff9f"},{url:"fontlist/iconfont.js",revision:"787c135beed0ae93c145ae2de3cbfefe"},{url:"fontlist/iconfont.ttf",revision:"6d90ead1de012ad82077c2a898dcc136"},{url:"fontlist/iconfont.woff",revision:"c50542a321198d3a49a56ba9f50923f6"},{url:"fontlist/iconfont.woff2",revision:"a917e0d0985aaabe49b9bd5ad48bd270"},{url:"upload-abyss-data.js",revision:"e3c5df0c4de06f2bd47d19d95f478c8e"},{url:"index.html",revision:"d706e3df80787f5306d671719a2dbc10"},{url:"404.html",revision:"779170c35350654f49c9327c064503aa"},{url:"images/202209/Achievements.png",revision:"067cff70d53656b2e3e878df949823f6"},{url:"images/202209/HeroImageLogo.png",revision:"fb8507e3eaccbd6408874dcf10973d62"},{url:"images/202209/IndexIconAchievements.png",revision:"ea409f5a87b1c7666121ead606e323ef"},{url:"images/202209/IndexIconCharacters.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202209/IndexIconMihoyoBBS.png",revision:"b9c679888c01a50e6b126f9dae0d50d1"},{url:"images/202209/IndexIconWeapons.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202209/IndexIconWish.png",revision:"0b4e790c4cb1eeba7473ad8e1b14ac23"},{url:"images/202209/SGLogoUpgrade64.png",revision:"1b95d8969049e0b31c0d89eeface0b89"},{url:"images/202209/wish-export.png",revision:"ef07fa6499c22d00c78dc182ad3cbab5"},{url:"images/202210/1.1.7-Update-Error-Fix.png",revision:"1f1958198ca4510713648cff6c43fcd5"},{url:"images/202210/1.1.7-Update-Error.png",revision:"3e04317e974e1cec550096b7ea88d708"},{url:"images/202210/account-upgrade.png",revision:"52b1c5695109142c9496bb6e14a9c2d1"},{url:"images/202210/HttpRequestException.jpg",revision:"878a57ab9fe5de6b774d7e91776987ab"},{url:"images/202210/hutao-api-submit.png",revision:"6a201ae85f470f3bb70e868137524830"},{url:"images/202210/hutao-api.png",revision:"5bd260fe9b5c18a41765c1126cfd91ff"},{url:"images/202210/hutao-login.png",revision:"21af43587bacf56bf40cadc884381c49"},{url:"images/202211/character-data-display.png",revision:"0cd41e7a02ee864ff12f0f69c926b79f"},{url:"images/202211/character-data-logo.png",revision:"04cc28833ed4c2108ba215fbc33325bf"},{url:"images/202211/character-wiki-logo.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202211/character-wiki.png",revision:"002ee49f019709942ae1b3dc541d05e4"},{url:"images/202211/game-launcher-logo.png",revision:"a5a5d6d5a09926689f8a61db4b24c2df"},{url:"images/202211/hutao-api-logo.png",revision:"feb8ae3e6c4099e0b7804e3d7ebda7c2"},{url:"images/202211/wish-export.png",revision:"c695c558c514d9aa0d3903d5c41f63b9"},{url:"images/202301/achievement.png",revision:"42fd361ea1336daf7cd33bf187e62fa2"},{url:"images/202301/dev-plan-logo.png",revision:"5d69e71ecd6e1b553395e2306fff5f34"},{url:"images/202301/live-stat-tracking-logo.png",revision:"23a418c1d29dbbf0142085f2e8ad464d"},{url:"images/202301/spiral-abyss-record-logo.png",revision:"6d213b91803137c600bb27b973a7ee25"},{url:"images/202301/weapon-wiki-logo.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202308/Calculator_Icon.png",revision:"7fb5a148e1ae7f98c4848f3601a158fb"},{url:"images/202308/Character_WIKI_Icon.png",revision:"efb6186847a600de2a4a429052d1c77b"},{url:"images/202308/Game_Launcher_Icon.png",revision:"3d1f2ce60f927919a4120b9e2206dca1"},{url:"images/202308/head-back.png",revision:"627872a2d3a6e0a9175362a2bce9df75"},{url:"images/202308/highlights-head.png",revision:"95af9689fe9b2659f4e1e8c6ad365d87"},{url:"images/202308/hoyolab-miyoushe-Icon.png",revision:"e06a266f679fb74b6259579846410d8c"},{url:"images/202308/My_Character_Icon.png",revision:"394b9ce7a3f8d92109dac083c1e916c8"},{url:"images/202308/UI_BtnIcon_Gacha.png",revision:"912a76ce2d4579c72ada39c79237279d"},{url:"images/202308/UI_ChapterIcon_Hutao.png",revision:"86791e433554edf6652ee9dfd0d4ef69"},{url:"images/202308/Weapon_WIKI_Icon.png",revision:"3f20fdf346dafbd370054f04ec00b8cf"},{url:"images/202309/head-back2.png",revision:"68cab275f36686f7032e495c58cc47df"},{url:"images/202309/security.png",revision:"1853661345ceb924817aae9ebdd7ec1f"},{url:"pwa-icon/chrome-144.png",revision:"24dd1f208ca63bef5c104659ae25c0e8"},{url:"pwa-icon/chrome-192.png",revision:"984b2a8dfd5dfb1cecfb73bc940bf070"},{url:"pwa-icon/chrome-48.png",revision:"a424e2c1b597db8e320cb3184c78ae23"},{url:"pwa-icon/chrome-512.png",revision:"06ecfca5b4c625d580608e04850f9f29"},{url:"pwa-icon/chrome-72.png",revision:"b9c2449570f275fd5dd34b887aa04697"},{url:"pwa-icon/chrome-96.png",revision:"64e04325061a5fa6de31f4b52bb7498f"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map

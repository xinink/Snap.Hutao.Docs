if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let r={};const d=e=>a(e,f),t={module:{uri:f},exports:r,require:d};s[f]=Promise.all(i.map((e=>t[e]||d(e)))).then((e=>(c(...e),r)))}}define(["./workbox-cbd5c79e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-0864d709.js",revision:"43130a5da018bf08958e3524b759f13a"},{url:"assets/404.html-32d5d192.js",revision:"767836dc23b8d2228d857260ce64e683"},{url:"assets/achievements.html-717876fb.js",revision:"2b0a851deeab93f74a1a12a41471ad25"},{url:"assets/achievements.html-d587d759.js",revision:"c3be4cd3adc3bc5a925cd9283ed90bd0"},{url:"assets/app-ef09c392.js",revision:"c4ff13268557fa4bae0da9f89a50e9e8"},{url:"assets/artifact-rating-rules.html-2ad9f1be.js",revision:"a40d6f4cb9ff0d6ecb8af89da773f7f1"},{url:"assets/artifact-rating-rules.html-89b1cb5d.js",revision:"1d4878a36b950b3eda7d149f322c4e9e"},{url:"assets/auto-5a6868c8.js",revision:"0e4085cbbd1b14379623b9235b3c9f13"},{url:"assets/bug-report.html-665f088a.js",revision:"3e234cc1d963f9b0db9255e056120262"},{url:"assets/bug-report.html-9d6bda3c.js",revision:"d9c1586b1e37d8004e67b08065d2f274"},{url:"assets/character-data.html-41fa4a18.js",revision:"62a3367e6d810ccf8866b82a6faf6155"},{url:"assets/character-data.html-7cbcfb0c.js",revision:"be7cdbb5ba3d34f33156c25153c1ada0"},{url:"assets/character-wiki.html-150c6cea.js",revision:"eb3832fe51a83cf22618f21231aa3603"},{url:"assets/character-wiki.html-c3f4fc0d.js",revision:"887ecc35683c4a5ade1570cc3ccbe0d5"},{url:"assets/community.html-4259ed5c.js",revision:"78d9fed5197844c2c2e29e4845bdd846"},{url:"assets/community.html-b313a1f6.js",revision:"9620e66c082549599223a01e141eca05"},{url:"assets/daily-notes.html-0811c141.js",revision:"d1e7033671d494f51b8e460a1ddab0d4"},{url:"assets/daily-notes.html-4f5386f2.js",revision:"8b1687cb3fd1dbf4296ce1987f74f426"},{url:"assets/develop-plan.html-304a21a8.js",revision:"accf99ce37306ec69f04b10c3c4aa339"},{url:"assets/develop-plan.html-a9728973.js",revision:"02899e558fb11d1b4217be2a24b14dc5"},{url:"assets/diagram-definition.0faef4c2-4dda171c.js",revision:"a60e9e560547fcf23096d6233149cdab"},{url:"assets/flowchart.parse-0007e96c.js",revision:"5fce68ee48d56167c2948760a4066c2d"},{url:"assets/framework-2050cf2c.js",revision:"bc138f6da7d53f2337cf81f328981942"},{url:"assets/Gacha-system-and-export-principal.html-4011e065.js",revision:"9fd494fbdc328ff146391be17c32eaa6"},{url:"assets/Gacha-system-and-export-principal.html-abf4ddb4.js",revision:"1f2ab008a4c26d86a182ad76c4c8239a"},{url:"assets/game-launcher.html-50a156eb.js",revision:"9c3821cf3a3f40451d6cca1ce151b029"},{url:"assets/game-launcher.html-bea5849c.js",revision:"4c383352cd322f428cf6183e53b02b58"},{url:"assets/get-stoken-cookie-from-the-third-party.html-a02de77c.js",revision:"ebcfb53c1a46cddccf0cdcfdd8a2d0b8"},{url:"assets/get-stoken-cookie-from-the-third-party.html-ac32733d.js",revision:"7942384bda67a5521919185367fd79bd"},{url:"assets/highlight.esm-a794bb63.js",revision:"0949b348e0e7d26440159b7c6c417cad"},{url:"assets/how-to.html-5cb96e32.js",revision:"fbc775783431d95ab75e3e97fbd2a417"},{url:"assets/how-to.html-702e4cb9.js",revision:"4ede9358479465c2f0db1e78c4bb2481"},{url:"assets/HttpRequestException.html-2143ce68.js",revision:"8f8cc6e37114a0280b0d89f1c3f5faf7"},{url:"assets/HttpRequestException.html-4f30254a.js",revision:"db24d6ccf7b55564ca98bf05a218c722"},{url:"assets/hutao-API.html-a02b463f.js",revision:"a3eec452ad132371ce2847645f148baf"},{url:"assets/hutao-API.html-bf294432.js",revision:"878eb29652de8e2d4cdcaa9b21db2e6d"},{url:"assets/hutao-settings.html-418b1f2c.js",revision:"88f6daea43af8940432dfb4695ec7aa3"},{url:"assets/hutao-settings.html-8e84b5ab.js",revision:"f1af72f646f23b700415c053c4156db4"},{url:"assets/index-70769223.js",revision:"097390f0c66585e8b9e39361bf5f05d1"},{url:"assets/index-8764208e.js",revision:"42b6232acbe6be5d6ef5707e7f046345"},{url:"assets/index.html-01fa0df8.js",revision:"b1d8c8bcd1e87b34f5cf9f5546cec0e3"},{url:"assets/index.html-12187913.js",revision:"63b588313772a87d12382169ffcfed49"},{url:"assets/index.html-59219388.js",revision:"d6dd7b2735dcfc66bc1d5f6993d169a3"},{url:"assets/index.html-5d0fb0cb.js",revision:"700ee6e02ba0db94c872648ac368e8e1"},{url:"assets/index.html-6108273b.js",revision:"9cb8fe9e29ca5a85d4d70b03073028d5"},{url:"assets/index.html-a508a192.js",revision:"9cb8fe9e29ca5a85d4d70b03073028d5"},{url:"assets/index.html-a8160138.js",revision:"af0b9460694cb475465f38e8d0735481"},{url:"assets/index.html-b78e8cf1.js",revision:"223f1003a8a28b0011c7b7a1fb098763"},{url:"assets/index.html-c0b215e3.js",revision:"63b588313772a87d12382169ffcfed49"},{url:"assets/index.html-c412ed13.js",revision:"e729fc819e622d7b3d989482f5cb59fd"},{url:"assets/index.html-de9c2355.js",revision:"9cb8fe9e29ca5a85d4d70b03073028d5"},{url:"assets/index.html-ffce7d23.js",revision:"7525eca84fbca96d2534bfc1e7f3fb1a"},{url:"assets/KaTeX_AMS-Regular-0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular-30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular-68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold-07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold-1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold-de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular-3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular-5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular-ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold-74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold-9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold-9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular-1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular-51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular-5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold-0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold-138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold-c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic-70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic-99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic-a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic-0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic-97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic-f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular-c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular-c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular-d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic-850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic-dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic-f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic-08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic-7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic-8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold-1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold-e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold-ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic-00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic-3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic-91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular-11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular-68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular-f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular-036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular-1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular-d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular-6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular-95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular-c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular-2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular-a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular-d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular-500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular-6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular-99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular-a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular-c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular-71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular-e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular-f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic-38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic-5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic-8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/markdown.esm-d92a2fc9.js",revision:"2782fb14c80757ca6a815363b87defce"},{url:"assets/markmap.html-3825499a.js",revision:"674a1b8e8cca85c4616fc6da3380d0c9"},{url:"assets/markmap.html-c8233cb5.js",revision:"5826e11387c4dd2c356cf69102b3895b"},{url:"assets/math.esm-70a288c8.js",revision:"c5f77dc064ac53005c0e5446bb6715b0"},{url:"assets/mermaid-mindmap.esm.min-fc5d6484.js",revision:"cfb5a19d03bb541198c54d0432e534b2"},{url:"assets/mermaid.esm.min-bc08675d.js",revision:"e0d3e0388f4fdfd93ab5b9a67d2ab92b"},{url:"assets/mhy-account-switch.html-0482798f.js",revision:"21749fd3e01d28697fb323ba5e658b81"},{url:"assets/mhy-account-switch.html-93d20ec1.js",revision:"2234d4e82168dc3cc8bd94c80e95a8a3"},{url:"assets/mihoyo-risk-tip.html-1202309e.js",revision:"ca9e92e5c51e10acee3831608afaceb3"},{url:"assets/mihoyo-risk-tip.html-d397119f.js",revision:"581be6712ce3bc5fa6c7ff54808ac041"},{url:"assets/notes.esm-224f94d9.js",revision:"fbad6b0fa80d99a444266ec8836ab70c"},{url:"assets/photoswipe.esm-a9093b7c.js",revision:"e5f2011f608af205681b3a6e1023fab7"},{url:"assets/privacy-notice.html-4dbebbbb.js",revision:"f3e6260d14359fe92b9d78d0657eb4dd"},{url:"assets/privacy-notice.html-c8d33cc7.js",revision:"a05be9ab5a16f88f8f1d84eb4388c63e"},{url:"assets/project.html-3e4ddd91.js",revision:"04405c3b6c05f9a69b04af7c09902822"},{url:"assets/project.html-9bfa1e4e.js",revision:"c74246288ddd08cfd351e7883ec1e7f6"},{url:"assets/quick-start.html-191c457a.js",revision:"482d2227d954b33dff34d7ad57705c79"},{url:"assets/quick-start.html-71fd557f.js",revision:"c15de829be7c5602ce2c9d6fe7bed573"},{url:"assets/reveal.esm-e5069ce0.js",revision:"383acd58551019bedc482d68f9eaddef"},{url:"assets/search.esm-2c3fba7d.js",revision:"7c1ff9e9285b9354b44c719f60e1cfd0"},{url:"assets/SearchResult-0130dae8.js",revision:"6731a6f03d91f21833435ed1c8cef453"},{url:"assets/source-sans-pro-italic-05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic-ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic-d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular-c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular-d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular-dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold-a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold-b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold-ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic-7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic-dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic-e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/star-request.html-0a6171e5.js",revision:"d751def7b0811479bf86b588130edbd2"},{url:"assets/star-request.html-a111ddc0.js",revision:"29506bc7e5c220b2163251142198e58d"},{url:"assets/style-11ef03ce.css",revision:"4d50456ca91458769bb629ac4f10851e"},{url:"assets/symposium1.html-307eb376.js",revision:"bfec998dcfd34bd94cdc30c78a36472f"},{url:"assets/symposium1.html-3ced5dc3.js",revision:"39bd97f0885d92a03d1163dfcd54df40"},{url:"assets/symposium2.html-3a708b8f.js",revision:"5f94280c762be8ed1d1f206ea517cedb"},{url:"assets/symposium2.html-bad37c5f.js",revision:"2dee193aee87031a920e9bee74e1bd66"},{url:"assets/tos.html-00997ad6.js",revision:"fb6690a766227696a44084d7decc8877"},{url:"assets/tos.html-89cadc91.js",revision:"509c9fd668be98fc73c62375229d6387"},{url:"assets/vue-repl-df2acbb6.js",revision:"2be27b37b5b5720471368e353ae82c42"},{url:"assets/VuePlayground-3e83015b.js",revision:"d2ba05c48cf32c8af3cb721d1515b05b"},{url:"assets/waline-meta-a31b78ed.js",revision:"4003eee21f800e7d4662bda5f1875047"},{url:"assets/weapon-wiki.html-33bb156f.js",revision:"23c688df06d864c399ff628652aaaf8c"},{url:"assets/weapon-wiki.html-ee86d91d.js",revision:"fefc2831284d5ade435ccdacf3a54389"},{url:"assets/why.html-2a2ae349.js",revision:"b809554f68cc8529573388e911b9d994"},{url:"assets/why.html-69ac89b7.js",revision:"288777eca7730e5261267a69e10e8e72"},{url:"assets/wish-export.html-2131fc6d.js",revision:"f94bca2b3760196331b3b1adb987b830"},{url:"assets/wish-export.html-38eb66bf.js",revision:"78b2218ab44de725f434248ea27edc08"},{url:"assets/zoom.esm-b83b91d0.js",revision:"9ea0d576c1bddb5122016122d8a24c68"},{url:"fontlist/demo.css",revision:"c470b271d96640b2d527d864d838d550"},{url:"fontlist/iconfont.css",revision:"47f9418c83e516e2f92fffa11e06ff9f"},{url:"fontlist/iconfont.js",revision:"787c135beed0ae93c145ae2de3cbfefe"},{url:"fontlist/iconfont.ttf",revision:"6d90ead1de012ad82077c2a898dcc136"},{url:"fontlist/iconfont.woff",revision:"c50542a321198d3a49a56ba9f50923f6"},{url:"fontlist/iconfont.woff2",revision:"a917e0d0985aaabe49b9bd5ad48bd270"},{url:"404.html",revision:"0844272fd59290c76e50578002973247"},{url:"community.html",revision:"00d9e6bc14f23b8cd02957c74ab5c354"},{url:"development-log/index.html",revision:"64693ccfcf11657aca54c85eb4ee4341"},{url:"development-log/symposium1.html",revision:"0deb37644cc308ee04cf968f492714bb"},{url:"development-log/symposium2.html",revision:"9480931a767b29f3603ea2c57103b248"},{url:"en/index.html",revision:"a8d539efc9c2d83de925e02095f61088"},{url:"FAQ/artifact-rating-rules.html",revision:"22c0068ca7e875de16bbfb87f18742bd"},{url:"FAQ/Gacha-system-and-export-principal.html",revision:"bf9a036ac354b409f4271310068d4690"},{url:"FAQ/get-stoken-cookie-from-the-third-party.html",revision:"1f87d3cc73fa1d05f9fd8bf08af1eb19"},{url:"FAQ/how-to.html",revision:"4a96b6eba44275b02fe5e73ccf71a13d"},{url:"FAQ/HttpRequestException.html",revision:"47761908e403c5d9b9328973095ea7b2"},{url:"FAQ/index.html",revision:"a62eec1aeac6ce2dd235e239fbef981a"},{url:"FAQ/mihoyo-risk-tip.html",revision:"88bf8e6ec022ccb930c7039a25258920"},{url:"FAQ/why.html",revision:"d3a43732d01104b260c5924bb8e1671c"},{url:"features/achievements.html",revision:"42f486e0a2919cfc53ce494c8383bfd9"},{url:"features/character-data.html",revision:"adbb5b57b55d32a2594b230fcafb9d9d"},{url:"features/character-wiki.html",revision:"5e76089eafc20e5852cd7103610f5d43"},{url:"features/daily-notes.html",revision:"392213158cdc4c8d4fc7082bd59e58ef"},{url:"features/develop-plan.html",revision:"99fd8fbd3686c08acd102c5cb6cdcbaf"},{url:"features/game-launcher.html",revision:"535ea52d63e83c2011a3af230caf498e"},{url:"features/hutao-API.html",revision:"596dcd21b48b19bd69513bb7c864e871"},{url:"features/hutao-settings.html",revision:"25b89f766ce76ab12621df99217a4a1f"},{url:"features/index.html",revision:"39cd35e66187693591f3ed58aba264b2"},{url:"features/mhy-account-switch.html",revision:"5b98e7278e00fa25c4134f8c5ee71cc9"},{url:"features/weapon-wiki.html",revision:"19641141f6028e7af8bc0d34ef9a27c8"},{url:"features/wish-export.html",revision:"5b2e7e2c2f7ab24e1e777163c3999d97"},{url:"fontlist/demo_index.html",revision:"925b49536eec61049492bf64fe28a9e6"},{url:"index.html",revision:"e7d43fd95fbcb0ffc3784979c65d0a7f"},{url:"markmap.html",revision:"a925988fd961fe61ca9cf015a882a857"},{url:"markmap/zh.html",revision:"b35a18f015a5cd1b4ae885e560b2caaa"},{url:"project.html",revision:"c1c90277405eb5c7b7990c0210d1cc50"},{url:"quick-start.html",revision:"55f5012bed2d403e37a40ff243c50ec7"},{url:"star-request.html",revision:"7b7bf7cbec2f8192cde963f7b4694df2"},{url:"statements/bug-report.html",revision:"1e196aac09989e6f836d1f04372f89a9"},{url:"statements/index.html",revision:"ec116d83f22cc9955a55d682e90de4e2"},{url:"statements/privacy-notice.html",revision:"a0493a38fba07bd3be1e6cc9bbf0a4c2"},{url:"statements/tos.html",revision:"47982b7845404ca10973d0b4f735048f"},{url:"images/202209/Achievements.png",revision:"067cff70d53656b2e3e878df949823f6"},{url:"images/202209/HeroImageLogo.png",revision:"fb8507e3eaccbd6408874dcf10973d62"},{url:"images/202209/IndexIconAchievements.png",revision:"ea409f5a87b1c7666121ead606e323ef"},{url:"images/202209/IndexIconCharacters.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202209/IndexIconMihoyoBBS.png",revision:"b9c679888c01a50e6b126f9dae0d50d1"},{url:"images/202209/IndexIconWeapons.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202209/IndexIconWish.png",revision:"0b4e790c4cb1eeba7473ad8e1b14ac23"},{url:"images/202209/SGLogoUpgrade64.png",revision:"1b95d8969049e0b31c0d89eeface0b89"},{url:"images/202209/wish-export.png",revision:"ef07fa6499c22d00c78dc182ad3cbab5"},{url:"images/202210/1.1.7-Update-Error-Fix.png",revision:"1f1958198ca4510713648cff6c43fcd5"},{url:"images/202210/1.1.7-Update-Error.png",revision:"3e04317e974e1cec550096b7ea88d708"},{url:"images/202210/account-upgrade.png",revision:"52b1c5695109142c9496bb6e14a9c2d1"},{url:"images/202210/HttpRequestException.jpg",revision:"878a57ab9fe5de6b774d7e91776987ab"},{url:"images/202210/hutao-api-submit.png",revision:"6a201ae85f470f3bb70e868137524830"},{url:"images/202210/hutao-api.png",revision:"5bd260fe9b5c18a41765c1126cfd91ff"},{url:"images/202210/hutao-login.png",revision:"21af43587bacf56bf40cadc884381c49"},{url:"images/202211/character-data-display.png",revision:"0cd41e7a02ee864ff12f0f69c926b79f"},{url:"images/202211/character-data-logo.png",revision:"04cc28833ed4c2108ba215fbc33325bf"},{url:"images/202211/character-wiki-logo.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202211/character-wiki.png",revision:"002ee49f019709942ae1b3dc541d05e4"},{url:"images/202211/game-launcher-logo.png",revision:"a5a5d6d5a09926689f8a61db4b24c2df"},{url:"images/202211/hutao-api-logo.png",revision:"feb8ae3e6c4099e0b7804e3d7ebda7c2"},{url:"images/202211/wish-export.png",revision:"c695c558c514d9aa0d3903d5c41f63b9"},{url:"images/202301/achievement.png",revision:"42fd361ea1336daf7cd33bf187e62fa2"},{url:"images/202301/dev-plan-logo.png",revision:"5d69e71ecd6e1b553395e2306fff5f34"},{url:"images/202301/live-stat-tracking-logo.png",revision:"23a418c1d29dbbf0142085f2e8ad464d"},{url:"images/202301/spiral-abyss-record-logo.png",revision:"6d213b91803137c600bb27b973a7ee25"},{url:"images/202301/weapon-wiki-logo.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"pwa-icon/chrome-192.png",revision:"6d30f6750b36f3a261ad989d26feb899"},{url:"pwa-icon/chrome-512.png",revision:"920fa62caa82087b012351242dcc46c0"},{url:"pwa-icon/ios-152.png",revision:"b51617947bc9724dad89fa357624a671"},{url:"pwa-icon/ios-192.png",revision:"6d30f6750b36f3a261ad989d26feb899"},{url:"pwa-icon/ios-512.png",revision:"920fa62caa82087b012351242dcc46c0"},{url:"pwa-icon/ms-256.png",revision:"f877e44d42504adaac6f558be4d93b3a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map

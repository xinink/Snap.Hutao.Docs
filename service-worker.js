if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(a[f])return;let r={};const d=e=>s(e,f),t={module:{uri:f},exports:r,require:d};a[f]=Promise.all(i.map((e=>t[e]||d(e)))).then((e=>(c(...e),r)))}}define(["./workbox-cbd5c79e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-32d5d192.js",revision:"767836dc23b8d2228d857260ce64e683"},{url:"assets/404.html-f3dfcc04.js",revision:"ece6ed062b30c7cd5cef7ed56b441333"},{url:"assets/achievements.html-717876fb.js",revision:"2b0a851deeab93f74a1a12a41471ad25"},{url:"assets/achievements.html-86cba11d.js",revision:"b427f4effea5c776815f6f2fc744a056"},{url:"assets/app-5e83cc5b.js",revision:"c2f9d099bd7d52b335a5ed06cca9bfa4"},{url:"assets/artifact-rating-rules.html-79bb6e43.js",revision:"9bab7a8a3c4d2371ff268449b3f30df3"},{url:"assets/artifact-rating-rules.html-96b16e32.js",revision:"5f47e85b4324e10dbca559dfcb696095"},{url:"assets/auto-5a6868c8.js",revision:"0e4085cbbd1b14379623b9235b3c9f13"},{url:"assets/bug-report.html-2939c070.js",revision:"66835834583dc2df3489653022fc246a"},{url:"assets/bug-report.html-755638cf.js",revision:"5cc9ab1d176333a068f9575de92cf56e"},{url:"assets/character-data.html-2ca9ce0e.js",revision:"3d9528db5f1846ba642a17c986e9b4fa"},{url:"assets/character-data.html-41fa4a18.js",revision:"62a3367e6d810ccf8866b82a6faf6155"},{url:"assets/character-wiki.html-150c6cea.js",revision:"eb3832fe51a83cf22618f21231aa3603"},{url:"assets/character-wiki.html-64d5ba79.js",revision:"114e5d16531bf710ba03f991a1657459"},{url:"assets/community.html-b7dd4ca6.js",revision:"b19ebd8371ceed1683cba126cf26a439"},{url:"assets/community.html-fb698a25.js",revision:"ab6cce9682d7c78f9e6c6a57e9d6cc94"},{url:"assets/daily-notes.html-85beb133.js",revision:"1e7e23a8903dc0abcaff7c0b780d9d90"},{url:"assets/daily-notes.html-a719158d.js",revision:"63d8cb796ecad85f76ca80d012a07311"},{url:"assets/develop-plan.html-a9728973.js",revision:"02899e558fb11d1b4217be2a24b14dc5"},{url:"assets/develop-plan.html-c113b52c.js",revision:"e759cd0e8f95c70707de9717c9723f49"},{url:"assets/diagram-definition.0faef4c2-4dda171c.js",revision:"a60e9e560547fcf23096d6233149cdab"},{url:"assets/docsearch-1d421ddb.js",revision:"582ce23a3b7a09735ae2e462904b2e3a"},{url:"assets/exceptions.html-602bb3b9.js",revision:"32e15d61ddb705cf0c4a297f4d3d63e2"},{url:"assets/exceptions.html-870eddb3.js",revision:"3376e3741336218fbc594867b76c9e4c"},{url:"assets/FAQ.html-328bc042.js",revision:"470c23eac47494f1b1cf22121ed659b2"},{url:"assets/FAQ.html-d3da29ae.js",revision:"a610abdd313fad67ec98524f496c44f1"},{url:"assets/flowchart-35969cab.js",revision:"9e6946328eeacbd52ab4fc11bd4a99f8"},{url:"assets/framework-3390b3d8.js",revision:"99964a5f18692f5e7152232b45b9c750"},{url:"assets/Gacha-system-and-export-principal.html-c06e4429.js",revision:"c964bc23a291ef5618a442cdd3316b19"},{url:"assets/Gacha-system-and-export-principal.html-ef6ac30c.js",revision:"60564b3825f7073ddcfc8aaf67046567"},{url:"assets/game-launcher.html-535d8f04.js",revision:"77d71a74c4e2292490cc3e7320d2092a"},{url:"assets/game-launcher.html-b54f41cb.js",revision:"98252fee00be8f4f3be33cf90ac54999"},{url:"assets/get-stoken-cookie-from-the-third-party.html-17d169ec.js",revision:"713a907064189b499661f9858dcea062"},{url:"assets/get-stoken-cookie-from-the-third-party.html-7e42bee7.js",revision:"aed21704641848aa1799fa55e486ce95"},{url:"assets/highlight.esm-a794bb63.js",revision:"0949b348e0e7d26440159b7c6c417cad"},{url:"assets/hutao-API.html-a02b463f.js",revision:"a3eec452ad132371ce2847645f148baf"},{url:"assets/hutao-API.html-ff102da3.js",revision:"c536e2860fcfc222ed3ba8c3aafabc72"},{url:"assets/hutao-settings.html-28b83d00.js",revision:"1c12150fedf1b86f3e28c1df91c5b0f2"},{url:"assets/hutao-settings.html-de75e9ec.js",revision:"a183fa276a528f145e6887c486469049"},{url:"assets/i18n.html-91aa70eb.js",revision:"aee3d2c6a0acdeae4244e0b657d429c2"},{url:"assets/i18n.html-f11ef0a9.js",revision:"9fcec3699cedb6d1a575d1acd594def8"},{url:"assets/index-70769223.js",revision:"097390f0c66585e8b9e39361bf5f05d1"},{url:"assets/index-8764208e.js",revision:"42b6232acbe6be5d6ef5707e7f046345"},{url:"assets/index.html-088df0ce.js",revision:"8fb157abee936a6c7b0699837cafb59d"},{url:"assets/index.html-0d92d5aa.js",revision:"780330d6b52e44cc1a4d889ac59098f8"},{url:"assets/index.html-34056938.js",revision:"c12575099fea95dfa239d0a79e030c55"},{url:"assets/index.html-4b5336df.js",revision:"a4a83b4b891b3941a0182299738f9544"},{url:"assets/index.html-59219388.js",revision:"d6dd7b2735dcfc66bc1d5f6993d169a3"},{url:"assets/index.html-5a3324fa.js",revision:"a4a83b4b891b3941a0182299738f9544"},{url:"assets/index.html-6015185b.js",revision:"63ff1521d699b47eb776889012d96f4c"},{url:"assets/index.html-651cfb32.js",revision:"fcc3c581d661dca3dd94cde18263ccbc"},{url:"assets/index.html-95592738.js",revision:"a4a83b4b891b3941a0182299738f9544"},{url:"assets/index.html-a5fbdfbf.js",revision:"936b1d74fb49aea53b1ff2ef032b6718"},{url:"assets/index.html-bfb8cd41.js",revision:"780330d6b52e44cc1a4d889ac59098f8"},{url:"assets/index.html-f45a2103.js",revision:"a4a83b4b891b3941a0182299738f9544"},{url:"assets/KaTeX_AMS-Regular-0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular-30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular-68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold-07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold-1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold-de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular-3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular-5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular-ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold-74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold-9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold-9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular-1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular-51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular-5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold-0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold-138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold-c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic-70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic-99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic-a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic-0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic-97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic-f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular-c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular-c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular-d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic-850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic-dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic-f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic-08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic-7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic-8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold-1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold-e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold-ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic-00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic-3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic-91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular-11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular-68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular-f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular-036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular-1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular-d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular-6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular-95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular-c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular-2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular-a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular-d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular-500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular-6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular-99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular-a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular-c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular-71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular-e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular-f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/known-issue.html-de59dd7c.js",revision:"395e1e4a86b6a8dc0b22212bbdc7a37b"},{url:"assets/known-issue.html-e9c2ff3c.js",revision:"0da1530cbac4bd2e8f5b6495dd6e680e"},{url:"assets/league-gothic-38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic-5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic-8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/markdown.esm-d92a2fc9.js",revision:"2782fb14c80757ca6a815363b87defce"},{url:"assets/markmap.html-3825499a.js",revision:"674a1b8e8cca85c4616fc6da3380d0c9"},{url:"assets/markmap.html-dddcab19.js",revision:"9907ced9aaa1217f56238193ad231e3e"},{url:"assets/math.esm-70a288c8.js",revision:"c5f77dc064ac53005c0e5446bb6715b0"},{url:"assets/mermaid-mindmap.esm.min-83006031.js",revision:"a67949b618ebf77c67e814f124779abb"},{url:"assets/mermaid.esm.min-bc08675d.js",revision:"e0d3e0388f4fdfd93ab5b9a67d2ab92b"},{url:"assets/mhy-account-switch.html-a0d3070f.js",revision:"5aa84f76070201a2d213e8d038d337c1"},{url:"assets/mhy-account-switch.html-eaf73e17.js",revision:"830458468ee48491d818b0ad9bf8c6d3"},{url:"assets/mihoyo-risk-tip.html-82c13d23.js",revision:"8c12c9bed4b21d92715dbd725fbc9937"},{url:"assets/mihoyo-risk-tip.html-fec89f16.js",revision:"8bf93fe182cde9459c11cda89b9cd09e"},{url:"assets/notes.esm-224f94d9.js",revision:"fbad6b0fa80d99a444266ec8836ab70c"},{url:"assets/photoswipe.esm-04fddac6.js",revision:"9ad259a6b763e1045e31c1ec4984750d"},{url:"assets/privacy-notice.html-0c488cdf.js",revision:"b91991f29e57ea315f52ba67ed2465d4"},{url:"assets/privacy-notice.html-ad738962.js",revision:"22dc961f5813570121b778c0657371c4"},{url:"assets/project.html-0391df72.js",revision:"2442b0152dc0df6c3ceae287d4f2d043"},{url:"assets/project.html-c1b79beb.js",revision:"736b3c61f91d81fd44fae8a95ec2c0e0"},{url:"assets/quick-start.html-5f5dbf25.js",revision:"fe2217df6d97ac1bc43beefa4dbbcd32"},{url:"assets/quick-start.html-7f47d3b9.js",revision:"a39acef169c9026037952bbed2a85b8e"},{url:"assets/reveal.esm-e5069ce0.js",revision:"383acd58551019bedc482d68f9eaddef"},{url:"assets/search.esm-2c3fba7d.js",revision:"7c1ff9e9285b9354b44c719f60e1cfd0"},{url:"assets/side-load.html-72979265.js",revision:"33102f93d626ad8cc2e20c5d1a2b174b"},{url:"assets/side-load.html-de24922e.js",revision:"5e0b1fcc84926ae1eba0fbb35385ebc9"},{url:"assets/source-sans-pro-italic-05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic-ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic-d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular-c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular-d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular-dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold-a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold-b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold-ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic-7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic-dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic-e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/star-request.html-51c617f3.js",revision:"3b7370f6bfedd3e1bdb67b26940b8366"},{url:"assets/star-request.html-56b84ca0.js",revision:"b7389c2130ecdef05b852067b4a20124"},{url:"assets/style-362c55d9.css",revision:"f0b66e3d032b97064d7e82bab15fb6db"},{url:"assets/style-e9220a04.js",revision:"b40fc755bce11d2ee5ec6b814c802a65"},{url:"assets/symposium1.html-13c57316.js",revision:"66c382efa0336e8e8f7493015666200c"},{url:"assets/symposium1.html-539c6423.js",revision:"c07dfb4220afda67bcd3a73f0b383027"},{url:"assets/symposium2.html-3a708b8f.js",revision:"5f94280c762be8ed1d1f206ea517cedb"},{url:"assets/symposium2.html-ff8e0c56.js",revision:"6559c8568a761fd46f5f32861c6bb797"},{url:"assets/tos.html-989c3554.js",revision:"0d590d9dbe1c53f5eee5f0b0fff2b47d"},{url:"assets/tos.html-de7dfd4c.js",revision:"94c79a7d70380768f582fcf1865e6485"},{url:"assets/uninstall.html-3b97461b.js",revision:"2a013617924a13464832f6058d66be11"},{url:"assets/uninstall.html-b841480b.js",revision:"f9d6fd34f10567da5205e176e290c02e"},{url:"assets/update-log.html-d2fdb8dc.js",revision:"7b06ab98dd2d43e60a3627726bd7928a"},{url:"assets/update-log.html-e7f433a2.js",revision:"b4baea99f654b4d6c0ca8f4a6eb48810"},{url:"assets/vue-repl-91b0fa7c.js",revision:"3887d897cc7efca1d914df2c083ce817"},{url:"assets/VuePlayground-b2b15983.js",revision:"7e4cc4565fe5da45383d6075f7906786"},{url:"assets/waline-meta-a31b78ed.js",revision:"4003eee21f800e7d4662bda5f1875047"},{url:"assets/weapon-wiki.html-e155b4d0.js",revision:"52417d9792956c29f2a5b9570a9c4fa5"},{url:"assets/weapon-wiki.html-ee86d91d.js",revision:"fefc2831284d5ade435ccdacf3a54389"},{url:"assets/wish-export.html-e4e2bab6.js",revision:"8107ac37f6b65ab99786771aee45b9a7"},{url:"assets/wish-export.html-fe5c7015.js",revision:"34c33176f55368c7ced8c9ff7373b867"},{url:"assets/zoom.esm-b83b91d0.js",revision:"9ea0d576c1bddb5122016122d8a24c68"},{url:"fontlist/demo.css",revision:"c470b271d96640b2d527d864d838d550"},{url:"fontlist/iconfont.css",revision:"47f9418c83e516e2f92fffa11e06ff9f"},{url:"fontlist/iconfont.js",revision:"787c135beed0ae93c145ae2de3cbfefe"},{url:"fontlist/iconfont.ttf",revision:"6d90ead1de012ad82077c2a898dcc136"},{url:"fontlist/iconfont.woff",revision:"c50542a321198d3a49a56ba9f50923f6"},{url:"fontlist/iconfont.woff2",revision:"a917e0d0985aaabe49b9bd5ad48bd270"},{url:"404.html",revision:"95bfa99821faba85c01937573ef40a31"},{url:"advanced/artifact-rating-rules.html",revision:"6829507d8d4eec1f1bb217ff38f5e0af"},{url:"advanced/exceptions.html",revision:"59acac37a64db7809bdd85569e387130"},{url:"advanced/FAQ.html",revision:"f07b53748474bdcb3bd7c44bce057e80"},{url:"advanced/Gacha-system-and-export-principal.html",revision:"a9a4ad5bf1787e28d7e6e0aad2d285a9"},{url:"advanced/get-stoken-cookie-from-the-third-party.html",revision:"64f09b981ed4c20d9c0b8c35eee7decb"},{url:"advanced/index.html",revision:"6282cf5ea50db6a8a8e4ab0ba019fa88"},{url:"advanced/known-issue.html",revision:"35a7d9ba2d1df104d7e154391c0e803d"},{url:"advanced/mihoyo-risk-tip.html",revision:"c104ba20bf348ccfdeea0f21cf664a16"},{url:"advanced/uninstall.html",revision:"82539da09df3d64143167be290c1385a"},{url:"community.html",revision:"3ea9c5d4f59c9e2f5815af305692b730"},{url:"development-log/index.html",revision:"ab4631cf8db727ab542c9927bd2e4cd8"},{url:"development-log/symposium1.html",revision:"3e974e1cbaf70d669b062aa28926514a"},{url:"development-log/symposium2.html",revision:"8ce589923beda741f618ce14384732d8"},{url:"en/index.html",revision:"c6d58947d3d40ba6febb52a990cde82f"},{url:"features/achievements.html",revision:"3e035ebffe10b7fbc2231a8d272fa91a"},{url:"features/character-data.html",revision:"800bf4223561cd6343d4c580a1726e95"},{url:"features/character-wiki.html",revision:"9e622dbfb5945406758261f2abe1eb3b"},{url:"features/daily-notes.html",revision:"aa4cd8e4b149150202f3aca96838e976"},{url:"features/develop-plan.html",revision:"aae2f3b50d9a0db688f44ac927cf152c"},{url:"features/game-launcher.html",revision:"76bee12ea0be1e64d55d21acbb4982f0"},{url:"features/hutao-API.html",revision:"6a694ec80a4281d86d2bfab2ccae44e4"},{url:"features/hutao-settings.html",revision:"81102e08c7075253c99deee741d51cb4"},{url:"features/index.html",revision:"5d3a5004f9cd92da1f35d3aae2b84fbc"},{url:"features/mhy-account-switch.html",revision:"e2328939984c5bf64086988acafe3046"},{url:"features/weapon-wiki.html",revision:"2b83f7b6ecacc2aea2fb8e1669e2e714"},{url:"features/wish-export.html",revision:"e6b778e45a90e6d42460385f40087062"},{url:"fontlist/demo_index.html",revision:"925b49536eec61049492bf64fe28a9e6"},{url:"i18n.html",revision:"55f14b1feea5d069200286683103e359"},{url:"index.html",revision:"7af217af6c83e1995c4ef3d4ff6ffa09"},{url:"markmap.html",revision:"4e7ad4bdd60db184d52f598584430a7f"},{url:"markmap/zh.html",revision:"b35a18f015a5cd1b4ae885e560b2caaa"},{url:"project.html",revision:"cf68f6fd0d20f349bba8bf5f09fed552"},{url:"quick-start.html",revision:"cbd6e18aeb9931f5fce3e65127d86271"},{url:"side-load.html",revision:"d12f3552a6f8449619763ae5cece7267"},{url:"star-request.html",revision:"2c0b9291659617173274589f4192eb06"},{url:"statements/bug-report.html",revision:"4922add82f317d8d81e8de0de47776dc"},{url:"statements/index.html",revision:"5c2879d73c96c48de9e52ca1e88b512d"},{url:"statements/privacy-notice.html",revision:"149cd6288e79f67ae8812be168f66503"},{url:"statements/tos.html",revision:"bc6d687add3c1ca2f2607487ff3f7cb2"},{url:"statements/update-log.html",revision:"921a9fb45cb136f57ddfbd1b300c1183"},{url:"store-badge.html",revision:"969c079a8fa84a3096f6afa5fbfe357e"},{url:"images/202209/Achievements.png",revision:"067cff70d53656b2e3e878df949823f6"},{url:"images/202209/HeroImageLogo.png",revision:"fb8507e3eaccbd6408874dcf10973d62"},{url:"images/202209/IndexIconAchievements.png",revision:"ea409f5a87b1c7666121ead606e323ef"},{url:"images/202209/IndexIconCharacters.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202209/IndexIconMihoyoBBS.png",revision:"b9c679888c01a50e6b126f9dae0d50d1"},{url:"images/202209/IndexIconWeapons.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202209/IndexIconWish.png",revision:"0b4e790c4cb1eeba7473ad8e1b14ac23"},{url:"images/202209/SGLogoUpgrade64.png",revision:"1b95d8969049e0b31c0d89eeface0b89"},{url:"images/202209/wish-export.png",revision:"ef07fa6499c22d00c78dc182ad3cbab5"},{url:"images/202210/1.1.7-Update-Error-Fix.png",revision:"1f1958198ca4510713648cff6c43fcd5"},{url:"images/202210/1.1.7-Update-Error.png",revision:"3e04317e974e1cec550096b7ea88d708"},{url:"images/202210/account-upgrade.png",revision:"52b1c5695109142c9496bb6e14a9c2d1"},{url:"images/202210/HttpRequestException.jpg",revision:"878a57ab9fe5de6b774d7e91776987ab"},{url:"images/202210/hutao-api-submit.png",revision:"6a201ae85f470f3bb70e868137524830"},{url:"images/202210/hutao-api.png",revision:"5bd260fe9b5c18a41765c1126cfd91ff"},{url:"images/202210/hutao-login.png",revision:"21af43587bacf56bf40cadc884381c49"},{url:"images/202211/character-data-display.png",revision:"0cd41e7a02ee864ff12f0f69c926b79f"},{url:"images/202211/character-data-logo.png",revision:"04cc28833ed4c2108ba215fbc33325bf"},{url:"images/202211/character-wiki-logo.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202211/character-wiki.png",revision:"002ee49f019709942ae1b3dc541d05e4"},{url:"images/202211/game-launcher-logo.png",revision:"a5a5d6d5a09926689f8a61db4b24c2df"},{url:"images/202211/hutao-api-logo.png",revision:"feb8ae3e6c4099e0b7804e3d7ebda7c2"},{url:"images/202211/wish-export.png",revision:"c695c558c514d9aa0d3903d5c41f63b9"},{url:"images/202301/achievement.png",revision:"42fd361ea1336daf7cd33bf187e62fa2"},{url:"images/202301/dev-plan-logo.png",revision:"5d69e71ecd6e1b553395e2306fff5f34"},{url:"images/202301/live-stat-tracking-logo.png",revision:"23a418c1d29dbbf0142085f2e8ad464d"},{url:"images/202301/spiral-abyss-record-logo.png",revision:"6d213b91803137c600bb27b973a7ee25"},{url:"images/202301/weapon-wiki-logo.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"pwa-icon/chrome-192.png",revision:"6d30f6750b36f3a261ad989d26feb899"},{url:"pwa-icon/chrome-512.png",revision:"920fa62caa82087b012351242dcc46c0"},{url:"pwa-icon/ios-152.png",revision:"b51617947bc9724dad89fa357624a671"},{url:"pwa-icon/ios-192.png",revision:"6d30f6750b36f3a261ad989d26feb899"},{url:"pwa-icon/ios-512.png",revision:"920fa62caa82087b012351242dcc46c0"},{url:"pwa-icon/ms-256.png",revision:"f877e44d42504adaac6f558be4d93b3a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map

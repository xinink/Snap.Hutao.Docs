if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let d={};const t=e=>a(e,c),l={module:{uri:c},exports:d,require:t};s[c]=Promise.all(i.map((e=>l[e]||t(e)))).then((e=>(r(...e),d)))}}define(["./workbox-dbb64b4e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/1-8-5-installer-fDv-n1gy.js",revision:"cc13e2b00164710d0ed707ea46e4a8ef"},{url:"assets/404.html-4gG-pjDc.js",revision:"603894850918e0d0424fa87be67b1b21"},{url:"assets/404.html-BN7k2oF5.js",revision:"9b14f04fb794ff2f1ecfaa9df7908c2b"},{url:"assets/achievements.html-Hvu3fWgj.js",revision:"f266295a68e578ace241cda2f0159fd2"},{url:"assets/achievements.html-JMe7Qzu6.js",revision:"a3c429667614108c6a8a6b18683249f7"},{url:"assets/achievements.html-kcAuXsP0.js",revision:"76c2dbdcfe623a0d38d9ad067deb89f3"},{url:"assets/achievements.html-RoTsuEDA.js",revision:"1f600c81d77d2c5e4a4ab2fe0cdcf857"},{url:"assets/achievements.html-V8f1JZ4x.js",revision:"f033a8bb81ff49f7867cd3fc905d0ba8"},{url:"assets/achievements.html-znd5Nj8s.js",revision:"76858d7b237cb33eca8e411d009b3fad"},{url:"assets/app-vx0_yYAp.js",revision:"b07f24e253b85f9af74b6ddc8ee0b687"},{url:"assets/bug-report.html--g-7DpmO.js",revision:"00f11a105a3c920275111392ef1b6a97"},{url:"assets/bug-report.html-30e7tvdz.js",revision:"61324ff1116721f5d9c31b667c447e2c"},{url:"assets/bug-report.html-9IxLsNDf.js",revision:"ffc553378daf04d034ccac0e86b4ec30"},{url:"assets/bug-report.html-E_wuhhpO.js",revision:"82459f1d2d53f926c023b412e282fb87"},{url:"assets/bug-report.html-Mk6pW5oW.js",revision:"2130f54b500a5e84266fa3510bcdc61c"},{url:"assets/bug-report.html-vNuWe5nd.js",revision:"11cbfc44af61497ca4fdbe190f8fa981"},{url:"assets/character-data.html-6mKpHZGi.js",revision:"1c6034d68adfc264c774707b435e1acd"},{url:"assets/character-data.html-BC7TvJLQ.js",revision:"89952cf074b9dca1ed1087592a33750b"},{url:"assets/character-data.html-Ch-APEB7.js",revision:"10cb8981697e454873bfbebc44259eda"},{url:"assets/character-data.html-cSadgdZy.js",revision:"a8b73b008d08158dac9b452a92d020f4"},{url:"assets/character-data.html-DkPcZLG3.js",revision:"72625e300a1ea76b8ee31337d24d868e"},{url:"assets/character-data.html-LWGlYJEG.js",revision:"5a12a4305767402f2a67931139bf1c15"},{url:"assets/character-wiki.html-7U1ep9E5.js",revision:"f0b9daf51a504887e108f4eaadd9ae45"},{url:"assets/character-wiki.html-8KzWB9wN.js",revision:"70c6f3cccdbee2ced73f34c359b2895d"},{url:"assets/character-wiki.html-ENYhhvml.js",revision:"244076395e98ed1137315048e5a4c35e"},{url:"assets/character-wiki.html-hnstWGIP.js",revision:"83c1326e6c617534574c1aa07f4d52fd"},{url:"assets/character-wiki.html-jit6jjIx.js",revision:"33d45ac5127d970d6fa0ac5a13c6f7de"},{url:"assets/character-wiki.html-KOA0ym15.js",revision:"45dfeb67f3004650e0d47c993292278d"},{url:"assets/community.html-4J1tygiA.js",revision:"acc605739074cc4a0254ea06a7dd35ee"},{url:"assets/community.html-9l4r1RlW.js",revision:"b3fb8c0d826cd4d2c383df95e0a22825"},{url:"assets/community.html-cS2Y4ptM.js",revision:"0a0fb90d99f88a7f76045df7148b3c53"},{url:"assets/community.html-LjJd_XVR.js",revision:"bbaf6cc8c49af27a7c8534c3b7f6db23"},{url:"assets/community.html-NHMsX5rW.js",revision:"7bb458efba376978e26943062def40da"},{url:"assets/community.html-NW-sOkzc.js",revision:"f9d0880da44a3b09a0220be4fe97c756"},{url:"assets/contribute.html-0f6WxvBo.js",revision:"8a28f7f049cee78129f1fddb1b96faf2"},{url:"assets/contribute.html-BcIr9L_z.js",revision:"b5036d813effaba554ba1134a77eee77"},{url:"assets/contribute.html-exB3Wctp.js",revision:"b66a0acf9ce684d6d34f8cd7ab8cc486"},{url:"assets/contribute.html-JknukCNY.js",revision:"819f477fa2827246da8246ee86d37b01"},{url:"assets/contribute.html-KH2URuZm.js",revision:"81d21ac183aac07f736710f664522d1b"},{url:"assets/contribute.html-xKAyOF4Q.js",revision:"9846299a1ea96df9d1356f59a4039638"},{url:"assets/dashboard.html-4OF2edqy.js",revision:"ea19d0fd020eec52024160ab7f678862"},{url:"assets/dashboard.html-KiuRgENx.js",revision:"3b9b4aa8030f674519f3ad05de373e54"},{url:"assets/dashboard.html-qZruBf6f.js",revision:"8bc950743697eb09b7ddab39859c1f85"},{url:"assets/dashboard.html-rZb_Hn52.js",revision:"879e603a1118fe6fe51153d343bf2224"},{url:"assets/dashboard.html-Ub568WG_.js",revision:"79eaa437f27d26d2078bac7223bc2a2f"},{url:"assets/dashboard.html-Xr9OsRLf.js",revision:"4d308dc409c68da4bab5d76b0b379480"},{url:"assets/dependency.html-blOfsmZj.js",revision:"eedd1c3b3dc4cc41672679796ad91a32"},{url:"assets/dependency.html-HvnxG8dR.js",revision:"bb01d703127fc9cb736de4636f9a2332"},{url:"assets/dependency.html-tFc9afIf.js",revision:"186f8c24ffe6ad19bbe1ffd36ff2376e"},{url:"assets/dependency.html-tkShPmr3.js",revision:"b3f266ac2fc4d622a3370f0e50290417"},{url:"assets/dependency.html-wTGSkXAW.js",revision:"51702ce765c635f67a3daef5de96a28b"},{url:"assets/dependency.html-XP1NpgRh.js",revision:"012d4c163c35009e6933e01da57024b2"},{url:"assets/develop-plan.html-aM_8XieT.js",revision:"3d481d49149f18e2fb716db6ff55dede"},{url:"assets/develop-plan.html-GuVs6M35.js",revision:"29f334588b2c57adf380c4315376c486"},{url:"assets/develop-plan.html-lXfDSib6.js",revision:"0a14f691066665ac06195f9c5f2557b9"},{url:"assets/develop-plan.html-tAXy7WYV.js",revision:"bff636015de3f4d7bd105dbd5f83c975"},{url:"assets/develop-plan.html-uQz2AYQl.js",revision:"7e232a1542e47ac854a83e870467728f"},{url:"assets/develop-plan.html-UsVCKjD4.js",revision:"1d7f22069f9868ac92793f3be3eab2c0"},{url:"assets/digitalocean-horizontal-0PPkcH8N.js",revision:"eaa4cbd043bf24493eda53d39fbaf796"},{url:"assets/docsearch-w40geAFS.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/exceptions.html-G-hi9Zit.js",revision:"c1916b41a1b2a7743642a77ed2721828"},{url:"assets/exceptions.html-kPLc0r42.js",revision:"51a4df43c4d57210f3a7ff7160f28b85"},{url:"assets/exceptions.html-kUdu6mja.js",revision:"7aa193ead01cc2c38ffacc88d61dd326"},{url:"assets/exceptions.html-l44owdVp.js",revision:"9cfb47816613fcd14be1318c47162131"},{url:"assets/exceptions.html-Lwdj-Wnf.js",revision:"3219a5b360453bee225e47868f2a65ea"},{url:"assets/exceptions.html-pMG7EfnB.js",revision:"eea2b997fbf5d08f499f10506502ab0b"},{url:"assets/FAQ.html-2JAoUr6r.js",revision:"313b5ea5bd1bb0a7c9d08d12709baa97"},{url:"assets/FAQ.html-fl-41ILp.js",revision:"caeb715b4419051decb8c20817087666"},{url:"assets/FAQ.html-HL0mfcxE.js",revision:"84c72d40295a6b3e7733e8605ae26798"},{url:"assets/FAQ.html-l1eVNMrP.js",revision:"d2101aa375eb081dc927261b77e64de7"},{url:"assets/FAQ.html-LBrXf0Yb.js",revision:"5b3f906b345db33dc502ec23cdaa7c44"},{url:"assets/FAQ.html-OGL2F50f.js",revision:"3e9e042bbbc521acca945821a03d2980"},{url:"assets/Gacha-system-and-export-principal.html-15ZwiTAK.js",revision:"d592d0b29e73d85b7c72ca5975df933d"},{url:"assets/Gacha-system-and-export-principal.html-HX30deO4.js",revision:"3d5f3e6b64cc74f66268cd6e20dd2350"},{url:"assets/Gacha-system-and-export-principal.html-pu0y2ozd.js",revision:"9a1759fc56d37cb057330929d1621de1"},{url:"assets/Gacha-system-and-export-principal.html-RUJtlvgk.js",revision:"75975dd160c18e4263bf2e4587dffab2"},{url:"assets/Gacha-system-and-export-principal.html-UpZr9si3.js",revision:"3d5f3e6b64cc74f66268cd6e20dd2350"},{url:"assets/Gacha-system-and-export-principal.html-WmjjEThz.js",revision:"3d5f3e6b64cc74f66268cd6e20dd2350"},{url:"assets/game-launcher.html-chEFF1uA.js",revision:"8e734a99cd97dfebf0ffd4c350371d4a"},{url:"assets/game-launcher.html-FTwFvJuZ.js",revision:"bc9032e17cfb5add27b98a6442becf1f"},{url:"assets/game-launcher.html-ftz3Fh6i.js",revision:"6d5f78b4462b3741763a900a1c8ae5fe"},{url:"assets/game-launcher.html-qqsXIoNV.js",revision:"696890282be45cdbbccf4dcfa5b16b4d"},{url:"assets/game-launcher.html-QZnB7Irj.js",revision:"c1f0fc5ea66dc62da4436c377d4ca337"},{url:"assets/game-launcher.html-TfYtuLDz.js",revision:"2a6673a9ac2574768f269e69f4565034"},{url:"assets/get-stoken-cookie-from-the-third-party.html-1LB7U9zF.js",revision:"d60d6bc8cf851fc6672b3ea36ac43796"},{url:"assets/get-stoken-cookie-from-the-third-party.html-2M7umtEJ.js",revision:"8c5c7ffe4bfccf0c87f862372bde0431"},{url:"assets/get-stoken-cookie-from-the-third-party.html-2VTWo3fX.js",revision:"701c0d14a11cae825cda355a1c693299"},{url:"assets/get-stoken-cookie-from-the-third-party.html-4mtLJ8xn.js",revision:"beff1eb88c5468c205b30656302f3804"},{url:"assets/get-stoken-cookie-from-the-third-party.html-HYNvmtVz.js",revision:"34a206a75f47474ce192fcd41a23aa09"},{url:"assets/get-stoken-cookie-from-the-third-party.html-JxczH2SN.js",revision:"49f0225fd6e5a1d76522e8e5d9bfb409"},{url:"assets/giscus-08zh9c_o.js",revision:"7a355a6881a3c86839ddda0adf6c24cd"},{url:"assets/hutao-API.html-2CkUwzEg.js",revision:"f39998a21836166dde143de1a22049a2"},{url:"assets/hutao-API.html-7y5lxAmD.js",revision:"9bf21572d6bad135e11bc0e68083e808"},{url:"assets/hutao-API.html-agOgT_Ns.js",revision:"341dbd64982731782aa2c3c38f475411"},{url:"assets/hutao-API.html-iY2LqxLo.js",revision:"cb96409c714af48d4251a6e92e16018a"},{url:"assets/hutao-API.html-ncrhCpoQ.js",revision:"01a9ad42a925f6a73bbfee5ad692ac0b"},{url:"assets/hutao-API.html-XkmO3JY_.js",revision:"6de07aab2a1603092f56b5bde53a6db4"},{url:"assets/hutao-settings.html-IzFiTzZp.js",revision:"6bcd398340891966ac4db713ba2fb3bd"},{url:"assets/hutao-settings.html-nbUzKH5g.js",revision:"a52c62b2592a120b28be1d2587dd1ae3"},{url:"assets/hutao-settings.html-QJU-auzW.js",revision:"1fb40982e07b81a0b97385fa657b86b2"},{url:"assets/hutao-settings.html-QUi2k55_.js",revision:"dc3a521dd0dedea64d034f0cdd3cbf8e"},{url:"assets/hutao-settings.html-sYmO4nEE.js",revision:"39f021acad24d4af99d478af23492ad5"},{url:"assets/hutao-settings.html-W5si100V.js",revision:"d1584c509c457468b2d25a518b8e5653"},{url:"assets/i18n.html-5ROoria_.js",revision:"e2d5de5deec343a5e5067393ccd37b5f"},{url:"assets/i18n.html-AXQlUJCc.js",revision:"a555ce5f427cd6e9ba816feb2c5c6b85"},{url:"assets/i18n.html-BL2viTZS.js",revision:"11f31e181195b9757019819df51e3ca0"},{url:"assets/i18n.html-DsLUfvqh.js",revision:"3ee75d3bad3427b067cf8d78ec17c6b0"},{url:"assets/i18n.html-kCiGFZIf.js",revision:"41e1187d42957aff22c4e0a5dbe89158"},{url:"assets/i18n.html-z8ZcNBuU.js",revision:"635288a9f158ed555b20342d798b6b34"},{url:"assets/index-7SG8bi1h.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index-QOy62Fup.js",revision:"fa112b5cda5ee3c969c504c6a3080b4c"},{url:"assets/index.html--WMoWowi.js",revision:"476661af20e9dd3eea68b9505637ccd0"},{url:"assets/index.html-08NxZXdP.js",revision:"5ef2585d906616de619a5a292ed3ca9d"},{url:"assets/index.html-1NwxSfqD.js",revision:"43aad676677a8c34f8ddc034222a456e"},{url:"assets/index.html-31GRtRXU.js",revision:"fc8085e7e4a17085b0d0ed208e2d56fc"},{url:"assets/index.html-3peFqPvr.js",revision:"8c434e13d5280ec061120b32538d17a1"},{url:"assets/index.html-4-Dn5A7r.js",revision:"93856c6f35d1ec7e93eac77b48433c4b"},{url:"assets/index.html-51BPMuys.js",revision:"0e686083b31525d041b7bac74aac2ae5"},{url:"assets/index.html-5CPHHkD1.js",revision:"1421a824dde4134f036c82284ba12255"},{url:"assets/index.html-6DH_oTp9.js",revision:"382fa66e56882d4ae8a8117c10a9730f"},{url:"assets/index.html-8-I3NFRC.js",revision:"b9f97560d4124febc514a6f512581039"},{url:"assets/index.html-8cI4TK7y.js",revision:"79413ee81915c4197b57ef861111b01b"},{url:"assets/index.html-BI4wKv5L.js",revision:"90bc37a0bd0aab7b7fa8c141f0dfefa4"},{url:"assets/index.html-dKG0RaMM.js",revision:"b7f0897962246817bee60ba78cdc8f35"},{url:"assets/index.html-DvlY73Dw.js",revision:"f68ee03a04d060e12ded3ede37cc2c4b"},{url:"assets/index.html-hceTS62w.js",revision:"3e0bcdd58f23eec11ef1d194e38e29b0"},{url:"assets/index.html-HckHOvPr.js",revision:"476661af20e9dd3eea68b9505637ccd0"},{url:"assets/index.html-Iya3YwGc.js",revision:"4fb9650a9eedd05dd851e4b9b1f33625"},{url:"assets/index.html-kBWIxxYR.js",revision:"5e64a602cdcf46b09da0e92615e47ec3"},{url:"assets/index.html-KfSEqYdg.js",revision:"b5bcfb29169558883d2511425da08531"},{url:"assets/index.html-kqrFu1jp.js",revision:"56742812c1d5617559d24874ad124eea"},{url:"assets/index.html-l8ziNogK.js",revision:"e45bd58bc27985581d14f9563b3a4b21"},{url:"assets/index.html-m593ZBgP.js",revision:"87bed5a1e43aacf70d81cf1cdf38fcc5"},{url:"assets/index.html-MOaQ-iDn.js",revision:"d5a048db98348f6401abc96721458bc5"},{url:"assets/index.html-msMSXY6d.js",revision:"bf371ee0d0f3a8d3ba393626896467dc"},{url:"assets/index.html-nR8xFeoV.js",revision:"b3a5f9e34c83963c96c9bfffe5916c09"},{url:"assets/index.html-NT5rtM1Y.js",revision:"a7480fab3be84605161e9e253aa0115d"},{url:"assets/index.html-o07RPWc5.js",revision:"636023a156194e9530bba2f3ed7f5bbf"},{url:"assets/index.html-PzGe01T0.js",revision:"8a06d7c039488b7117aae9b38ecc39ba"},{url:"assets/index.html-QfMMNG-7.js",revision:"5e64a602cdcf46b09da0e92615e47ec3"},{url:"assets/index.html-qM8kHgqg.js",revision:"8c434e13d5280ec061120b32538d17a1"},{url:"assets/index.html-szaOs0Cd.js",revision:"e18655f2c3c57b21a0bf42126a74c693"},{url:"assets/index.html-Tdsh5Nu7.js",revision:"73851d8ab9aac749238fd112a6cc334a"},{url:"assets/index.html-TGpC8hfL.js",revision:"7a5216f731600d26374903fb4eb50706"},{url:"assets/index.html-Tq9C8Cnx.js",revision:"7ef1b47e50bb3c895c7de2a0d74a6405"},{url:"assets/index.html-V9TcAmUD.js",revision:"1421a824dde4134f036c82284ba12255"},{url:"assets/index.html-vgaVoGNw.js",revision:"c7c6b6cc3abedf643fcf4d90d415e42f"},{url:"assets/index.html-vyEtfqFH.js",revision:"8a06d7c039488b7117aae9b38ecc39ba"},{url:"assets/index.html-ZnuyHLAi.js",revision:"747416faebf9ebb0fc489665428a3de1"},{url:"assets/join.html-AmQ8ZYZL.js",revision:"7bef4b66293db9cbe1bd4f95ae8e3fbf"},{url:"assets/join.html-FjgvRiGq.js",revision:"5f00cceac1d23d15eb65fde85337ddcc"},{url:"assets/join.html-nYKLCgzc.js",revision:"32c85b807530042f244aed53b7a0e240"},{url:"assets/join.html-RQ530g2Q.js",revision:"4b91b264dc3060113483a6bc7970ae35"},{url:"assets/known-issue.html-0WSi489R.js",revision:"b10050016722d06bf8f528472ff5c71f"},{url:"assets/known-issue.html-1qHpsvMl.js",revision:"276aa4975db5b43c9121f1d578dae97c"},{url:"assets/known-issue.html-cYo9RleV.js",revision:"fb1326dc092e253799f5c832e13dd157"},{url:"assets/known-issue.html-DNoBVqDD.js",revision:"0b20caa725d928692191de3d5d257dcb"},{url:"assets/known-issue.html-lNFayP-J.js",revision:"0c94d890855e767b553a96d211b94361"},{url:"assets/known-issue.html-ZZBDsd8X.js",revision:"51d78796104fb2bb38379c18d6562cdc"},{url:"assets/menu.html-7JPxnfTv.js",revision:"7d6685c68cbc9afc62cf143b9ee25046"},{url:"assets/menu.html-91gZA5LR.js",revision:"5c71b21968f8e6b6f431990c3094b2d0"},{url:"assets/menu.html-D_vBuBsG.js",revision:"61220444da123582d827a03e0c052d84"},{url:"assets/menu.html-PMM7XVxB.js",revision:"2ca4d74413435ba9154f2d1ec3acbf45"},{url:"assets/menu.html-SwRe_XYI.js",revision:"b608c9de3c8a26b326a2cc60704ccf0f"},{url:"assets/menu.html-XEvlWsjb.js",revision:"40e06038085d88604ddbc159877b3298"},{url:"assets/mhy-account-switch.html-BseRn-b_.js",revision:"4269e0bd41edccce5313623fa3b48e36"},{url:"assets/mhy-account-switch.html-Dv1D2Y8e.js",revision:"a6a3c2898592680aa8272d88f9a3d192"},{url:"assets/mhy-account-switch.html-fztb4WBP.js",revision:"8d31b3cbde43e7c326261911e4aaad61"},{url:"assets/mhy-account-switch.html-gc1kVupZ.js",revision:"4c194a889e7179c3c4054c3746de16e5"},{url:"assets/mhy-account-switch.html-qQfXYNgO.js",revision:"c5ae2bbc32e8c8930c96db283de6c9b2"},{url:"assets/mhy-account-switch.html-T6plzSTQ.js",revision:"eb2daef1b16efb52e45e73ba13b4b5e4"},{url:"assets/monster-wiki.html-cHCufG9q.js",revision:"199063580824646fc51b5af655971d25"},{url:"assets/monster-wiki.html-sCQ_r3V5.js",revision:"a59428a7f8d45245cd3e4dce70516a13"},{url:"assets/monster-wiki.html-uw2Cs5Zt.js",revision:"23472a633535156c16ac14f33c5367df"},{url:"assets/monster-wiki.html-vAkBM7Uh.js",revision:"aef5b9ee31b4989f063a4e48ea523e89"},{url:"assets/monster-wiki.html-VzPLJ6hb.js",revision:"3239c9a8825a0eabe5917b2f875a225e"},{url:"assets/monster-wiki.html-X5CqnnfU.js",revision:"1c012a516ccc619f43bf0f67efd88c53"},{url:"assets/MSEdge-7LOvFlfM.js",revision:"664a8be7f006b82a3d2eac682334d154"},{url:"assets/photoswipe.esm-i2ohwMnJ.js",revision:"e9ff503527474b1afe53a1ee900448a3"},{url:"assets/platform.html-aknMUUPM.js",revision:"2f59672d33676fd55d6e389624762a61"},{url:"assets/platform.html-Mjgv0R1d.js",revision:"11325487d6ad3a066c0a801cb103e97e"},{url:"assets/platform.html-Ncy_W2OD.js",revision:"b6fc6ebe7895aa1fa8d28cb9d10a5699"},{url:"assets/platform.html-NdwTkbjp.js",revision:"676f07beb12c8ac1260e7fbfb0a3a795"},{url:"assets/platform.html-whNV1xoi.js",revision:"7a01dbf35fd431691779f55d2fc9f1c6"},{url:"assets/platform.html-Y-5eQATW.js",revision:"69229a745d0e39a91ecaa6629fe584da"},{url:"assets/plugin-vue_export-helper-x3n3nnut.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/privacy-notice.html-2W3h_HNC.js",revision:"3a598aa970d31c705ea982e1189ae305"},{url:"assets/privacy-notice.html-ac40S5xD.js",revision:"e0ae93c0374fa33094d8a2879598d892"},{url:"assets/privacy-notice.html-drbrYEp7.js",revision:"c99ee82c7c07b8d86b18d9abf153f866"},{url:"assets/privacy-notice.html-Ml3L6iCe.js",revision:"f7d5436f56de7f75cd0d8f7607f9d429"},{url:"assets/privacy-notice.html-r_xf1D78.js",revision:"4d1e95c1df4aa834b498a193dcfa6034"},{url:"assets/privacy-notice.html-xRC5eGAN.js",revision:"4829a946f292ec0a98104e37ce115722"},{url:"assets/project.html-JsWtB61k.js",revision:"1f2a65bfe0ae250e7ba94df49e9c3c8b"},{url:"assets/project.html-L4QUQh-r.js",revision:"a1d8194a0f9c730e1c0a594665ed007d"},{url:"assets/project.html-PsPKUC6h.js",revision:"e0814360bac66b908f95fd2db3daaab0"},{url:"assets/project.html-pUc4qsAf.js",revision:"63b683efb46924443f940bd6046b2809"},{url:"assets/project.html-UlRWS8PK.js",revision:"03e0a497b99c25a480ecdcede9ea044f"},{url:"assets/project.html-xSTQ5zi3.js",revision:"3900e5eae1f58c04ac3bc62fc8c968ad"},{url:"assets/quick-start.html-d5zHhf2K.js",revision:"b93f3dd431414fc2bceafcf75d300f36"},{url:"assets/quick-start.html-eftHAapi.js",revision:"73a2d3cc8f7eeb5fb70e3f9fa7e4bdad"},{url:"assets/quick-start.html-hmybfrIx.js",revision:"9fcc0f3af759e377c04e87da18c1e33a"},{url:"assets/quick-start.html-IsTVuz9e.js",revision:"52f1a2caff20b4b32d9edef36e11db5b"},{url:"assets/quick-start.html-PbBV9v81.js",revision:"8723ad37cbffaf472212d0918e6a7450"},{url:"assets/quick-start.html-xwLPleaN.js",revision:"8bb8abb4fd0ba32582e755f464785320"},{url:"assets/real-time-notes.html-AY-ENjJC.js",revision:"5a98763bee39aacac6b31267c8afb32d"},{url:"assets/real-time-notes.html-gR_mZt8x.js",revision:"657e01047346b3c0418ca65c97286882"},{url:"assets/real-time-notes.html-iRwW_P0M.js",revision:"0ffcd7d7aa5268e233fe24269fe9116a"},{url:"assets/real-time-notes.html-k742duwf.js",revision:"2d446d22495b1da8bc1bf983f4434432"},{url:"assets/real-time-notes.html-NFnmojar.js",revision:"0bc2dfd2f651d818260c6233ea2149db"},{url:"assets/real-time-notes.html-OI2lHrxg.js",revision:"03b5264ad4ed9e84468c554182153f1f"},{url:"assets/setup.html-0svUVq0Q.js",revision:"18eebf4c87ca9b025e3283d1a1b334cd"},{url:"assets/setup.html-2y_00S8a.js",revision:"398badef64c03f03ea70b83c97cca4a7"},{url:"assets/setup.html-6ffOMtI5.js",revision:"d320e9cea40ad234420859435f88e6a5"},{url:"assets/setup.html-A6Bnh9MZ.js",revision:"398badef64c03f03ea70b83c97cca4a7"},{url:"assets/setup.html-FXESu7Ov.js",revision:"b01404a7c622bdb50dcd3ff04840be69"},{url:"assets/setup.html-GYlOUeSZ.js",revision:"109f221793b28cb02239a25a67db1e90"},{url:"assets/side-load.html-BxggwaXM.js",revision:"07f79a7dfd995f957f92a55214161c3d"},{url:"assets/side-load.html-j0WTphhv.js",revision:"96cfde54a88207de78d06dd48c07e54b"},{url:"assets/side-load.html-m98t1nQL.js",revision:"96cfde54a88207de78d06dd48c07e54b"},{url:"assets/side-load.html-nS3lTAuZ.js",revision:"96cfde54a88207de78d06dd48c07e54b"},{url:"assets/side-load.html-rBxveLJg.js",revision:"444478640417f3dffaf042120c498c3b"},{url:"assets/side-load.html-uonWi9Z_.js",revision:"4bea72aba8ea3d0c63ed8ed471418263"},{url:"assets/star-request.html-iKhlFdj6.js",revision:"47d04a1c1bd5b5a201999a165e6fec1c"},{url:"assets/star-request.html-q8CD9rg2.js",revision:"23edd8d7a319441752803e5b88e72ad3"},{url:"assets/star-request.html-q9ovUnhc.js",revision:"7a44bdac9592de7eb75852819a40ec4a"},{url:"assets/star-request.html-RagB9Kum.js",revision:"0c3c59e9428311f55a74f0153ed88c2a"},{url:"assets/star-request.html-S22PxhL8.js",revision:"a1bdfc09cdaac4ffe31a52e6fbb3222f"},{url:"assets/star-request.html-sDpbsPBx.js",revision:"78ad70f08e4546db6c8bb9068f3461b6"},{url:"assets/style-tiw-hGM-.css",revision:"3a96edeb7fb37d4ca120ca2775aca5e6"},{url:"assets/style-w40geAFS.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/symposium1.html-HaoKbAlP.js",revision:"9e38d23bebd819ee8112e2306c0f6999"},{url:"assets/symposium1.html-m4tQ0qSe.js",revision:"4116e36513100c207ad8b39bf50292d9"},{url:"assets/symposium2.html-hxqgEphH.js",revision:"c3865f0a8996c72603659f9f263b6d6c"},{url:"assets/symposium2.html-pI_wmYA-.js",revision:"4737a434d776df0d0bee1391970bb013"},{url:"assets/tos.html-KgmTeVTY.js",revision:"13a04394b82acb457532e1c1124d5a85"},{url:"assets/tos.html-QfwTw7fP.js",revision:"4350d945f356c3b2646949e588601e4c"},{url:"assets/tos.html-w-Gi2UU4.js",revision:"f4e9b09203ef52b39319d49879dffcb5"},{url:"assets/tos.html-xBa_Uw7q.js",revision:"11112b7788e1adb157e5b23035187a7a"},{url:"assets/tos.html-xff7F3vq.js",revision:"24b5a988cc3099218328e195b55a8560"},{url:"assets/tos.html-zaaU1zwQ.js",revision:"92742d062e83dca7511c2d3c1685d3fc"},{url:"assets/uninstall.html-0_bpxEfA.js",revision:"79c89872d1522e49c916b37f8b4c1378"},{url:"assets/uninstall.html-4htLUKCV.js",revision:"4ace377482cd6e23f64776f52a165871"},{url:"assets/uninstall.html-Bip2dh7n.js",revision:"4f8a91d489cb9cb6832e65d43c990d9c"},{url:"assets/uninstall.html-p0G6RGyp.js",revision:"2557e2ea682c1e6ff32a91d6d5690795"},{url:"assets/uninstall.html-u8pp71VN.js",revision:"193c4df26e3589259e62d0bf1b3fe49c"},{url:"assets/uninstall.html-ucBAWjJO.js",revision:"bedbb094b0f7bd221c59e3664f19a8c3"},{url:"assets/update-log.html-_OGSNe4E.js",revision:"a553c47964b7c24d71ebaef8761e0120"},{url:"assets/update-log.html-3svXjwot.js",revision:"5db1b89afb271712654abec414c616b6"},{url:"assets/update-log.html-5RNpL4eS.js",revision:"74ac7e87aacd55243399a2bf36a669fe"},{url:"assets/update-log.html-auQ9fEM7.js",revision:"c0d585777511cc69f33faa78114d8e84"},{url:"assets/update-log.html-kzpU-pNN.js",revision:"eee4e46cdc7aaa4f0b3a4454569a7d1d"},{url:"assets/update-log.html-UoFNcbhQ.js",revision:"cb877163fe5438e41bd5c7e6698ec6b7"},{url:"assets/version-1-9-0-breaking-changes.html-1orvw_cl.js",revision:"cff9e521c4d199f1c8e0bcd856151b5f"},{url:"assets/version-1-9-0-breaking-changes.html-f84DJFhA.js",revision:"702c2c426990c97802e9124d7e9fbc2f"},{url:"assets/version-1-9-0-breaking-changes.html-iR1AzukF.js",revision:"3269a3cd40c3e3f0e99460adb946b316"},{url:"assets/version-1-9-0-breaking-changes.html-PeDTRVCJ.js",revision:"6a83ef46c6feb6f859e48acebe72a882"},{url:"assets/version-1-9-0-breaking-changes.html-sHRPv8Eo.js",revision:"c8fe0333e63ebaee4a39a48ebee3ac54"},{url:"assets/version-1-9-0-breaking-changes.html-y56tOBwV.js",revision:"3269a3cd40c3e3f0e99460adb946b316"},{url:"assets/weapon-wiki.html-0g3vz0vh.js",revision:"a61482bbdcc3b6ecaf8294151cedcfa1"},{url:"assets/weapon-wiki.html-by_bBHbA.js",revision:"632e0c023d6180e2d517844482af4a4d"},{url:"assets/weapon-wiki.html-dR4C9TXz.js",revision:"e4af453d9707c2915257281a7afed9b5"},{url:"assets/weapon-wiki.html-Pgj4C96Y.js",revision:"6fbce6f322337a6cc030d55a4c2dc4f7"},{url:"assets/weapon-wiki.html-SAR3sSV0.js",revision:"8882396d80a62d4dd78133ff962b74a7"},{url:"assets/weapon-wiki.html-toujagSl.js",revision:"5c6d447f3ee7a670d687c54af6a47b48"},{url:"assets/wish-export.html-_70ETTtl.js",revision:"bc1a4fc2f978d9251106e9a256e2031c"},{url:"assets/wish-export.html-14EwE_wO.js",revision:"b69a776abec5fb239a215c0d443df0ca"},{url:"assets/wish-export.html-7xBFGDjw.js",revision:"5a3f16eedc5dad900baf77de4ea79822"},{url:"assets/wish-export.html-CRaIMSat.js",revision:"cf3043aedd27174ed80ec635b19e05e6"},{url:"assets/wish-export.html-Kcak7MCg.js",revision:"1de9dee4e63e770567fa10e04f73b875"},{url:"assets/wish-export.html-ZRD2egu8.js",revision:"49cfae3fef9d9562438a7622856b95bd"},{url:"fontlist/demo.css",revision:"c470b271d96640b2d527d864d838d550"},{url:"fontlist/iconfont.css",revision:"47f9418c83e516e2f92fffa11e06ff9f"},{url:"fontlist/iconfont.js",revision:"787c135beed0ae93c145ae2de3cbfefe"},{url:"fontlist/iconfont.ttf",revision:"6d90ead1de012ad82077c2a898dcc136"},{url:"fontlist/iconfont.woff",revision:"c50542a321198d3a49a56ba9f50923f6"},{url:"fontlist/iconfont.woff2",revision:"a917e0d0985aaabe49b9bd5ad48bd270"},{url:"images/202312/1Password-logo.svg",revision:"70b83e6026ab134a2f7836d315201592"},{url:"images/202312/C_sharp.svg",revision:"bdaccca278378c33d51a37613e6acd09"},{url:"images/202312/community.svg",revision:"a6416747c570bdf5443e2d03094adf2b"},{url:"images/202312/digitalocean-horizontal.svg",revision:"cc43a74e8c264d19bfd6575d9fd4e67d"},{url:"images/202312/discord.svg",revision:"1e0d18bad882e0adf80fd212bf879243"},{url:"images/202312/documents.svg",revision:"6cdb5625f4c6bd4c0abb725dd0a3332b"},{url:"images/202312/github-mark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"images/202312/gitlab-logo.svg",revision:"d06c9d4a634d4f0345fe4e35add3f933"},{url:"images/202312/jihulab.svg",revision:"16fdc7c7a02de0bf63a48c0e498d30fb"},{url:"images/202312/tencent.svg",revision:"b18acecbd9c07541fd34d6f07645c6ed"},{url:"images/202312/uptime-kuma.svg",revision:"e4ed8e71ba8f67c89b305aab8f641790"},{url:"images/202312/uptimerobot-logo.svg",revision:"77e3e93be900d9d9b4d9ad69ce69662b"},{url:"images/202312/video-editing.svg",revision:"be4022972dace1067ae8218338311658"},{url:"images/202312/Vue.js.svg",revision:"9a45fc7689867939804c469bfcd17784"},{url:"upload-abyss-data.js",revision:"e3c5df0c4de06f2bd47d19d95f478c8e"},{url:"index.html",revision:"35bcd488434c36a981b37947d8e2f980"},{url:"404.html",revision:"47e88ab63a18d291f172208e39367d33"},{url:"images/202209/Achievements.png",revision:"067cff70d53656b2e3e878df949823f6"},{url:"images/202209/HeroImageLogo.png",revision:"fb8507e3eaccbd6408874dcf10973d62"},{url:"images/202209/IndexIconAchievements.png",revision:"ea409f5a87b1c7666121ead606e323ef"},{url:"images/202209/IndexIconCharacters.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202209/IndexIconMihoyoBBS.png",revision:"b9c679888c01a50e6b126f9dae0d50d1"},{url:"images/202209/IndexIconWeapons.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202209/IndexIconWish.png",revision:"0b4e790c4cb1eeba7473ad8e1b14ac23"},{url:"images/202209/SGLogoUpgrade64.png",revision:"1b95d8969049e0b31c0d89eeface0b89"},{url:"images/202209/wish-export.png",revision:"ef07fa6499c22d00c78dc182ad3cbab5"},{url:"images/202210/1.1.7-Update-Error-Fix.png",revision:"1f1958198ca4510713648cff6c43fcd5"},{url:"images/202210/1.1.7-Update-Error.png",revision:"3e04317e974e1cec550096b7ea88d708"},{url:"images/202210/account-upgrade.png",revision:"52b1c5695109142c9496bb6e14a9c2d1"},{url:"images/202210/HttpRequestException.jpg",revision:"878a57ab9fe5de6b774d7e91776987ab"},{url:"images/202210/hutao-api-submit.png",revision:"6a201ae85f470f3bb70e868137524830"},{url:"images/202210/hutao-api.png",revision:"5bd260fe9b5c18a41765c1126cfd91ff"},{url:"images/202210/hutao-login.png",revision:"21af43587bacf56bf40cadc884381c49"},{url:"images/202211/character-data-display.png",revision:"0cd41e7a02ee864ff12f0f69c926b79f"},{url:"images/202211/character-data-logo.png",revision:"04cc28833ed4c2108ba215fbc33325bf"},{url:"images/202211/character-wiki-logo.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202211/character-wiki.png",revision:"002ee49f019709942ae1b3dc541d05e4"},{url:"images/202211/game-launcher-logo.png",revision:"a5a5d6d5a09926689f8a61db4b24c2df"},{url:"images/202211/hutao-api-logo.png",revision:"feb8ae3e6c4099e0b7804e3d7ebda7c2"},{url:"images/202211/wish-export.png",revision:"c695c558c514d9aa0d3903d5c41f63b9"},{url:"images/202301/achievement.png",revision:"42fd361ea1336daf7cd33bf187e62fa2"},{url:"images/202301/dev-plan-logo.png",revision:"5d69e71ecd6e1b553395e2306fff5f34"},{url:"images/202301/live-stat-tracking-logo.png",revision:"23a418c1d29dbbf0142085f2e8ad464d"},{url:"images/202301/spiral-abyss-record-logo.png",revision:"6d213b91803137c600bb27b973a7ee25"},{url:"images/202301/weapon-wiki-logo.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202308/Calculator_Icon.png",revision:"7fb5a148e1ae7f98c4848f3601a158fb"},{url:"images/202308/Character_WIKI_Icon.png",revision:"efb6186847a600de2a4a429052d1c77b"},{url:"images/202308/Game_Launcher_Icon.png",revision:"3d1f2ce60f927919a4120b9e2206dca1"},{url:"images/202308/head-back.png",revision:"627872a2d3a6e0a9175362a2bce9df75"},{url:"images/202308/highlights-head.png",revision:"95af9689fe9b2659f4e1e8c6ad365d87"},{url:"images/202308/hoyolab-miyoushe-Icon.png",revision:"e06a266f679fb74b6259579846410d8c"},{url:"images/202308/My_Character_Icon.png",revision:"394b9ce7a3f8d92109dac083c1e916c8"},{url:"images/202308/UI_BtnIcon_Gacha.png",revision:"912a76ce2d4579c72ada39c79237279d"},{url:"images/202308/UI_ChapterIcon_Hutao.png",revision:"86791e433554edf6652ee9dfd0d4ef69"},{url:"images/202308/Weapon_WIKI_Icon.png",revision:"3f20fdf346dafbd370054f04ec00b8cf"},{url:"images/202309/head-back2.png",revision:"68cab275f36686f7032e495c58cc47df"},{url:"images/202309/security.png",revision:"1853661345ceb924817aae9ebdd7ec1f"},{url:"images/202312/1-8-5-installer.png",revision:"aa697cf352e40598be53ffd543378a4f"},{url:"images/202312/genshin-pizza-helper-logo.webp",revision:"ef87a086cb120946887220bb9d325cd7"},{url:"images/202312/miao-plugin-logo.webp",revision:"376109bfb0be20f6e6552a2faa6de961"},{url:"images/202312/MSEdge.webp",revision:"36c15ad3c07c5d30788df358be4de586"},{url:"images/202312/signpath-logo.png",revision:"b60b1d15de8d94117e1e1bd504951589"},{url:"images/202312/ysin-logo.png",revision:"8bf3e90190298fe08c6bf8001e29c6da"},{url:"pwa-icon/chrome-144.png",revision:"24dd1f208ca63bef5c104659ae25c0e8"},{url:"pwa-icon/chrome-192.png",revision:"984b2a8dfd5dfb1cecfb73bc940bf070"},{url:"pwa-icon/chrome-48.png",revision:"a424e2c1b597db8e320cb3184c78ae23"},{url:"pwa-icon/chrome-512.png",revision:"06ecfca5b4c625d580608e04850f9f29"},{url:"pwa-icon/chrome-72.png",revision:"b9c2449570f275fd5dd34b887aa04697"},{url:"pwa-icon/chrome-96.png",revision:"64e04325061a5fa6de31f4b52bb7498f"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map

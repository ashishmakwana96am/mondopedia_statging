if(!self.define){let e,i={};const a=(a,n)=>(a=new URL(a+".js",n).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let c={};const s=e=>a(e,t),d={module:{uri:t},exports:c,require:s};i[t]=Promise.all(n.map((e=>d[e]||s(e)))).then((e=>(r(...e),c)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"5e9fbe378041923bb309ffc14b977bac"},{url:"/_next/static/chunks/114-8e8dace096219151.js",revision:"yYDBCMH24K61ygk5VMsXP"},{url:"/_next/static/chunks/145-d3612ae3bbc38caf.js",revision:"yYDBCMH24K61ygk5VMsXP"},{url:"/_next/static/chunks/177-c499054cd66a0320.js",revision:"yYDBCMH24K61ygk5VMsXP"},{url:"/_next/static/chunks/3-0da7befd4d8c39f9.js",revision:"yYDBCMH24K61ygk5VMsXP"},{url:"/_next/static/chunks/315-23eb17097c9ad495.js",revision:"yYDBCMH24K61ygk5VMsXP"},{url:"/_next/static/chunks/461-6f748f2f525398f4.js",revision:"yYDBCMH24K61ygk5VMsXP"},{url:"/_next/static/chunks/473-544462440ccf5c3e.js",revision:"yYDBCMH24K61ygk5VMsXP"},{url:"/_next/static/chunks/474-db616dd1d2e1bb35.js",revision:"yYDBCMH24K61ygk5VMsXP"},{url:"/_next/static/chunks/704-f2e201c3947e3d25.js",revision:"yYDBCMH24K61ygk5VMsXP"},{url:"/_next/static/chunks/938-c8799d86d5e1d97d.js",revision:"yYDBCMH24K61ygk5VMsXP"},{url:"/_next/static/chunks/app/%5Bcategory%5D/%5Bslug%5D/page-6c39972a887fb61d.js",revision:"yYDBCMH24K61ygk5VMsXP"},{url:"/_next/static/chunks/app/%5Bcategory%5D/page-dedf836aed39b444.js",revision:"yYDBCMH24K61ygk5VMsXP"},{url:"/_next/static/chunks/app/about-us/page-9003b46109113be6.js",revision:"yYDBCMH24K61ygk5VMsXP"},{url:"/_next/static/chunks/app/author/%5Bauthor%5D/page-5ce4d03ae37e9a82.js",revision:"yYDBCMH24K61ygk5VMsXP"},{url:"/_next/static/chunks/app/layout-7cc453452d72d021.js",revision:"yYDBCMH24K61ygk5VMsXP"},{url:"/_next/static/chunks/app/link/page-5fc9ab31fcecb82e.js",revision:"yYDBCMH24K61ygk5VMsXP"},{url:"/_next/static/chunks/app/not-found-49c9fe907be0f6a4.js",revision:"yYDBCMH24K61ygk5VMsXP"},{url:"/_next/static/chunks/app/page-b06554fc486ffb50.js",revision:"yYDBCMH24K61ygk5VMsXP"},{url:"/_next/static/chunks/fd9d1056-e0f272ecfdaa94bf.js",revision:"yYDBCMH24K61ygk5VMsXP"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"yYDBCMH24K61ygk5VMsXP"},{url:"/_next/static/chunks/main-3e77380106cab22b.js",revision:"yYDBCMH24K61ygk5VMsXP"},{url:"/_next/static/chunks/main-app-fe5eb2c64d3342a6.js",revision:"yYDBCMH24K61ygk5VMsXP"},{url:"/_next/static/chunks/pages/_app-98cb51ec6f9f135f.js",revision:"yYDBCMH24K61ygk5VMsXP"},{url:"/_next/static/chunks/pages/_error-e87e5963ec1b8011.js",revision:"yYDBCMH24K61ygk5VMsXP"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-5f1f7ca3e1040601.js",revision:"yYDBCMH24K61ygk5VMsXP"},{url:"/_next/static/css/324638bec70da7ee.css",revision:"324638bec70da7ee"},{url:"/_next/static/css/455380e8d74e6160.css",revision:"455380e8d74e6160"},{url:"/_next/static/css/521607d810738fde.css",revision:"521607d810738fde"},{url:"/_next/static/css/5e0abab529824947.css",revision:"5e0abab529824947"},{url:"/_next/static/css/98b3088c6ca484dd.css",revision:"98b3088c6ca484dd"},{url:"/_next/static/media/BRHendrix-Black.40e18021.ttf",revision:"40e18021"},{url:"/_next/static/media/BRHendrix-Black.af435bff.eot",revision:"af435bff"},{url:"/_next/static/media/BRHendrix-Black.f87fe301.woff",revision:"f87fe301"},{url:"/_next/static/media/BRHendrix-Black.ff3256f6.woff2",revision:"ff3256f6"},{url:"/_next/static/media/BRHendrix-BlackItalic.908dcd11.ttf",revision:"908dcd11"},{url:"/_next/static/media/BRHendrix-BlackItalic.b1dee41c.woff",revision:"b1dee41c"},{url:"/_next/static/media/BRHendrix-BlackItalic.c4ae5b32.woff2",revision:"c4ae5b32"},{url:"/_next/static/media/BRHendrix-BlackItalic.d28f1b9a.eot",revision:"d28f1b9a"},{url:"/_next/static/media/BRHendrix-Bold.19c85dcc.woff",revision:"19c85dcc"},{url:"/_next/static/media/BRHendrix-Bold.23f02afb.eot",revision:"23f02afb"},{url:"/_next/static/media/BRHendrix-Bold.6e947495.woff2",revision:"6e947495"},{url:"/_next/static/media/BRHendrix-Bold.c0112b0b.ttf",revision:"c0112b0b"},{url:"/_next/static/media/BRHendrix-BoldItalic.16293699.woff",revision:"16293699"},{url:"/_next/static/media/BRHendrix-BoldItalic.42c7191b.eot",revision:"42c7191b"},{url:"/_next/static/media/BRHendrix-BoldItalic.70a9b18f.ttf",revision:"70a9b18f"},{url:"/_next/static/media/BRHendrix-BoldItalic.79fcdff0.woff2",revision:"79fcdff0"},{url:"/_next/static/media/BRHendrix-ExtraLight.115d4259.woff",revision:"115d4259"},{url:"/_next/static/media/BRHendrix-ExtraLight.43b500f5.woff2",revision:"43b500f5"},{url:"/_next/static/media/BRHendrix-ExtraLight.830a494a.eot",revision:"830a494a"},{url:"/_next/static/media/BRHendrix-ExtraLight.867c8f8b.ttf",revision:"867c8f8b"},{url:"/_next/static/media/BRHendrix-ExtraLightItalic.8aedfb07.woff2",revision:"8aedfb07"},{url:"/_next/static/media/BRHendrix-ExtraLightItalic.92101278.eot",revision:"92101278"},{url:"/_next/static/media/BRHendrix-ExtraLightItalic.af9de0bc.woff",revision:"af9de0bc"},{url:"/_next/static/media/BRHendrix-ExtraLightItalic.c8f6524b.ttf",revision:"c8f6524b"},{url:"/_next/static/media/BRHendrix-Light.332db9ac.woff",revision:"332db9ac"},{url:"/_next/static/media/BRHendrix-Light.7931887e.ttf",revision:"7931887e"},{url:"/_next/static/media/BRHendrix-Light.c17e7324.eot",revision:"c17e7324"},{url:"/_next/static/media/BRHendrix-Light.c9c68848.woff2",revision:"c9c68848"},{url:"/_next/static/media/BRHendrix-LightItalic.5461643d.eot",revision:"5461643d"},{url:"/_next/static/media/BRHendrix-LightItalic.9c1d98d8.woff",revision:"9c1d98d8"},{url:"/_next/static/media/BRHendrix-LightItalic.dbdf0ee2.ttf",revision:"dbdf0ee2"},{url:"/_next/static/media/BRHendrix-LightItalic.ee55d97c.woff2",revision:"ee55d97c"},{url:"/_next/static/media/BRHendrix-Medium.46c17a64.ttf",revision:"46c17a64"},{url:"/_next/static/media/BRHendrix-Medium.8005aad5.eot",revision:"8005aad5"},{url:"/_next/static/media/BRHendrix-Medium.bebe1516.woff2",revision:"bebe1516"},{url:"/_next/static/media/BRHendrix-Medium.d64e4db1.woff",revision:"d64e4db1"},{url:"/_next/static/media/BRHendrix-MediumItalic.1664beed.woff",revision:"1664beed"},{url:"/_next/static/media/BRHendrix-MediumItalic.6c3c3b36.ttf",revision:"6c3c3b36"},{url:"/_next/static/media/BRHendrix-MediumItalic.e827b1c6.eot",revision:"e827b1c6"},{url:"/_next/static/media/BRHendrix-MediumItalic.f2237060.woff2",revision:"f2237060"},{url:"/_next/static/media/BRHendrix-Regular.17137c24.ttf",revision:"17137c24"},{url:"/_next/static/media/BRHendrix-Regular.a2a08188.woff2",revision:"a2a08188"},{url:"/_next/static/media/BRHendrix-Regular.ab2bd36d.woff",revision:"ab2bd36d"},{url:"/_next/static/media/BRHendrix-Regular.f49e0412.eot",revision:"f49e0412"},{url:"/_next/static/media/BRHendrix-RegularItalic.03d18ce8.eot",revision:"03d18ce8"},{url:"/_next/static/media/BRHendrix-RegularItalic.3b8b391f.woff",revision:"3b8b391f"},{url:"/_next/static/media/BRHendrix-RegularItalic.5eddbc8a.woff2",revision:"5eddbc8a"},{url:"/_next/static/media/BRHendrix-RegularItalic.6118fd33.ttf",revision:"6118fd33"},{url:"/_next/static/media/BRHendrix-SemiBold.5f609bab.woff2",revision:"5f609bab"},{url:"/_next/static/media/BRHendrix-SemiBold.88cbe135.eot",revision:"88cbe135"},{url:"/_next/static/media/BRHendrix-SemiBold.8bcbdd87.ttf",revision:"8bcbdd87"},{url:"/_next/static/media/BRHendrix-SemiBold.ebbd79a4.woff",revision:"ebbd79a4"},{url:"/_next/static/media/BRHendrix-SemiBoldItalic.166e1a3f.eot",revision:"166e1a3f"},{url:"/_next/static/media/BRHendrix-SemiBoldItalic.5332bb75.ttf",revision:"5332bb75"},{url:"/_next/static/media/BRHendrix-SemiBoldItalic.d8e17562.woff2",revision:"d8e17562"},{url:"/_next/static/media/BRHendrix-SemiBoldItalic.e1609a28.woff",revision:"e1609a28"},{url:"/_next/static/media/BRHendrix-Thin.81d94103.eot",revision:"81d94103"},{url:"/_next/static/media/BRHendrix-Thin.8a239835.ttf",revision:"8a239835"},{url:"/_next/static/media/BRHendrix-Thin.c2bb3f24.woff2",revision:"c2bb3f24"},{url:"/_next/static/media/BRHendrix-Thin.f8b1870d.woff",revision:"f8b1870d"},{url:"/_next/static/media/BRHendrix-ThinItalic.3777f7db.woff",revision:"3777f7db"},{url:"/_next/static/media/BRHendrix-ThinItalic.68e509ea.ttf",revision:"68e509ea"},{url:"/_next/static/media/BRHendrix-ThinItalic.af07b94c.woff2",revision:"af07b94c"},{url:"/_next/static/media/BRHendrix-ThinItalic.d6a516a8.eot",revision:"d6a516a8"},{url:"/_next/static/media/remixicon.004ea44c.eot",revision:"004ea44c"},{url:"/_next/static/media/remixicon.2d973cb4.woff",revision:"2d973cb4"},{url:"/_next/static/media/remixicon.7d90ab33.woff2",revision:"7d90ab33"},{url:"/_next/static/media/remixicon.a38e90d5.ttf",revision:"a38e90d5"},{url:"/_next/static/yYDBCMH24K61ygk5VMsXP/_buildManifest.js",revision:"a1b7599199e2e8c82f2c6bcf8d8aca61"},{url:"/_next/static/yYDBCMH24K61ygk5VMsXP/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/font/BRHendrix-Black.eot",revision:"4124619875b130bbdc62645824690bbf"},{url:"/font/BRHendrix-Black.ttf",revision:"3584413e4d6a774e3735961ad48f21e3"},{url:"/font/BRHendrix-Black.woff",revision:"a6490404b600776913823363407e8029"},{url:"/font/BRHendrix-Black.woff2",revision:"d6e5729c59df9859cc949bc7ab800f84"},{url:"/font/BRHendrix-BlackItalic.eot",revision:"b330535793d2a6cad554f722ae166016"},{url:"/font/BRHendrix-BlackItalic.ttf",revision:"eda2a04c9a850714fb70fb6602c3bfb0"},{url:"/font/BRHendrix-BlackItalic.woff",revision:"c9791ac802f684418ccdd3f63551ed8d"},{url:"/font/BRHendrix-BlackItalic.woff2",revision:"0db678696b3ec9fdd8c27d47e51e720a"},{url:"/font/BRHendrix-Bold.eot",revision:"64b712f471eae413c2ea65ea3a0f86ad"},{url:"/font/BRHendrix-Bold.ttf",revision:"51a2812a7ffa6f277bfde9ae2221d568"},{url:"/font/BRHendrix-Bold.woff",revision:"54ef8f8fe1d61c2762637ceb327d0391"},{url:"/font/BRHendrix-Bold.woff2",revision:"41ae4ed34e60d05acf049845f664a86d"},{url:"/font/BRHendrix-BoldItalic.eot",revision:"836ba85fd91b1fddfdc9c04f906a17d6"},{url:"/font/BRHendrix-BoldItalic.ttf",revision:"40cb0260a6ee049e2e210106da58baff"},{url:"/font/BRHendrix-BoldItalic.woff",revision:"b141ed93b161f585584390c41889b338"},{url:"/font/BRHendrix-BoldItalic.woff2",revision:"6417ba4abb130f4dfc65be97abc38dd1"},{url:"/font/BRHendrix-ExtraLight.eot",revision:"5ff25af186d7b9fb15d2b199056a85b9"},{url:"/font/BRHendrix-ExtraLight.ttf",revision:"db5e4047ec68476dfc03a525b393fa7b"},{url:"/font/BRHendrix-ExtraLight.woff",revision:"84def045d42ca3b14a631a028af49617"},{url:"/font/BRHendrix-ExtraLight.woff2",revision:"632508a641261e9287a9bb255ccd7ee9"},{url:"/font/BRHendrix-ExtraLightItalic.eot",revision:"e97a695d8a2a86f5f60dd627a847b231"},{url:"/font/BRHendrix-ExtraLightItalic.ttf",revision:"cb8e9e67b0bd13d99f07483b83868158"},{url:"/font/BRHendrix-ExtraLightItalic.woff",revision:"041116f4357c4caacc8af3572a7bc235"},{url:"/font/BRHendrix-ExtraLightItalic.woff2",revision:"872a124c80efb6adc5a7ae58171dae50"},{url:"/font/BRHendrix-Light.eot",revision:"da1175e20cb70cbb93b6243419875879"},{url:"/font/BRHendrix-Light.ttf",revision:"1b844ca371d585b53389dd335825c088"},{url:"/font/BRHendrix-Light.woff",revision:"d7db2f94a1a9392789659b97f568d230"},{url:"/font/BRHendrix-Light.woff2",revision:"2a4c1dfb484f092d01781c2b577cc969"},{url:"/font/BRHendrix-LightItalic.eot",revision:"ee6db5aae6e7c96e31fc586a49492d9d"},{url:"/font/BRHendrix-LightItalic.ttf",revision:"5002f7c4d55c3efaa6902b34c99c9fc5"},{url:"/font/BRHendrix-LightItalic.woff",revision:"4b2157071048143b013b5092d37df9bf"},{url:"/font/BRHendrix-LightItalic.woff2",revision:"aa6410bc61ce9cea3d4d85a52f3c60bf"},{url:"/font/BRHendrix-Medium.eot",revision:"e2b93cf7febe27f22bb01042f0298cc8"},{url:"/font/BRHendrix-Medium.ttf",revision:"44100b2548b42d8fcdac269fe974f5a5"},{url:"/font/BRHendrix-Medium.woff",revision:"1ce5271d9e6a82bdf55944a7f49e508f"},{url:"/font/BRHendrix-Medium.woff2",revision:"c715e10adfd312eb42780f172c172f8d"},{url:"/font/BRHendrix-MediumItalic.eot",revision:"6ec7d59be77b9cf81af73a0358e19baa"},{url:"/font/BRHendrix-MediumItalic.ttf",revision:"9613e1b8b869c99183d6e6f259ac90c1"},{url:"/font/BRHendrix-MediumItalic.woff",revision:"d118c19000ccc8aee8313130310b8958"},{url:"/font/BRHendrix-MediumItalic.woff2",revision:"dd229d33277f837f6f9dcc10cc3b121c"},{url:"/font/BRHendrix-Regular.eot",revision:"2d741b7039cea8c8c4e34aed032121f6"},{url:"/font/BRHendrix-Regular.ttf",revision:"cb5b51dd3bbca4031a704286560b82ee"},{url:"/font/BRHendrix-Regular.woff",revision:"019c60672fe3c0fedd77b363d4e4d2e8"},{url:"/font/BRHendrix-Regular.woff2",revision:"50edda8821b77685949bdc5e584a15a4"},{url:"/font/BRHendrix-RegularItalic.eot",revision:"aefa0410a6744b9241bb182e351a05ee"},{url:"/font/BRHendrix-RegularItalic.ttf",revision:"6f4ec9e11312703a4f73480487dd0ca3"},{url:"/font/BRHendrix-RegularItalic.woff",revision:"06480806450d2101c4d25b69b13ff3b3"},{url:"/font/BRHendrix-RegularItalic.woff2",revision:"ef99ee21c5f8441bc6ad2cba030f359f"},{url:"/font/BRHendrix-SemiBold.eot",revision:"7f6704e5fc9c36bd9b8bae0a8f0a3d13"},{url:"/font/BRHendrix-SemiBold.ttf",revision:"b754615137d9e214e7d771a41ca5543e"},{url:"/font/BRHendrix-SemiBold.woff",revision:"2695f4228e4d805ce45ecbf60af256ff"},{url:"/font/BRHendrix-SemiBold.woff2",revision:"8fb58507eb8cf7ab64b18f5742ac3834"},{url:"/font/BRHendrix-SemiBoldItalic.eot",revision:"e594905ca31a360f85d13f480a068029"},{url:"/font/BRHendrix-SemiBoldItalic.ttf",revision:"6ee78af4c677fa72a531ac41e412a5c7"},{url:"/font/BRHendrix-SemiBoldItalic.woff",revision:"ce7d6b01ce5ccdc4dfdd4a8ea3c3911d"},{url:"/font/BRHendrix-SemiBoldItalic.woff2",revision:"1eb6a83dffa60aba849d54cfc1b1432c"},{url:"/font/BRHendrix-Thin.eot",revision:"c236f446d65b18cb5d49b8de9f2b7bbf"},{url:"/font/BRHendrix-Thin.ttf",revision:"c6e1f2a0fd711aa11529ffa1aa0a9a32"},{url:"/font/BRHendrix-Thin.woff",revision:"00f9ff11ffb2e0cb1e729062ee131142"},{url:"/font/BRHendrix-Thin.woff2",revision:"e3719ed8883c9489c74febf9370deadc"},{url:"/font/BRHendrix-ThinItalic.eot",revision:"b98462b6c96c10ffaa817026f4a8aa9f"},{url:"/font/BRHendrix-ThinItalic.ttf",revision:"3b4419f33bda978a5c2bd63ceaf38bc7"},{url:"/font/BRHendrix-ThinItalic.woff",revision:"30046b3c7491e999f6288c75b6356878"},{url:"/font/BRHendrix-ThinItalic.woff2",revision:"364636b6cda5dc3d811497421da79192"},{url:"/font/font.css",revision:"c678c75675d15f9c472c3d4baaf6ccec"},{url:"/icons/icon-128x128.png",revision:"69fdd3dd78481d7b37ae60358ac9bffe"},{url:"/icons/icon-144x144.png",revision:"b03368129a4fb74fc7f011535b799af0"},{url:"/icons/icon-152x152.png",revision:"b00f0d27e7cc8b18c95b716f393acf40"},{url:"/icons/icon-16x16.png",revision:"257d5e92b606581d916ae9c18348ce09"},{url:"/icons/icon-192x192.png",revision:"5d5b36437062ed21094b601fb86685fa"},{url:"/icons/icon-32x32.png",revision:"5ab0c38122c0f9fe64cab1967582ad61"},{url:"/icons/icon-384x384.png",revision:"12862786d7cc2b0c9f8b7bfe0bbd01df"},{url:"/icons/icon-512x512.png",revision:"bbed47793d5291d75a2fe1c35fbf26b0"},{url:"/icons/icon-72x72.png",revision:"e0d0f3885bc4f0d4bab920db8ffe2bfe"},{url:"/icons/icon-96x96.png",revision:"a9c4d012c058030d8caf6b7e699654e4"},{url:"/icons/star.png",revision:"67d4a8f40801c3866a598b656de58c4e"},{url:"/images/add_icon.svg",revision:"5b7527b062ec52e9bf9d76590fc0af3d"},{url:"/images/amazon.png",revision:"ae1637beb70c959656badb0d2c50cb8a"},{url:"/images/architect.png",revision:"44d5008dad81caa9f242f7e7552c0501"},{url:"/images/author-page.png",revision:"04f46b2e61782ae2340d9f15e8abaaec"},{url:"/images/call.svg",revision:"cc11640cf118582dacb28af3ca314bef"},{url:"/images/cat-bg.png",revision:"fb31b617a8c2aea83da47dbea0854d0d"},{url:"/images/cat1.png",revision:"37eb89f7faa2c44f79c0a9e3b8c84820"},{url:"/images/cat2.png",revision:"1e0f644676afda4e39e37d516cfa371b"},{url:"/images/cat3.png",revision:"21c0767b728364dd3d89ab0923348ab8"},{url:"/images/cat4.png",revision:"559de0a3e3c748aef7371a8e5b09c75b"},{url:"/images/cat5.png",revision:"d18bf5df9a1ba1254dbecce3d4bd1e83"},{url:"/images/cat6.png",revision:"4df9577e6fa93e4f35712ec50fd5f2d5"},{url:"/images/cat7.png",revision:"4a62ad0d4796a5a0dbeeadd167518d3a"},{url:"/images/cat8.png",revision:"2014a0518fb4b9e334163588661d760d"},{url:"/images/chart.png",revision:"758004b5e68aa84f591cee54227135bd"},{url:"/images/check.svg",revision:"af973ee2ff7f349b63a0ab67c1321544"},{url:"/images/chevron.png",revision:"5b3872209d162c6b70002b2916102581"},{url:"/images/close-circle-line.png",revision:"2a99f578465c3f9394e5b474f2a889ce"},{url:"/images/close.svg",revision:"7ed7c766031bf0b62d2748df74dc5636"},{url:"/images/compare.png",revision:"824b1081d3b62c8ba163acd9e187b87a"},{url:"/images/controller-2.png",revision:"ed363178c2f06e9bdf6ead6196731a60"},{url:"/images/controller.png",revision:"b2c227cbe83bc5a27c59d2bf3b11232d"},{url:"/images/cross.png",revision:"6226052b551d05c3e8f2c8cd6f2ea232"},{url:"/images/double-arrow.png",revision:"92042f69bf7f15c7a6acf37a8e7c978e"},{url:"/images/graph-bar.png",revision:"2af8d11b935c717c0d7ff05be76be187"},{url:"/images/hero_banner.png",revision:"92ec63257bf5a0de2299750d17ec373e"},{url:"/images/how-work.png",revision:"bb7998ecb6855b68e3940d97a8a2f3a2"},{url:"/images/kitchen.png",revision:"133258288af6fcb9cdb738cae08d8637"},{url:"/images/location.svg",revision:"6910973dc6fc1b2c26e100ecc4d9fb1b"},{url:"/images/logo.svg",revision:"dd1dc4e90072d0de2eb6712035b34819"},{url:"/images/message.svg",revision:"0ea33f08b9136332d1ed916e8438c0ce"},{url:"/images/mobile-hero-bg.png",revision:"4229247a86cb67a70332995242b440c6"},{url:"/images/nofound.png",revision:"eff8445034458ed9e616a1a0e10e2175"},{url:"/images/p1.png",revision:"09ae438fcb78738636bc855f652f4d66"},{url:"/images/p2.png",revision:"65d8b3f3fcec7156c2d7f9076d2dea3a"},{url:"/images/p3.png",revision:"6c6565c85cc114a929274e342a6cac36"},{url:"/images/p4.png",revision:"bae529447c831fd03507cfa923cb36ab"},{url:"/images/p5.png",revision:"c119f204fd062d664741c74db184f9a0"},{url:"/images/p6.png",revision:"d311aea1d804c41232a00a64143a458f"},{url:"/images/pattern.png",revision:"76630068f24078d9a3e804e75aaba82b"},{url:"/images/profile.png",revision:"b303666955c5976002410cd130230867"},{url:"/images/review-image.png",revision:"b663ea80145fb71373c8771b9a183084"},{url:"/images/review-image2.png",revision:"2ae3d470e1c30653690798d01cb8dff0"},{url:"/images/review-image3.png",revision:"27b9190e641ac09ccedf6edb6188e710"},{url:"/images/review.png",revision:"740f9aa38986df5184272fe41a4f7598"},{url:"/images/right-one.svg",revision:"5e67dffa3e951c9119912f53a81b3507"},{url:"/images/side-img.png",revision:"4a85e9fa26875783f7af4dec8fb74b1f"},{url:"/images/sponsor1.png",revision:"c17fcf6a69b9ec2a2622d7b0c0454a0b"},{url:"/images/sponsor2.png",revision:"f2258d95e4e7093cc5dcede5bf7f0665"},{url:"/images/sponsor3.png",revision:"a9365cc164c5d8304057945169ce4479"},{url:"/images/sponsor4.png",revision:"148dafb3d8676e512dbf92b2f9b41477"},{url:"/images/sponsor5.png",revision:"7439fec25538294b8c43f528014b920e"},{url:"/images/sponsor6.png",revision:"69e2bfaf382b2abbf722aa72efee41cd"},{url:"/images/tab.png",revision:"7ebdf05a3b3c70b13fd2140d54e12118"},{url:"/images/tested.svg",revision:"474fd56c89a15400266b9eebd5d97221"},{url:"/images/user.png",revision:"09950fe21cb91dc4e19175a5ccb367fc"},{url:"/images/vs.svg",revision:"1347395d5e1550ab972643f63973b796"},{url:"/manifest.json",revision:"d159e8d577d16fa237c655cb6d6b18cf"},{url:"/robots.txt",revision:"6c0c0b02c59a0e5b43917105fbeae507"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:a,state:n})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

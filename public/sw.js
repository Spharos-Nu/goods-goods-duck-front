if (!self.define) {
  let e,
    s = {}
  const a = (a, i) => (
    (a = new URL(a + '.js', i).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = a), (e.onload = s), document.head.appendChild(e)
        } else (e = a), importScripts(a), s()
      }).then(() => {
        let e = s[a]
        if (!e) throw new Error(`Module ${a} didn’t register its module`)
        return e
      })
  )
  self.define = (i, c) => {
    const n =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href
    if (s[n]) return
    let t = {}
    const r = (e) => a(e, n),
      u = { module: { uri: n }, exports: t, require: r }
    s[n] = Promise.all(i.map((e) => u[e] || r(e))).then((e) => (c(...e), t))
  }
}
define(['./workbox-b1b34251'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/app-build-manifest.json',
          revision: '324a98c05643dfb0ee591c34be6a8513',
        },
        {
          url: '/_next/static/chunks/0069da5d-3e36eb04482cf870.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/03102c3f-a8997eec6442a165.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/06ff0236-a9f1dfeb558dc577.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/0ab17c2b-237abbdd19c47364.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/1279-7db967f6948bc101.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/1534-44216bece7478a8a.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/263bbe58-bc36c9ea26b30d40.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/2c5441ed-49bbc05794884747.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/3489197a-3f05c9f45309a610.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/3f4e57d2-7a66a6a44c3a97e0.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/416218ec-9b82ec063826676e.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/5464-2b5d2cb64dc758b8.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/5541-e1d747e8429ebc24.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/5941-c63847f7e59abae2.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/5961-785b0f154f058ad9.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/6253-47fbb84c1d9f17e0.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/63dc9855-075bbaa894a0e895.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/6a7b169c-8732057961bf03ab.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/7071-746ce5cbc72a485a.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/709-7690b7430c14ce4f.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/7413-ee533035c4106647.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/8042fdf4-40be255204f2015c.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/8269-849ff7c5fbcde370.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/8372-2c33a88a10370249.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/8541-14b58dda0906b0c8.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/8804-d639d842c73c1fed.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/907-adb0ba56a48f7cc9.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/9095-3df3f1d549151461.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/9184-53248cfe7a81ebe2.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/9565-054b1a36b1b57fb9.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/9664-b6d5ece0aa3502c6.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/9877-945136ea39cafd00.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/ab3ca5da-c9b081a81239e33d.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/(chat)/chat-list/layout-ecd923eb0901e62c.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/(chat)/chat-list/page-9cc00baa45effe7c.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/(chat)/chat-room/%5BchatRoomId%5D/page-071b5350de4bc6b5.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/(complain)/goods-complain/page-1197ff9cddcf1e59.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/(complain)/layout-cf9e32f7802804b0.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/(complain)/user-complain/page-3944cc19639f4205.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/(goods)/goods/%5BgoodsCode%5D/layout-72797a6fd6129390.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/(goods)/goods/%5BgoodsCode%5D/page-67db847795811711.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/(goods)/goods/layout-05d53842ad934c6f.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/(goods)/goods/page-3f1761f9fdd9a499.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/(goods)/registration/page-ddcbabc9f258cd5e.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/(goods)/seller/page-b1c6fe65e87d4885.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/(main)/animation/page-00ab3606b88d542d.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/(main)/baseball/page-6d45b0c6175de8da.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/(main)/idol/page-65616d92bd7e00b7.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/(main)/layout-29fa777fc67315fd.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/(main)/notification/page-e748a5c3eaa6e84c.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/(main)/page-3d922283c3af079a.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/(member)/find-info/page-a28c1d7e11e041eb.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/(member)/join/page-bd719451f18940b9.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/(member)/layout-b8af33aa2eca738b.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/(member)/login/page-b7d7a630383fe0d6.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-27b11fbba4dcd543.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/duck-point/charge/page-c5d096a3651be6f9.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/duck-point/details/page-6e9ce540b0a11e91.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/duck-point/layout-2e5acbb8ada115ba.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/layout-14d996f40141ce65.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/mypage/bid/page-8dd6225e65db7a2d.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/mypage/layout-122991c1a392dae0.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/mypage/like/page-6cf2b74a74f424fc.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/mypage/notice/%5BnoticeId%5D/page-35082fef87fb1ebc.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/mypage/notice/page-ebec1c9406f1548a.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/mypage/page-4f8b2fb5eba53e53.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/mypage/reviews/page-05f15775635162b6.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/mypage/sell/page-4aaf8060dbb01d06.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/mypage/settings/page-12d3531c42b31e1c.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/mypage/update-password/page-d0270485cbc99b9b.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/mypage/update-profile/page-d2b6cf553ed65d5a.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/mypage/winning-bid/page-0973a7b14551ba34.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/app/review/%5BtradeId%5D/page-1891dccc0690b36c.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/c516f14e-5b9f4e16b5d11302.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/de2bcb84-3352e3874a98c0f0.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/framework-9c75c43ff7b67089.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/main-09c719cdeb3042fa.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/main-app-09fd68f819717e65.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/pages/_app-b31c2f3949fee873.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/pages/_error-a4a054c7bd637474.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js',
          revision: '79330112775102f91e1010318bae2bd3',
        },
        {
          url: '/_next/static/chunks/webpack-da8ce416a3e69bf4.js',
          revision: 'wVZWO62LMeCDIxCskuyF8',
        },
        {
          url: '/_next/static/css/15c2e24fb38c3279.css',
          revision: '15c2e24fb38c3279',
        },
        {
          url: '/_next/static/css/2ebb2afbe58660e0.css',
          revision: '2ebb2afbe58660e0',
        },
        {
          url: '/_next/static/css/cf493a8e9dde5eae.css',
          revision: 'cf493a8e9dde5eae',
        },
        {
          url: '/_next/static/media/30cd8f99d32fa6e8-s.woff2',
          revision: 'e5c1b944d9e3380a062bf911e26728a3',
        },
        {
          url: '/_next/static/media/36afab82570d46f2-s.p.woff2',
          revision: '89e9fd21dd55cebd3f5ee1dfcb5fdee0',
        },
        {
          url: '/_next/static/media/6b5949cea416cbec-s.woff2',
          revision: '49ae8484eae36f970a54ea3f90bfef3d',
        },
        {
          url: '/_next/static/media/830087706657ee0c-s.woff2',
          revision: '2ac088578e0e51e2fb14bc66a702b901',
        },
        {
          url: '/_next/static/media/8888a3826f4a3af4-s.p.woff2',
          revision: '792477d09826b11d1e5a611162c9797a',
        },
        {
          url: '/_next/static/media/b957ea75a84b6ea7-s.p.woff2',
          revision: '0bd523f6049956faaf43c254a719d06a',
        },
        {
          url: '/_next/static/media/banner2.3d0a24ea.png',
          revision: '8973b1f7757dc6bb527818175f9c2da4',
        },
        {
          url: '/_next/static/media/basicImage.987dbdc9.png',
          revision: 'e5a7f5dfea4428d548046345f29a8139',
        },
        {
          url: '/_next/static/media/c4f6d62acfbd94a2-s.woff2',
          revision: 'fbaccf16b5420fbc46534b4bcab47719',
        },
        {
          url: '/_next/static/media/c89e2f129f61ebdb-s.woff2',
          revision: '52b9b67fb64ff755e0fbb360c2933042',
        },
        {
          url: '/_next/static/media/f5767adec246cdc1-s.woff2',
          revision: '7a1c6501aa2b3327c1cf556362a851cb',
        },
        {
          url: '/_next/static/media/icon-192x192.578eb250.png',
          revision: '12f3b4ffe08d348dc38358d739dbb6e4',
        },
        {
          url: '/_next/static/media/profile.c296fd4c.png',
          revision: '9a00dfb6f7aa161041e9b4447c1ecd8c',
        },
        {
          url: '/_next/static/wVZWO62LMeCDIxCskuyF8/_buildManifest.js',
          revision: '6fbad686f1d634bff4a437ec93afbf9f',
        },
        {
          url: '/_next/static/wVZWO62LMeCDIxCskuyF8/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/fonts/Dovemayo_gothic.ttf',
          revision: 'ae2fcd5356e023ffa2edab25d2cdbe5e',
        },
        {
          url: '/icons/icon-114x114.png',
          revision: '105d1a171f88ab8454c9094bd7ed7ee2',
        },
        {
          url: '/icons/icon-120x120.png',
          revision: '96b94663b1c369db9dad37b917dec353',
        },
        {
          url: '/icons/icon-144x144.png',
          revision: '8c646cb8cd9c8c38873e5f510652f06a',
        },
        {
          url: '/icons/icon-152x152.png',
          revision: '31401096367cab65745f3281aea00502',
        },
        {
          url: '/icons/icon-192x192.png',
          revision: '12f3b4ffe08d348dc38358d739dbb6e4',
        },
        {
          url: '/icons/icon-256x256.png',
          revision: '4d4322e1b4a25bf30324286e58d787d9',
        },
        {
          url: '/icons/icon-384x384.png',
          revision: '617d8bd990f88fb485fd51fdf47e9df6',
        },
        {
          url: '/icons/icon-512x512.png',
          revision: '7593aeca5b87d952850cc71501a268ee',
        },
        {
          url: '/icons/icon-57x57.png',
          revision: '3eaa97b4631c97a894c9a43ef98340e9',
        },
        {
          url: '/icons/icon-60x60.png',
          revision: '5c76162e24b063a2a9afe34c77f96901',
        },
        {
          url: '/icons/icon-72x72.png',
          revision: 'e52050e5f6fde11dc7416e93eb930f6a',
        },
        {
          url: '/icons/icon-76x76.png',
          revision: '2bb2def0345e68378d0b143a0b6e2513',
        },
        {
          url: '/icons/tempProfile.png',
          revision: 'cb3a0a5f154cb62f84e971ff48e44ef2',
        },
        {
          url: '/images/appleLoginBtn.png',
          revision: '4dc526a7755cd41d3c63cbb887ae5b7b',
        },
        {
          url: '/images/basicImage.png',
          revision: 'e5a7f5dfea4428d548046345f29a8139',
        },
        {
          url: '/images/googleLoginBtn.png',
          revision: '004c126129038e7c8308b62e04927b5b',
        },
        {
          url: '/images/kakaoLoginBtn.png',
          revision: '6945794b1e2006420e38ee44870732e4',
        },
        {
          url: '/images/naverLoginBtn.png',
          revision: 'b28219c051ab9f96a5d26d3910c0051f',
        },
        { url: '/next.svg', revision: '8e061864f388b47f33a1c3780831193e' },
        {
          url: '/svgs/category/animation.svg',
          revision: 'd196e707c58b5f3b4eaa1ea357ff6c05',
        },
        {
          url: '/svgs/category/animationColor.svg',
          revision: '9bf1750009082b5d81c5925442d94153',
        },
        {
          url: '/svgs/category/animationGo.svg',
          revision: '4a0df6c8c000ead1f3350a083baf8119',
        },
        {
          url: '/svgs/category/baseball.svg',
          revision: '77d22eb8c090b046b9d34d15c96404c9',
        },
        {
          url: '/svgs/category/baseballColor.svg',
          revision: '4a675f44a3b72b7d2f19c083a331189b',
        },
        {
          url: '/svgs/category/baseballGo.svg',
          revision: '4a0df6c8c000ead1f3350a083baf8119',
        },
        {
          url: '/svgs/category/kpop.svg',
          revision: '67bd6980359405d2b4cd77b63a47d783',
        },
        {
          url: '/svgs/category/kpopColor.svg',
          revision: '173cae603de7818469ef61bbbef54870',
        },
        {
          url: '/svgs/category/kpopGo.svg',
          revision: '000ba2a550148e6a3eda8b00f3ee6a7a',
        },
        {
          url: '/svgs/duck/basicProfileDuck.svg',
          revision: 'ae329e36e47315ed2b95c4cb3e71b9da',
        },
        {
          url: '/svgs/duck/biddingConfirmDuck.svg',
          revision: '795042a2cf64d3b08e8b92e6ea486b5e',
        },
        {
          url: '/svgs/duck/biddingDuck.svg',
          revision: 'ebe6675333e64223acbecc0100e6eda9',
        },
        {
          url: '/svgs/duck/descriptionDuck.svg',
          revision: '3966eec70598559a4263fbf30d9d3400',
        },
        {
          url: '/svgs/duck/duckOne.svg',
          revision: 'f7b18503e6e9be79ae9205bc68cec62e',
        },
        {
          url: '/svgs/duck/etcDuck.svg',
          revision: '6a67409cfc2621221a9b8a28a4adace5',
        },
        {
          url: '/svgs/duck/mainDuckPoint.svg',
          revision: 'a13da7286ed2ea3586d656c80d89fc98',
        },
        {
          url: '/svgs/duck/mannerDuckLevel1.svg',
          revision: 'c1229da036bca72df63b9d18e98ce1f5',
        },
        {
          url: '/svgs/duck/mannerDuckLevel2.svg',
          revision: 'faf3939df603a5b52236b538dd75408b',
        },
        {
          url: '/svgs/duck/mannerDuckLevel3.svg',
          revision: '032a4c03fc70a15ed41d2fc5f017cd43',
        },
        {
          url: '/svgs/duck/mannerDuckLevel4.svg',
          revision: '0b9a665ea983c8e39b59a763b33afd19',
        },
        {
          url: '/svgs/duck/mannerDuckLevel5.svg',
          revision: '13efd99e8008b9de210890c2e77023d8',
        },
        {
          url: '/svgs/duck/noImageDuck.svg',
          revision: '487a9012cbc18035f3e03d325ce1a8e1',
        },
        {
          url: '/svgs/duck/nonProfileDuck.svg',
          revision: '0dc4b02b42063333978871032e8dd544',
        },
        {
          url: '/svgs/duck/prostrateDuck.svg',
          revision: '2a1abc02a0eb724859d1b8e44bd4876b',
        },
        {
          url: '/svgs/duck/sampleDuck.svg',
          revision: '0c7f46f0618381f9738f2775291e24c3',
        },
        {
          url: '/svgs/header/below_arrow.svg',
          revision: '55403349689124071b6fab02150cbf23',
        },
        {
          url: '/svgs/header/logo.svg',
          revision: '5c5fe31577aaa1f2728c436aa9defaa4',
        },
        {
          url: '/svgs/header/notification.svg',
          revision: '0f61ec67e9e3d065a79d89d3f2c02c1f',
        },
        {
          url: '/svgs/header/search.svg',
          revision: '1ae46a78234101d43bbe6ca09f3622a8',
        },
        {
          url: '/svgs/icon/backBtn.svg',
          revision: 'd1996754fa7b7d2e9f73ff900c3a9c20',
        },
        {
          url: '/svgs/icon/checkFalse.svg',
          revision: '4426c2d47ecd31d067e75808bebeb86f',
        },
        {
          url: '/svgs/icon/checkTrue.svg',
          revision: '4bc0d59e2e99348f81fca1b026266065',
        },
        {
          url: '/svgs/icon/homeColor.svg',
          revision: '05417db0a4655a628fb4ad536db4248a',
        },
        {
          url: '/svgs/icon/likeFalse.svg',
          revision: 'd9c5283ee2039de2b6bb072831634432',
        },
        {
          url: '/svgs/icon/likeTrue.svg',
          revision: '15160f62f33edf67d50b454a97e24292',
        },
        {
          url: '/svgs/icon/nextBtn.svg',
          revision: '619ff433cd68515ead49c921ff3546d3',
        },
        {
          url: '/svgs/icon/prevBtn.svg',
          revision: '4111bd796f770a0464b43d4ffb678f07',
        },
        {
          url: '/svgs/icon/profileImgBtn.svg',
          revision: '2b237a4743ce9e2744a62cdcb6b703ce',
        },
        {
          url: '/svgs/icon/remove.svg',
          revision: '89188ba23c2befa084042da91ba426ad',
        },
        {
          url: '/svgs/icon/verificationTime.svg',
          revision: '25d9ae27a83fdebc3daa34e0214eeaec',
        },
        {
          url: '/svgs/intro/introDuck.svg',
          revision: '09b29698a74e6419bc62e5286931406b',
        },
        {
          url: '/svgs/intro/title.svg',
          revision: '328dd9f1f89b2bfcb95585f8ae4ef91d',
        },
        {
          url: '/svgs/loginContour.svg',
          revision: 'c432350a4ef66d3e98fbba096a2b42c0',
        },
        {
          url: '/svgs/loginDuck.svg',
          revision: '7813d75c5cb6d10707fabb273c18d5c1',
        },
        {
          url: '/svgs/nav/chat.svg',
          revision: 'd16a6aba731e85de6654e6b293e878c8',
        },
        {
          url: '/svgs/nav/fullinquiry.svg',
          revision: 'cd0942eab725096ee5d2fd6be673463b',
        },
        {
          url: '/svgs/nav/home.svg',
          revision: 'ce4c35e44044f917574181fae0e6f768',
        },
        {
          url: '/svgs/nav/like.svg',
          revision: '7408b690587bad1b0e72da5998972867',
        },
        {
          url: '/svgs/nav/mypage.svg',
          revision: 'e4d7f5db16b42798aa128779a88db87c',
        },
        { url: '/vercel.svg', revision: '61c6b19abff40ea7acd577be818f3976' },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: i,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET',
    )
})

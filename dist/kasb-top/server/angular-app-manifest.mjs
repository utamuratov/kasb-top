
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-XPKMMV7R.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WLRPAT73.js",
      "chunk-YXV7UAZK.js",
      "chunk-MAGCBL5F.js"
    ],
    "route": "/test"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-R5EWMOA6.js",
      "chunk-YXV7UAZK.js",
      "chunk-MAGCBL5F.js"
    ],
    "route": "/result"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11030, hash: '383b938ad0b38969449c2eac1de8d6920d1a6603a7cc7bc9c6002bf783feb96f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3176, hash: 'adf01b376e5fed76987d04d527016a58596a7311a9e9d11cfc5e74722ca567db', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 52015, hash: 'e18dabcfe51bfe7a3afe121ed485ae37556e50f5b75adc6cb9faa6771e039378', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'test/index.html': {size: 39773, hash: '0c6253e6dccf15e5e552a4e61b3aecd134d0ca5b648a9650a1c87bad83ed66b0', text: () => import('./assets-chunks/test_index_html.mjs').then(m => m.default)},
    'result/index.html': {size: 94350, hash: '7859d07a22b559e2a8765fe77764c9bcf32f3a7f9a606766ab142ae582f7e972', text: () => import('./assets-chunks/result_index_html.mjs').then(m => m.default)},
    'styles-GJDU2Y35.css': {size: 26879, hash: 'yQ6V0ZAbSZM', text: () => import('./assets-chunks/styles-GJDU2Y35_css.mjs').then(m => m.default)}
  },
};

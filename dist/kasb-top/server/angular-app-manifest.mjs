
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 1,
    "preload": [
      "chunk-22EUWMC4.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-EDVHWGOF.js",
      "chunk-ZFC7HBYA.js",
      "chunk-MAGCBL5F.js"
    ],
    "route": "/test"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-CZBBKF5P.js",
      "chunk-ZFC7HBYA.js",
      "chunk-MAGCBL5F.js"
    ],
    "route": "/result"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11030, hash: '86eb006c2a17819e504a8c5de843d4e35df9a83e69d221901e86428ae549923a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3176, hash: '4a7bf7d28b1921a3595481680f8c4f808ccbfdbb9ef527bd33410b19d7191cc2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-GJDU2Y35.css': {size: 26879, hash: 'yQ6V0ZAbSZM', text: () => import('./assets-chunks/styles-GJDU2Y35_css.mjs').then(m => m.default)}
  },
};

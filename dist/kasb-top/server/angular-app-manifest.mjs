
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-22EUWMC4.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EDVHWGOF.js",
      "chunk-ZFC7HBYA.js",
      "chunk-MAGCBL5F.js"
    ],
    "route": "/test"
  },
  {
    "renderMode": 2,
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
    'index.csr.html': {size: 10962, hash: 'f72a79ff8b5f72b7703d7feef8581b2edbe01f48c1b612118c4d0aac6dda6fca', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3107, hash: 'bd9da294825ef74ad50921a53e5b558e927a7f0368b716da14c115f1c121459d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 51949, hash: '92f4c7760dde1ff888e6e51f8844df3c2dac0ad3734e68c13b807f66c44398b7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'test/index.html': {size: 39707, hash: '1444455262d0cc7acbb79de7c7c4586918489c57e755d1e783dffcbf9ce83ea8', text: () => import('./assets-chunks/test_index_html.mjs').then(m => m.default)},
    'result/index.html': {size: 94284, hash: '48fc652d44248a7e73caff4440aee5db11d569be68030d3deb699ae0a982ce64', text: () => import('./assets-chunks/result_index_html.mjs').then(m => m.default)},
    'styles-GJDU2Y35.css': {size: 26879, hash: 'yQ6V0ZAbSZM', text: () => import('./assets-chunks/styles-GJDU2Y35_css.mjs').then(m => m.default)}
  },
};

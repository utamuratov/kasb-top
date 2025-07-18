
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
    'index.csr.html': {size: 10962, hash: 'f72a79ff8b5f72b7703d7feef8581b2edbe01f48c1b612118c4d0aac6dda6fca', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3107, hash: 'bd9da294825ef74ad50921a53e5b558e927a7f0368b716da14c115f1c121459d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-GJDU2Y35.css': {size: 26879, hash: 'yQ6V0ZAbSZM', text: () => import('./assets-chunks/styles-GJDU2Y35_css.mjs').then(m => m.default)}
  },
};

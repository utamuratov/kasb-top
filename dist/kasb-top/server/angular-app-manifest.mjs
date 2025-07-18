
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
    'index.csr.html': {size: 11030, hash: '86eb006c2a17819e504a8c5de843d4e35df9a83e69d221901e86428ae549923a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3176, hash: '4a7bf7d28b1921a3595481680f8c4f808ccbfdbb9ef527bd33410b19d7191cc2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 52015, hash: 'f8ded96e68e9d3d4e5780c013b2097acee8cfc151dc92daaf2c315a20643d062', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'test/index.html': {size: 39773, hash: '8dfb7e10542ac859b0569dc4ce1d493fd88974cfda038b4eab9860f4bac7abad', text: () => import('./assets-chunks/test_index_html.mjs').then(m => m.default)},
    'result/index.html': {size: 94350, hash: '7f4c184c94d107a7c4c926e314feba09ab46fdab9a33ed1f1682d5dd0356191a', text: () => import('./assets-chunks/result_index_html.mjs').then(m => m.default)},
    'styles-GJDU2Y35.css': {size: 26879, hash: 'yQ6V0ZAbSZM', text: () => import('./assets-chunks/styles-GJDU2Y35_css.mjs').then(m => m.default)}
  },
};

const workaround = require('next-translate/lib/cjs/plugin/utils.js');

workaround.defaultLoader =
  '(l, n) => import(`src/locales/${l}/${n}.json`).then(m => m.default)';

module.exports = {
  locales: ['en'],
  defaultLocale: 'en',
  pages: {
    '*': ['common'],
  },
};

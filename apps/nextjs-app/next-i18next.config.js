const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  react: {
    useSuspense: true,
  },
  localePath: path.resolve('./public/locales'),
};

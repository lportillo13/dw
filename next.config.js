const nextTranslate = require('next-translate-plugin');

module.exports = nextTranslate({
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
  },
});
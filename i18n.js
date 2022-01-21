
module.exports = {
  locales: ['es'],
  defaultLocale: 'es',
  pages: {
    '*': ['common'],
  },

  loadLocaleFrom: (lang,ns) =>
  import(`./src/infrastructure/locales/${lang}/${ns}.json`).then((m) => m.default),}

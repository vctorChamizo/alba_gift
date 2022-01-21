const nextTranslate = require("next-translate")

module.exports = nextTranslate({
  eslint: {
    dirs: ["src"]
  },
  images: {
    domains: ["fundacion-erp-wordpress.app.faable.com"]
  },
  async redirects() {
    return [
      {
        source: '/publicaciones',
        destination: '/noticias',
        permanent: true,
      },
    ]
  },
})

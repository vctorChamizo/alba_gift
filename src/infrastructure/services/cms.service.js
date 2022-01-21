import WPAPI from "wpapi"

const wp = new WPAPI({
  endpoint: "https://fundacion-erp-wordpress.app.faable.com/wp-json"
})

wp.noticias = wp.registerRoute("wp/v2", "noticias")
wp.patronato = wp.registerRoute("wp/v2", "patronato")
wp.premiados = wp.registerRoute("wp/v2", "premiados")
wp.bases = wp.registerRoute("wp/v2", "bases")

export { wp }

import NextDocument, { Html, Head, Main, NextScript } from "next/document"
import { ColorModeScript } from "@chakra-ui/react"
import theme from "../infrastructure/theme"

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="es">
        <Head></Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

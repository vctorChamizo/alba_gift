import { ChakraProvider } from "@chakra-ui/react"
import theme from "../infrastructure/theme"
import AOS from "aos"
import AOS_CONFIG from "../infrastructure/configs/aos.config"
import { useEffect } from "react"
import "aos/dist/aos.css"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const runAOS = () => {
      if (!AOS.refresh()) {
        AOS.init(AOS_CONFIG)
      }
    }
    runAOS()
  }, [])

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

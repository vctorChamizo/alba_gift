import { extendTheme } from "@chakra-ui/react"
import { colors } from "./fundations/colors.theme"
import { Text } from "./components/text.theme"
import { Button } from "./components/button.theme"
import { Input } from "./components/input.theme"
import { Textarea } from "./components/textarea.theme"
import { Checkbox } from "./components/checkbox.theme"
import { breakpoints } from "./fundations/breakpoints.theme"

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  colors,
  fonts: {
    heading: "Satoshi-Bold",
    body: "Satoshi-Regular"
  },
  //   textStyles,
  breakpoints,
  components: {
    Text,
    Button,
    Input,
    Textarea,
    Checkbox
  },
  shadows: {
    default: "0px 14.37062931060791px 28.74125862121582px 0px #033AA008"
  }
})

export default theme

import { Box } from "@chakra-ui/react"
import Meta from "../../../ui/layout/Meta/Meta"
import Navbar from "../../../ui/layout/Navbar/Navbar"

const Page = ({ children, metaConfig, ...props }) => {
  return (
    <Box as="section" position={"relative"} {...props}>
      <Navbar />
      <Meta {...metaConfig} />
      <Box
        mt={["76px", "96px"]}
        bg={["background", `no-repeat center/cover ${props.img}` || "background"]}
        {...props}
      >
        {children}
      </Box>
    </Box>
  )
}

export default Page

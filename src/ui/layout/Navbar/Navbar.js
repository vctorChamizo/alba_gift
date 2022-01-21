import { Box, Flex, Text } from "@chakra-ui/react"
import SCNavbar from "./Navbar.style"

export default function Navbar() {
  return (
    <SCNavbar>
      <Box className="main-header__wrapper">
        <Flex className="brand" alignItems={"center"}>
          <Text fontSize={["28px"]} color={"primary"} variant={"h3"} mt="16px">
            Nuestro nuevo viaje ✈️ ❤️
          </Text>
        </Flex>
      </Box>
    </SCNavbar>
  )
}

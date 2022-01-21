import { Box, Button, Flex, Text } from "@chakra-ui/react"
import Link from "next/link"
import OverlayImage from "../../dataDisplay/OverlayImage/OverlayImage"
import Square from "../Square/Square"

export default function Aids({ title, desc, image1, image2 }) {
  return (
    <Flex as="section" style={{ gap: "132px" }} alignItems={"center"}>
      <Box p={["0 32px", "0 0 0 178px"]} data-aos="fade-in">
        <Text as="h4" variant={"h4"} data-aos="fade-in">
          {title}
        </Text>
        <Text mt={["24px"]} data-aos="fade-in">
          {desc}
        </Text>
        <Link href="/ayudas" passHref>
          <Button mt={["24px"]} variant={"secondary"} data-aos="fade-in">
            Nuestras ayudas
          </Button>
        </Link>
      </Box>

      <Box display={["none", "block"]} position={"relative"}>
        <Box
          display={["none", "block"]}
          position={"absolute"}
          w="834px"
          height={"516px"}
          borderWidth={"2px"}
          borderColor={"secondary"}
          left={"48px"}
          top="114px"
          data-aos="fade-in"
        />
        <Square
          position="absolute"
          top="-33px"
          left="69px"
          bgColor="secondary"
          zIndex={2}
          data-aos="fade-in"
        />
        <OverlayImage
          image={image2}
          width="579px"
          height="584px"
          position="relative"
          left="102px"
          data-aos="fade-in"
        />
        <OverlayImage
          image={image1}
          width="382px"
          height="385px"
          position="absolute"
          bottom="-88px"
          left="0"
          zIndex={7}
          data-aos="fade-in"
        />
      </Box>
    </Flex>
  )
}

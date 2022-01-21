import { Box, Button, Text } from "@chakra-ui/react"
import Link from "next/link"
import ArrowIcon from "../../icons/ArrowIcon"

export default function Hero({
  title,
  desc,
  showArrow = true,
  image,
  images = [""],
  link,
  ...props
}) {
  return (
    <Box
      bgImage={image || images}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      bgPosition={"center"}
      p={["64px 32px 32px", "150px"]}
      minH={["calc(100vh - 76px)", "688px"]}
      position={"relative"}
      {...props}
    >
      <Box
        bgColor={"rgba(0, 35, 56, 0.6)"}
        position={"absolute"}
        zIndex={0}
        w="100%"
        left={0}
        right={0}
        top={0}
        bottom={0}
      />

      <Box position={"relative"} zIndex={1} maxW={["100%"]}>
        <Text color="white" as="h1" variant="h1" w={["100%"]}>
          {title}
        </Text>
        <Text mt={["16px"]} color="white" as="h2" variant="h2">
          {desc}
        </Text>

        {link && (
          <Link href={link} passHref>
            <Button mt={"32px"} variant={"primary"}>
              Ver noticia
            </Button>
          </Link>
        )}
      </Box>
      {showArrow && (
        <ArrowIcon
          display={["block", "none"]}
          position={"absolute"}
          zIndex={1}
          bottom={["32px"]}
          left={"50%"}
          transform={"translateX(-50%)"}
        />
      )}
    </Box>
  )
}

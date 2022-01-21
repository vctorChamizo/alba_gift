import { Box } from "@chakra-ui/react"
import Image from "next/image"
import React from "react"

export default function OverlayImage({ image, children, ...props }) {
  return (
    <Box display={"inline-block"} position={"relative"} {...props}>
      <Box
        bgColor={"rgba(0, 35, 56, 0.4)"}
        position={"absolute"}
        zIndex={1}
        w="100%"
        left={0}
        right={0}
        top={0}
        bottom={0}
      />

      <Image layout="fill" src={image} alt="overlay-image" objectFit="cover" />
      {children}
    </Box>
  )
}

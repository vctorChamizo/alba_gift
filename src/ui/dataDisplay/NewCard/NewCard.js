import { Box, Text } from "@chakra-ui/react"
import React from "react"

export default function NewCard({ title, desc, image, ...props }) {
  return (
    <Box boxShadow={["default"]} maxW={"400px"} {...props}>
      <Box
        bgImage={image}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        bgPosition={"center"}
        minH="260px"
      />
      <Box bgColor="white" p={["48px 32px"]}>
        <Text variant={"h4"} noOfLines={2}>
          {title}
        </Text>
        <Text mt={"8px"} noOfLines={4}>
          {desc}
        </Text>
      </Box>
    </Box>
  )
}

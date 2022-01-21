import {
  Box,
  Flex,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  Text,
  chakra
} from "@chakra-ui/react"

export default function MemberModal({ image, title, desc, job }) {
  return (
    <ModalContent
      bgColor={"primary"}
      width={["90%", "90%"]}
      maxW={"880px"}
      borderRadius={0}
      overflowX={"hidden"}
    >
      <ModalCloseButton color={"white"} zIndex={2} />
      <ModalBody p={0} borderRadius={0}>
        <Flex
          wrap={"wrap"}
          p={["40px 24px 24px", "88px 80px 80px"]}
          justifyContent={"space-between"}
          alignItems={"flex-start"}
          position={"relative"}
        >
          <chakra.svg
            position={"absolute"}
            right="0"
            top={"0"}
            width="383px"
            height="352px"
            viewBox="0 0 383 352"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M577.5 351C500.5 123.5 183.656 148.907 75.8294 76.6027C31.9898 47.2057 12.6937 20.323 2.07278 -21.0833"
              stroke="#48D8BF"
              strokeWidth="2.5"
            />
          </chakra.svg>

          <chakra.svg
            position={"absolute"}
            zIndex={1}
            left="0"
            bottom={"0"}
            width="457px"
            height="260px"
            viewBox="0 0 457 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M455.5 372.673C378.5 145.173 61.6562 170.58 -46.1706 98.276C-90.0102 68.8791 -109.306 41.9963 -119.927 0.590005"
              stroke="#48D8BF"
              strokeWidth="2.5"
            />
          </chakra.svg>

          <Box
            bgImage={image}
            bgPosition={"center"}
            bgSize={"cover"}
            w={["100%", "50%"]}
            maxW={["100%", "352px"]}
            position={"relative"}
            height={"100%"}
            maxH={("100%", "300px")}
            h={["352px"]}
          >
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
          </Box>

          <Box pt={["32px", "76px"]} pl={[0, "40px"]} flex={1}>
            <Text
              variant={"h3"}
              as="h3"
              color={"white"}
              fontSize={["20px", "48px"]}
              lineHeight={["24px", "56px"]}
            >
              {title}
            </Text>

            <Text
              color={"white"}
              variant={"p_bold"}
              mt={["16px", "32px"]}
              textTransform={"uppercase"}
              fontSize={["14px", "16px"]}
            >
              {job}
            </Text>
          </Box>
        </Flex>

        <Box bgColor={"white"} p={["40px 24px", "96px 72px"]}>
          <Text fontFamily={"Satoshi-Bold"}>Biografía</Text>
          <Text mt={["16px", "32px"]} maxW={"672px"}>
            {desc}
          </Text>
        </Box>
      </ModalBody>
    </ModalContent>
  )
}

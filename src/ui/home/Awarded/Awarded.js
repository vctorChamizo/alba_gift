import { Box, Button, chakra, Flex, Text } from "@chakra-ui/react"
import Link from "next/link"

export default function Awarded({ title, desc }) {
  return (
    <Flex
      as="section"
      pt={["104px", "190px"]}
      px={["18px", 0]}
      wrap={["wrap", "nowrap"]}
      alignItems={"flex-start"}
      pb={[0, "168px"]}
      position={"relative"}
      data-aos="fade-in"
    >
      <chakra.svg
        position={"absolute"}
        display={["none", "block"]}
        left="0"
        top="685px"
        width="370px"
        height="186px"
        viewBox="0 0 370 186"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-aos="fade-in"
        data-aos-delay="1000"
      >
        <path
          d="M-8 184.201C106.013 92.5052 186.442 171.217 294.269 98.9128C338.109 69.5158 357.405 42.633 368.026 1.22672"
          stroke="#48D8BF"
          strokeWidth="2.5"
        />
      </chakra.svg>

      {/* <chakra.svg position={"absolute"}
        display={["none", "block"]}
        left="-1296px"
        top="686px" width="1698px" height="1089px" viewBox="0 0 1698 1089" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1696.03 1.22721C1685.4 42.6335 1666.11 69.5163 1622.27 98.9132C1514.44 171.217 1434.01 92.5057 1320 184.201C994 409 432.5 1039.4 0.500015 1087" stroke="#48D8BF" stroke-width="2.5" />
      </chakra.svg> */}

      <chakra.svg
        zIndex={2}
        position={"absolute"}
        display={["none", "block"]}
        left="45%"
        top="134px"
        width="340px"
        height="269px"
        viewBox="0 0 340 269"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-aos="fade-in"
        data-aos-delay="1000"
      >
        <path
          d="M338.348 268.24C224.843 102.201 210.273 13.7758 99.5 2C57.3724 -2.4784 1.99993 37.6103 1.99993 56"
          stroke="#48D8BF"
          strokeWidth="2.5"
        />
      </chakra.svg>

      <chakra.svg
        position={"absolute"}
        display={["block", "none"]}
        left="0"
        top="88px"
        width="375px"
        height="235px"
        viewBox="0 0 375 235"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-aos="fade-in"
        data-aos-delay="1000"
      >
        <path
          d="M-101.209 233.479C12.2963 67.4406 21.129 14.6286 131.902 2.85274C261 -10.8711 295.481 96.2525 439.089 68.2547"
          stroke="#48D8BF"
          strokeWidth="2.5"
        />
      </chakra.svg>

      <Box
        position={"relative"}
        bgColor={"white"}
        boxShadow={["none", "default"]}
        p={["48px 24px 56px", "104px 189px 88px"]}
        backdropFilter={"blur(18.09px)"}
        maxW={"920px"}
      >
        <Text as="h4" variant={"h4"} data-aos="fade-in">
          {title}
        </Text>
        <Text mt={["32px", "40px"]} data-aos="fade-in">
          {desc}
        </Text>
        <Link href={"/premios"} passHref>
          <Button
            w={["100%", "auto"]}
            variant={"secondary"}
            mt={["56px", "40px"]}
            data-aos="fade-in"
          >
            Todos los premiados
          </Button>
        </Link>
      </Box>

      <Box
        position={"relative"}
        mt={["32px", 0]}
        px={["14px", 0]}
        maxW={"480px"}
        pt={[0, "96px"]}
        left={[0, "-82px"]}
      >
        <Box
          display={["block", "none"]}
          position={"absolute"}
          w="415px"
          height={"448px"}
          borderWidth={"2px"}
          borderColor={"secondary"}
          left={"0px"}
          top="60px"
          zIndex={0}
        />
        ``
        <Box position={"relative"} zIndex={3} data-aos="fade-in">
          <Box bgColor={"primary"} p={["40px 56px"]}>
            <Text
              as="h4"
              variant={"h4"}
              fontSize={["24px", "32px"]}
              lineHeight={["32px", "40px"]}
              color={"white"}
            >
              D. Elías Campo Güerri
            </Text>
            <Text mt={["16px"]} color={"white"}>
              Por su contribución al Conocimiento de la Genética del Cáncer.
            </Text>
          </Box>
          <Box
            bgColor={"primary"}
            p={["40px 56px"]}
            mt={["24px"]}
            data-aos="fade-in"
          >
            <Text
              as="h4"
              variant={"h4"}
              fontSize={["24px", "32px"]}
              lineHeight={["32px", "40px"]}
              color={"white"}
            >
              D. Eugenio Santos de Dios
            </Text>
            <Text mt={["16px"]} color={"white"}>
              Distinción otorgada como reconocimiento al fruto de una labor docente
              Cientifico-Investigadora, también académica de gran constancia y
              relevancia, tanto a nivel nacional como internacional
            </Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}

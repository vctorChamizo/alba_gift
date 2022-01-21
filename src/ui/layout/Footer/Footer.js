import { Box, Grid, Text } from "@chakra-ui/react"
import Link from "next/link"
import Logo from "../../icons/Logo"

export default function Footer() {
  return (
    <Box as={"footer"} bgColor={"primary"}>
      <Grid
        templateColumns={["repeat(1, auto)", "50% 228px auto"]}
        columnGap={"80px"}
        wrap={"wrap"}
        maxW={"1440px"}
        p={["40px 32px 0", "96px 96px 0"]}
        alignItems={"flex-start"}
        mx={"auto"}
      >
        <Box maxW={"234px"}>
          <Logo
            position={"relative"}
            left={["-8px", "-4px"]}
            fill={"#FBFBFB"}
            w={["123px", "168px"]}
            h={["38px", "56px"]}
          />
          <Text
            mt="8px"
            color={"white"}
            fontSize={["10px"]}
            lineHeight={["12px"]}
            textTransform={"uppercase"}
            maxW={"216px"}
          >
            Ayudas y Premios a la Investigación en Ciencias Médicas
          </Text>
        </Box>
        <Box mt={["48px", 0]} w={["100%", "auto"]} maxW={["100%", "228px"]}>
          <Text variant={"p_cta"} color={"white"}>
            Sitemap
          </Text>

          <Grid
            templateColumns={["repeat(2, auto)", "repeat(2, auto)"]}
            columnGap={["80px", "32px"]}
            mt={"24px"}
            wrap={"wrap"}
            flexDirection={"column"}
            alignItems={"flex-start"}
          >
            <Box>
              <Link href="/la-fundacion" passHref>
                <Text as="a" color="white" display={"block"} mb="8px">
                  La Fundación
                </Text>
              </Link>
              <Link href="/ayudas" passHref>
                <Text as="a" color="white" display={"block"} mb="8px">
                  Ayudas
                </Text>
              </Link>
              <Link href="/premios" passHref>
                <Text as="a" color="white" display={"block"} mb="8px">
                  Premios
                </Text>
              </Link>
            </Box>
            <Box>
              <Link href="/noticias" passHref>
                <Text as="a" color="white" display={"block"} mb="8px">
                  Noticias
                </Text>
              </Link>
              <Link href="/contacto" passHref>
                <Text as="a" color="white" display={"block"}>
                  Contacto
                </Text>
              </Link>
            </Box>
          </Grid>
        </Box>
        <Box
          mt={["48px", 0]}
          w={["100%", "auto"]}
          maxW={["100%", "166px"]}
          justifySelf={"flex-end"}
        >
          <Text variant={"p_cta"} color={"white"}>
            Legales
          </Text>

          <Box mt={"24px"}>
            {/* <Link href="/terminos-y-condiciones" passHref>
              <Text as="a" color="white" display={"block"} mb="8px">
                Términos y condiciones
              </Text>
            </Link> */}
            <Link href="/politica-privacidad" passHref>
              <Text as="a" color="white" display={"block"} mb="8px">
                Política privacidad
              </Text>
            </Link>
            <Link href="/politica-cookies" passHref>
              <Text as="a" color="white" display={"block"}>
                Política Cookies
              </Text>
            </Link>
          </Box>
        </Box>
      </Grid>
      <Box
        borderColor={"white"}
        w={["calc(100% - 64px)", "calc(100% - 192px)"]}
        borderTopWidth={"1px"}
        maxW={"1248px"}
        mx={"auto"}
        mt={["40px", "48px"]}
        pb={["56px", "40px"]}
      >
        <Text
          mt={["8px", "20px"]}
          color={"white"}
          fontSize={["10px", "16px"]}
          lineHeight={"24px"}
          opacity={"0.5"}
        >
          © 2021 Fundación Eugenio Rodrígez Pascual. All rights reserved.
        </Text>
      </Box>
    </Box>
  )
}

import { Box, Button, chakra, Text } from "@chakra-ui/react"
import Link from "next/link"
import Square from "../Square/Square"

export default function Fundation({
  title,
  subtitle1,
  text1,
  subtitle2,
  text2,
  subtitle3,
  text3
}) {
  return (
    <>
      <Box
        as="section"
        p={["48px 32px 64px"]}
        position={"relative"}
        display={["block", "none"]}
      >
        <Box
          position={"absolute"}
          top={"120px"}
          display={["block", "none"]}
          height={"2px"}
          bgColor={"secondary"}
          w="100%"
          left={0}
          data-aos="fade-in"
        />
        <Box
          position={"relative"}
          zIndex={1}
          bgColor={"white"}
          p={["48px 24px 70px"]}
          data-aos="fade-in"
        >
          <Text as="h4" variant={"h4"} data-aos="fade-in">
            {title}
          </Text>

          <Box mt={["32px"]} data-aos="fade-in">
            <Text as="p" variant={"p_bold"} letterSpacing={"-1%"}>
              {subtitle1}
            </Text>
            <Text as="p">{text1}</Text>
          </Box>

          <Box mt={["32px"]} data-aos="fade-in">
            <Text as="p" variant={"p_bold"} letterSpacing={"-1%"}>
              {subtitle2}
            </Text>
            <Text as="p">{text2}</Text>
          </Box>

          <Box mt={["32px"]} data-aos="fade-in">
            <Text as="p" variant={"p_bold"} letterSpacing={"-1%"}>
              {subtitle3}{" "}
            </Text>
            <Text as="p">{text3}</Text>
          </Box>

          <Link href={"/la-fundacion"} passHref>
            <Button
              w={["100%"]}
              variant={"secondary"}
              mt={["56px"]}
              data-aos="fade-in"
            >
              Más sobre nosotros
            </Button>
          </Link>
        </Box>

        <chakra.svg
          position={"absolute"}
          bottom={"-44px"}
          display={["block", "none"]}
          left={0}
          width="117px"
          height="186px"
          viewBox="0 0 117 186"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-261 184.201C-146.987 92.5052 -66.5576 171.217 41.2692 98.9128C85.1088 69.5158 104.405 42.633 115.026 1.22672"
            stroke="#48D8BF"
            strokeWidth="2.5"
          />
        </chakra.svg>
      </Box>

      <Box
        as="section"
        p={["0px 0px 176px"]}
        position={"relative"}
        display={["none", "block"]}
        data-aos="fade-in"
      >
        <Box
          display={["none", "block"]}
          position={"absolute"}
          w="1142px"
          height={"610px"}
          borderWidth={"2px"}
          borderColor={"secondary"}
          right={"-38px"}
          top="52px"
        />
        <Box
          position={"relative"}
          zIndex={1}
          bgColor={"white"}
          maxW={"1050px"}
          w={"75%"}
          top={"-24px"}
          marginRight={0}
          marginLeft={"auto"}
          p={["80px 98px 88px 168px"]}
        >
          <Square
            bgColor="secondary"
            position="absolute"
            top="-33px"
            right="156px"
          />
          <Text as="h4" variant={"h4"} data-aos="fade-in">
            {title}
          </Text>

          <Box mt={["32px"]} data-aos="fade-in">
            <Text
              as="p"
              variant={"p_bold"}
              letterSpacing={"-1%"}
              fontSize={"20px"}
              lineHeight={"32px"}
            >
              {subtitle1}
            </Text>
            <Text as="p">{text1}</Text>
          </Box>

          <Box mt={["32px"]} data-aos="fade-in">
            <Text
              as="p"
              variant={"p_bold"}
              letterSpacing={"-1%"}
              fontSize={"20px"}
              lineHeight={"32px"}
            >
              {subtitle2}
            </Text>
            <Text as="p">{text2}</Text>
          </Box>

          <Box mt={["32px"]} data-aos="fade-in">
            <Text
              as="p"
              variant={"p_bold"}
              letterSpacing={"-1%"}
              fontSize={"20px"}
              lineHeight={"32px"}
            >
              {subtitle3}{" "}
            </Text>
            <Text as="p">{text3}</Text>
          </Box>

          <Link href={"/la-fundacion"} passHref>
            <Button variant={"secondary"} mt={["56px"]} data-aos="fade-in">
              Más sobre nosotros
            </Button>
          </Link>
        </Box>

        <chakra.svg
          position={"absolute"}
          bottom={"-44px"}
          display={["block", "none"]}
          left={0}
          width="117px"
          height="186px"
          viewBox="0 0 117 186"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-261 184.201C-146.987 92.5052 -66.5576 171.217 41.2692 98.9128C85.1088 69.5158 104.405 42.633 115.026 1.22672"
            stroke="#48D8BF"
            strokeWidth="2.5"
          />
        </chakra.svg>
      </Box>
    </>
  )
}

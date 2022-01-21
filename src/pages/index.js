import { Box } from "@chakra-ui/react"
import Page from "../infrastructure/layout/Page/Page"
import HeroCarousel from "../ui/layout/HeroCarousel/HeroCarousel"
import { META_CONFIGS } from "../infrastructure/constants/metas"

export default function Home() {
  return (
    <Page
      overflowX="hidden"
      img={`url("/images/home/home-bg.svg")`}
      metaConfig={META_CONFIGS.home}
    >
      <Box maxW={"1440px"} mx="auto">
        <Box
          display={["none", "block"]}
          position={"absolute"}
          w="1028px"
          height={"628px"}
          borderWidth={"2px"}
          borderColor={"secondary"}
          transform={"translateX(-50%)"}
          left={"calc(50% + 134px)"}
          top="-68px"
        />
        <HeroCarousel w={["100%", "100%"]} maxW={["100%", "100%"]} />
      </Box>
    </Page>
  )
}

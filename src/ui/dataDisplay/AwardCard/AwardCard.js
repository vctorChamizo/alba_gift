import { Box, Text } from "@chakra-ui/react"

export default function AwardCard({ year, title, desc }) {
  return (
    <Box bgColor={"primary"} p={["32px", "48px 32px"]} data-aos="fade-in">
      <Text variant={"p_bold"} color={"secondary"}>
        {year}
      </Text>
      <Text
        fontSize={["24px", "32px"]}
        color={"white"}
        as="h4"
        variant={"h4"}
        mt="16px"
      >
        {title}
      </Text>
      <Text color={"white"} mt="16px">
        {desc}
      </Text>
    </Box>
  )
}

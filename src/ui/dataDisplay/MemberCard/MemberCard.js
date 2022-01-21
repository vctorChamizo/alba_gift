import {
  Box,
  Button,
  Flex,
  Modal,
  ModalOverlay,
  Text,
  useDisclosure
} from "@chakra-ui/react"
import MemberModal from "../MemberModal/MemberModal"

export default function MemberCard({ job, title, desc, image }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bgColor={"#00233899"} />
        <MemberModal
          title={title}
          job={job}
          desc={desc}
          image={image || "/images/member-img.png"}
        />
      </Modal>

      <Flex bgColor={"primary"} alignItems={"flex-start"} data-aos="fade-in">
        <Box
          bgImage={image || "/images/member-img.png"}
          bgPosition={"center"}
          bgSize={"cover"}
          w={["40%"]}
          maxW={["118px", "204px"]}
          position={"relative"}
          height={"100%"}
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
        <Flex
          wrap={"wrap"}
          p={["24px 16px 24px 32px", "40px 32px 40px 48px"]}
          flex={1}
          height={"100%"}
        >
          <Text
            variant={"p_cta"}
            fontSize={["20px", "24px"]}
            lineHeight={["24px", "32px"]}
            color={"white"}
          >
            {title}
          </Text>
          <Text
            color={"white"}
            variant={"p_bold"}
            mt="16px"
            textTransform={"uppercase"}
            fontSize={["14px", "16px"]}
          >
            {job}
          </Text>
          <Text
            color={"white"}
            mt="16px"
            noOfLines={2}
            display={["none", "-webkit-box"]}
            textOverflow={"ellipsis"}
            overflow={"hidden"}
          >
            {desc}
          </Text>
          <Button
            mt="16px"
            variant={"tertiary"}
            color={"white"}
            fontSize={["16px", "20px"]}
            minH={"auto"}
            alignSelf={"flex-end"}
            onClick={onOpen}
          >
            Ver más
          </Button>
        </Flex>
      </Flex>
    </>
  )
}

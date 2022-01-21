import {
  Flex,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  Text,
  ModalHeader,
  Button
} from "@chakra-ui/react"
import { useRef } from "react"
import PrintPDF from "../PrintPDF/PrintPDF"
import { BasesWrapper } from "./BasesWrapper"

export default function BasesModal({ content }) {
  const componentRef = useRef()
  return (
    <ModalContent
      bgColor={"white"}
      width={["90%", "90%"]}
      maxW={"880px"}
      borderRadius={0}
      overflowX={"hidden"}
      p={["40px 24px 24px", "88px 72px 80px"]}
    >
      <ModalHeader p={0}>
        <Flex alignItems={"center"} wrap={["wrap", "nowrap"]}>
          <Text as="h4" variant={"h4"} mr={["0px", "80px"]}>
            Bases de la convocatoria
          </Text>
          <PrintPDF
            element={() => (
              <Button variant={"secondary"} mt={["16px", 0]}>
                Descargar PDF
              </Button>
            )}
            content={() => componentRef?.current}
          />
        </Flex>
      </ModalHeader>
      <ModalCloseButton
        color={"primary"}
        zIndex={2}
        top={["40px", "96px"]}
        right={["24px", "72px"]}
      />
      <ModalBody p={0} borderRadius={0} mt={["32px", "40px"]}>
        <BasesWrapper ref={componentRef}>{content}</BasesWrapper>
      </ModalBody>
    </ModalContent>
  )
}

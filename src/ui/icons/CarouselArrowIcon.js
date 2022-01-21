import { chakra } from "@chakra-ui/react"
import React from "react"

export default function CarouselArrowIcon({ ...props }) {
  return (
    <chakra.svg
      width="18px"
      height="32px"
      viewBox="0 0 18 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 2L2 16L16 30"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </chakra.svg>
  )
}

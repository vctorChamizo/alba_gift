import { chakra } from "@chakra-ui/react"

export default function ArrowIcon({ ...props }) {
  return (
    <chakra.svg
      width="22px"
      height="12px"
      viewBox="0 0 22 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.3334 1L11.0001 10.3333L1.66675 1"
        stroke="#FBFBFB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </chakra.svg>
  )
}

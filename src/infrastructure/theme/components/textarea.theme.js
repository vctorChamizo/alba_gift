export const Textarea = {
  variants: {
    baseStyle: {
      border: "none",
      outline: "none",
      fontFamily: "Satoshi-Regular"
    },
    base: {
      outline: "none",
      bg: "background",
      borderRadius: "0px",
      color: "primary",
      border: "none",
      padding: "16px 24px",
      height: "64px",
      fontFamily: "Satoshi-Regular",
      fontSize: ["16px", "20px"],
      lineHeight: ["24px", "32px"],
      _disabled: {
        _hover: {
          borderColor: "background"
        },
        opacity: 0.6
      },
      _focus: {
        // borderColor: "background",
      },
      _invalid: {
        borderColor: "red"
      },
      _hover: {
        // borderColor: "background",
      },
      _placeholder: {
        color: "primary",
        opacity: 0.6,
        fontSize: ["16px", "20px"],
        lineHeight: ["24px", "32px"]
      }
    }
  },
  defaultProps: {
    variant: "base"
  }
}

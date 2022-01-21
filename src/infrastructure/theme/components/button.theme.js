export const Button = {
  baseStyle: {
    fontFamily: "Satoshi-Bold",
    borderRadius: ["16px", "16px", "16px", "16px"],
    fontSize: "20px",
    lineHeight: "24px",
    bgColor: "secondary",
    color: "primary",
    textDecoration: "none",
    alignItems: "center",
    outline: "none",
    minH: ["56px"],
    _hover: {
      opacity: 0.8
    },
    _focus: { boxShadow: "none" },
    _disabled: {
      opacity: 0.5,
      pointerEvents: "none",
      background:
        "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), rgba(233, 251, 248, 0.6);",
      color: "rgba(0, 35, 56, 0.15)"
    }
  },

  variants: {
    primary: {
      padding: "16px 24px",
      fontSize: "20px",
      lineHeight: "24px",
      _hover: {
        opacity: 1,
        bgColor: "primary",
        color: "secondary",
        transition: "all 0.7s ease"
      }
    },
    secondary: {
      padding: "16px 24px",
      fontSize: "20px",
      lineHeight: "24px",
      bgColor: "transparent",
      borderColor: "primary",
      borderWidth: "1px",
      _hover: {
        opacity: 1,
        bgColor: "primary",
        color: "white",
        transition: "all 0.7s ease"
      }
    },
    tertiary: {
      padding: "16px 0px",
      fontSize: "20px",
      lineHeight: "24px",
      bgColor: "transparent",
      position: "relative",
      minH: "100%",
      _after: {
        content: '""',
        position: "absolute",
        left: "0px",
        height: "2px",
        width: "54px",
        bgColor: "secondary",
        transition: "all 0.75s ease",
        bottom: 0
      },
      _hover: {
        _after: {
          width: "100%"
        }
      }
    }
  },
  defaultProps: {
    variant: "primary"
  }
}

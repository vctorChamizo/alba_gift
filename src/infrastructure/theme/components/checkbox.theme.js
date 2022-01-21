export const Checkbox = {
  baseStyle: {
    control: {
      borderRadius: "4px",
      borderColor: "#002338",
      border: "2px solid",
      outline: "none",
      boxShadow: "none",
      _checked: {
        backgroundColor: "#002338",
        outline: "none",
        background: "#002338",
        borderColor: "#002338",
        boxShadow: "none",
        _hover: {
          background: "#002338",
          backgroundColor: "#002338",
          border: "none",
          outline: "none",
          borderColor: "#002338",
          boxShadow: "none"
        }
      },
      _hover: {
        borderColor: "#002338",
        backgroundColor: "#002338",
        outline: "none",
        border: "none",
        background: "#002338",
        bg: "#002338",
        boxShadow: "none"
      }
    },
    icon: {
      bg: "#002338",
      _hover: {
        border: "none",
        outline: "none",
        stroke: "none",
        boxShadow: "none"
      }
    },
    outline: "none"
  },
  variants: {
    base: {
      label: {
        fontSize: ["14px", "16px"],
        lineHeight: ["24px", "32px"],
        marginRight: "8px"
      }
    }
  },
  defaultProps: {
    variant: "base"
  }
}

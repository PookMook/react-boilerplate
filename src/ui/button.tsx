import styled from "styled";

export const ButtonUI = styled("button", {
  color: "$main",
  backgroundColor: "$background",
  outline: "0",
  borderWidth: "thin",
  borderStyle: "solid",
  borderColor: "$background",
  padding: "m",
  cursor: "pointer",
  borderRadius: "normal",
  ":focus": {
    borderColor: "$constructive",
  },
  variants: {
    radius: {
      none: {
        borderRadius: "none",
      },
      pill: { borderRadius: "pill" },
    },
    lined: {
      true: {
        borderColor: "$main",
      },
    },
    highlighted: {
      true: {
        backgroundColor: "$backgroundHL",
        borderColor: "$backgroundHL",
        color: "$black",
      },
    },
    constructive: {
      true: {
        color: "$constructiveText",
        backgroundColor: "$constructive",
        borderColor: "$constructive",

        ":focus": {
          borderColor: "$constructiveText",
        },
      },
    },
    destructive: {
      true: {
        color: "$destructiveText",
        backgroundColor: "$destructive",
        borderColor: "$destructive",
        ":focus": {
          borderColor: "$destructiveText",
        },
      },
    },
  },
});

ButtonUI.compoundVariant(
  { highlighted: true, lined: true },
  {
    borderColor: "$black",
  }
);

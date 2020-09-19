import { createStyled } from "@stitches/react";

const CST = {
  primaryColor: "rgb(0,173,216)",
  primaryInverted: "white",
  destructive: "red",
  lightColor: "rgb(179, 185, 200)",
  mainColor: "rgb(87, 99, 114)",
  blackColor: "rgb(52, 59, 68)",
  backgroundColor: "#f8f9fd",
  backgroundHighlight: "white",
};

const { styled, css } = createStyled({
  strict: true,
  tokens: {
    colors: {
      $primary: CST.primaryColor,
      $primaryText: CST.primaryInverted,
      $constructive: CST.primaryColor,
      $constructiveText: CST.primaryInverted,
      $destructive: CST.destructive,
      $destructiveText: CST.primaryInverted,
      $main: CST.mainColor,
      $light: CST.lightColor,
      $black: CST.blackColor,
      $background: CST.backgroundColor,
      $backgroundHL: CST.backgroundHighlight,
    },
    space: {
      none: "0",
      xs: "0.125rem",
      s: "0.25rem",
      m: "0.5rem",
      l: "0.75rem",
      xl: "1rem",
      xxl: "1.5rem",
    },

    fontSizes: {
      base: "16px",
      s: "0.75rem",
      m: "1rem",
      l: "1.33rem",
    },
    fonts: {},
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {
      none: "0",
    },
    borderStyles: {
      solid: "solid",
    },
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  breakpoints: {},
  utils: {},
});

export default styled;
export { styled, css };

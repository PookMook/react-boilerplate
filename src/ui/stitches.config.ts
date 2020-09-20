import { createStyled } from "@stitches/react";

const CST = {
  primaryColor: "rgb(0,173,216)",
  primaryInverted: "white",
  destructive: "red",
  lightColor: "#b3b9c8",
  mainColor: "#576372",
  blackColor: "#272c33",
  lightColorInverted: "#373a4c",
  mainColorInverted: "#8d9aa8",
  blackColorInverted: "#cccfd8",
  backgroundColor: "#f8f9fd",
  backgroundHighlight: "white",
  backgroundColorInverted: "#020407",
  backgroundHighlightInverted: "black",
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
      thin: "1px",
    },
    borderStyles: {
      solid: "solid",
    },
    radii: {
      none: "0",
      normal: "7px",
      half: "50%",
      pill: "9999px",
    },
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  breakpoints: {},
  utils: {},
});

const darkTheme = css.theme({
  colors: {
    $primary: CST.primaryColor,
    $primaryText: CST.primaryInverted,
    $constructive: CST.primaryColor,
    $constructiveText: CST.primaryInverted,
    $destructive: CST.destructive,
    $destructiveText: CST.primaryInverted,
    $main: CST.mainColorInverted,
    $light: CST.lightColorInverted,
    $black: CST.blackColorInverted,
    $background: CST.backgroundColorInverted,
    $backgroundHL: CST.backgroundHighlightInverted,
  },
});

export default styled;
export { styled, css, darkTheme };

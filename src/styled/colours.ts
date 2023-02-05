import { Theme } from "../types";

const SHADES = {
  GRAY: {
    50: "#0D0D0D",
    100: "#1A1A1A",
    200: "#333333",
    300: "#4D4D4D",
    400: "#666666",
    500: "#808080",
    600: "#999999",
    700: "#B3B3B3",
    800: "#CCCCCC",
    900: "#E6E6E6",
    950: "#F2F2F2",
  },
};

const BLACK = "#000000";
const WHITE = "#ffffff";

const THEME: Theme = {
  dark: {
    baseText: WHITE,
    navButton: {
      bg: SHADES.GRAY[400],
      bgHover: SHADES.GRAY[500],
      bgActive: SHADES.GRAY[600],
      text: WHITE,
    },
    weekColumn: {
      bg: SHADES.GRAY[200],
      headerText: SHADES.GRAY[900],
      plusButton: {
        bg: SHADES.GRAY[500],
        bgHover: SHADES.GRAY[600],
        bgActive: SHADES.GRAY[700],
        text: WHITE,
      },
      border: `1px solid ${SHADES.GRAY[400]}`
    },
    focusIndicator: WHITE,
  },
  light: {
    baseText: BLACK,
    navButton: {
      bg: SHADES.GRAY[100],
      bgHover: SHADES.GRAY[200],
      bgActive: SHADES.GRAY[300],
      text: SHADES.GRAY[950],
    },
    weekColumn: {
      bg: WHITE,
      headerText: SHADES.GRAY[100],
      boxShadow: {
        colour: BLACK,
        transparency: 0.1
      },
      plusButton: {
        bg: WHITE,
        bgHover: SHADES.GRAY[800],
        bgActive: SHADES.GRAY[700],
        text: SHADES.GRAY[200],
      },
    },
    focusIndicator: BLACK,
  },
};

export { BLACK, WHITE, SHADES, THEME };

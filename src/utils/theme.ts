import { createTheme } from '@shopify/restyle'

const palette = {
  black: '#222222',
  white: '#FFFFFF',
  gray: "#9B9B9B",
  primary: "#DB3022",
  backgroundLight: "#F5F5F5F5",
  error: "#F01F0E",
  success: "#2AA952",
  darkColor: "#2A2C36",
  backgroundDark: "#1E1F28"
};


const theme = createTheme({
  colors: {
    background: palette.backgroundLight,
    white: palette.white,
    gray: palette.gray,
    black: palette.black,
    error: palette.error,
    primary: palette.primary,
    success: palette.success,
    darkColor: palette.darkColor
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
    largeTablet: 1024,
  },
  textVariants: {
    headline: {
      fontFamily: "Ubuntu-Bold",
      fontSize: 34,
      lineHeight: 34,
      color: "black"
    },
    headline2: {
      fontFamily: "Ubuntu-Medium",
      fontSize: 24,
      lineHeight: 28.8,
      color: "black"
    },
    headline3: {
      fontFamily: "Ubuntu-Medium",
      fontSize: 18,
      lineHeight: 22,
      color: "black"
    },
    body: {
      fontFamily: "Ubuntu-Regular",
      fontSize: 14,
      lineHeight: 20,
      color: "black"
    },
    body2: {
      fontFamily: "Ubuntu-Medium",
      fontSize: 16,
      lineHeight: 16,
      color: "black"
    },
    description: {
      fontFamily: "Ubuntu-Regular",
      fontSize: 14,
      lineHeight: 20,
      color: "black",
      opacity: 0.8
    },
    small: {
      fontFamily: "Ubuntu-Regular",
      fontSize: 11,
      lineHeight: 11,
      color: "black"
    },
    smallGray: {
      fontFamily: "Ubuntu-Regular",
      fontSize: 11,
      lineHeight: 11,
      color: "gray"
    },
  }
});

export type Theme = typeof theme;

export default theme;
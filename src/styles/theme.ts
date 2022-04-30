import { DefaultTheme } from "styled-components";

import darkLogo from "../assets/darkLogo.png";
import lightLogo from "../assets/lightLogo.png";

export const darkTheme: DefaultTheme = {
  colors: {
    primary: "#0C0C0E",
    secondary: "#6746ED",
    textPrimary: "#EDEFFD",
    textSecondary: "#FFFFFF",
    white: "#FFFFFF",
    green: "#54DE9D",
    red: "#F24646",
    darkGray: "#989fa4",
    background: "#181A1E",
  },
  logo: darkLogo,
};

export const lightTheme: DefaultTheme = {
  colors: {
    primary: "#FFFFFF",
    secondary: "#6746ED",
    textPrimary: "#363949",
    textSecondary: "#FFFFFF",
    white: "#FFFFFF",
    green: "#54DE9D",
    red: "#F24646",
    darkGray: "#989fa4",
    background: "#F6F6F9",
  },
  logo: lightLogo,
};

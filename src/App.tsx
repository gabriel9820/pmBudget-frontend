import Modal from "react-modal";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global";
import { darkTheme, lightTheme } from "./styles/theme";

import { AppRoutes } from "./routes";

Modal.setAppElement("#root");

export function App() {
  return (
    <ThemeProvider theme={true ? darkTheme : lightTheme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
}

import Modal from "react-modal";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global";
import { darkTheme, lightTheme } from "./styles/theme";

import { AppRoutes } from "./routes";
import { AppState } from "./store";

Modal.setAppElement("#root");

export function App() {
  const { theme } = useSelector((state: AppState) => state.preferences);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
}

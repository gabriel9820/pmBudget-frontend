import { useState } from "react";
import Modal from "react-modal";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global";
import { darkTheme, lightTheme } from "./styles/theme";

import { SidebarMenu } from "./components/SidebarMenu";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement("#root");

export function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true);
  };

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle isMenuOpen={isMenuOpen} />

      <SidebarMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </ThemeProvider>
  );
}

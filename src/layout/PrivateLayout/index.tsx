import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Content } from "./styles";
import { SidebarMenu } from "../../components/SidebarMenu";

export const PrivateLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <>
      <SidebarMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <Content isMenuOpen={isMenuOpen}>
        <Outlet />
      </Content>
    </>
  );
};

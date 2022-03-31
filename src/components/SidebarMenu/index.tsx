import { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { ThemeContext } from "styled-components";

import { Container, Footer, Header } from "./styles";
import { MenuItem } from "./MenuItem";
import { ThemeSwitch } from "./ThemeSwitch";

import { menus } from "./menus";

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const SidebarMenu: React.FC<IProps> = ({ isOpen, setIsOpen }) => {
  const { logo } = useContext(ThemeContext);
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (label: string) => {
    if (label === activeItem) {
      setActiveItem("");
    } else {
      setActiveItem(label);
    }
  };

  return (
    <Container isMenuOpen={isOpen}>
      <div>
        <Header>
          {isOpen && (
            <div>
              <img src={logo} alt="pmBudget" />
            </div>
          )}
          <span onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoClose /> : <GiHamburgerMenu />}
          </span>
        </Header>

        <ul>
          {menus.map((item, index) => (
            <MenuItem
              key={index}
              item={item}
              isMenuOpen={isOpen}
              isActive={item.label === activeItem}
              onClick={handleItemClick}
            />
          ))}
        </ul>
      </div>

      <Footer>
        <ThemeSwitch isMenuOpen={isOpen} />
      </Footer>
    </Container>
  );
};

import { BrowserRouter } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { FaAtom, FaClipboardList } from "react-icons/fa";

import logo from "../../assets/logo.png";

import { Container, TopContainer } from "./styles";

import { IMenuItem, MenuItem } from "./MenuItem";

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const menus: IMenuItem[] = [
  { icon: <AiFillHome />, label: "Dashboard", path: "/" },
  {
    icon: <FaClipboardList />,
    label: "Cadastros",
    subItens: [
      { label: "Categoria", path: "/categoria" },
      { label: "Cartão", path: "/cartao" },
    ],
  },
  {
    icon: <FaAtom />,
    label: "Teste",
    subItens: [
      { label: "SubItem 1", path: "/sub1" },
      { label: "SubItem 2", path: "/sub2" },
    ],
  },
];

export const SidebarMenu: React.FC<IProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Container isMenuOpen={isOpen}>
      <TopContainer>
        {isOpen && (
          <div>
            <img src={logo} alt="pmBudget" />
          </div>
        )}
        <span onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoClose /> : <GiHamburgerMenu />}
        </span>
      </TopContainer>

      <BrowserRouter>
        <ul>
          {menus.map((item, index) => (
            <MenuItem key={index} item={item} isMenuOpen={isOpen} />
          ))}
        </ul>
      </BrowserRouter>
    </Container>
  );
};

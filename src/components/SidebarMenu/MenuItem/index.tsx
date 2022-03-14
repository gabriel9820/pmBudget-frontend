import { ReactElement } from "react";

import { ContainerSubItem, Item, SubItem } from "./styles";

export interface IMenuItem {
  icon: ReactElement;
  label: string;
  path?: string;
  subItens?: IMenuSubItem[];
}

interface IMenuSubItem {
  label: string;
  path: string;
}

interface IProps {
  item: IMenuItem;
  isMenuOpen: boolean;
  isActive: boolean;
  onClick: (label: string) => void;
}

export const MenuItem: React.FC<IProps> = ({
  item,
  isMenuOpen,
  isActive,
  onClick,
}) => {
  const handleItemClick = () => {
    onClick(item.label);
  };

  const handleSubItemClick = () => {
    if (!isMenuOpen) {
      onClick("");
    }
  };

  return (
    <li style={{ position: "relative" }}>
      <Item to={item.path ? item.path : "#"} onClick={handleItemClick}>
        {item.icon}
        {isMenuOpen && <span>{item.label}</span>}
      </Item>

      {isActive && item.subItens && (
        <ContainerSubItem
          className={isMenuOpen ? "menu-open" : "menu-condensed"}
        >
          {item.subItens.map((subItem, index) => (
            <li>
              <SubItem
                key={index}
                className={isMenuOpen ? "menu-open" : "menu-condensed"}
                to={subItem.path}
                onClick={handleSubItemClick}
              >
                <span>{subItem.label}</span>
              </SubItem>
            </li>
          ))}
        </ContainerSubItem>
      )}
    </li>
  );
};

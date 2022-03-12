import { ReactElement, useEffect, useState } from "react";

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
}

export const MenuItem: React.FC<IProps> = ({ item, isMenuOpen }) => {
  const [showSubItens, setShowSubItens] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      setShowSubItens(false);
    }
  }, [isMenuOpen]);

  return (
    <li style={{ position: "relative" }}>
      <Item
        to={item.path ? item.path : ""}
        onClick={() => setShowSubItens(!showSubItens)}
      >
        {item.icon}
        {isMenuOpen && <span>{item.label}</span>}
      </Item>

      {showSubItens && (
        <ContainerSubItem>
          {item.subItens?.map((subItem, index) => (
            <li>
              <SubItem key={index} to={subItem.path}>
                <span>{subItem.label}</span>
              </SubItem>
            </li>
          ))}
        </ContainerSubItem>
      )}
    </li>
  );
};

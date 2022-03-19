import { AiFillHome } from "react-icons/ai";
import { FaAtom, FaClipboardList } from "react-icons/fa";

import { IMenuItem } from "./MenuItem";

export const menus: IMenuItem[] = [
  { icon: <AiFillHome />, label: "Dashboard", path: "/" },
  {
    icon: <FaClipboardList />,
    label: "Cadastros",
    subItens: [
      { label: "Categorias", path: "/categorias" },
      { label: "Cartões", path: "/cartoes" },
      { label: "Despesas Fixas", path: "/despesas-fixas" },
      { label: "Receitas Fixas", path: "/receitas-fixas" },
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

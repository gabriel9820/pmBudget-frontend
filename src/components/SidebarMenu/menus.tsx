import { AiFillHome } from "react-icons/ai";
import { FaAtom, FaClipboardList } from "react-icons/fa";

import { IMenuItem } from "./MenuItem";

export const menus: IMenuItem[] = [
  { icon: <AiFillHome />, label: "Dashboard", path: "/" },
  {
    icon: <FaClipboardList />,
    label: "Cadastros",
    subItens: [
      { label: "Categorias", path: "/categories" },
      { label: "Cartões de Crédito", path: "/credit-cards" },
      { label: "Despesas Fixas", path: "/fixed-expenses" },
      { label: "Receitas Fixas", path: "/fixed-incomes" },
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

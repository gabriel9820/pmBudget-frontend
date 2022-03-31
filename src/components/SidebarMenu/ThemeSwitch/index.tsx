import { RiSunFill, RiMoonFill } from "react-icons/ri";
import { useSelector } from "react-redux";

import { Container } from "./styles";

import { useAppDispatch, AppState } from "../../../store";
import { switchTheme } from "../../../store/preferences/actions";

interface IProps {
  isMenuOpen: boolean;
}

export const ThemeSwitch: React.FC<IProps> = ({ isMenuOpen }) => {
  const dispatch = useAppDispatch();
  const { theme } = useSelector((state: AppState) => state.preferences);

  const toggleTheme = (newTheme: string) => {
    if (theme !== newTheme) {
      dispatch(switchTheme(newTheme));
    }
  };

  return (
    <Container>
      <div
        onClick={() => toggleTheme("light")}
        className={`${theme === "light" ? "active" : ""}`}
      >
        <RiSunFill />
        {isMenuOpen && <span>Claro</span>}
      </div>
      <div
        onClick={() => toggleTheme("dark")}
        className={`${theme === "dark" ? "active" : ""}`}
      >
        <RiMoonFill />
        {isMenuOpen && <span>Escuro</span>}
      </div>
    </Container>
  );
};

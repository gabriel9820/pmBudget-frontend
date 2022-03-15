import { Container } from "./styles";

interface IProps {
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export const Button: React.FC<IProps> = ({
  children,
  variant = "primary",
  onClick,
}) => {
  return <Container onClick={onClick}>{children}</Container>;
};

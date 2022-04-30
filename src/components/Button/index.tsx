import { Container } from "./styles";

interface IProps {
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<IProps> = ({
  children,
  variant = "primary",
  fullWidth = false,
  onClick,
}) => {
  return (
    <Container onClick={onClick} fullWidth={fullWidth}>
      {children}
    </Container>
  );
};

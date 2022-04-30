import { Button } from "../Button";
import { Container, Title } from "./styles";

interface IProps {
  onNewClick?: () => void;
}

export const PageTitle: React.FC<IProps> = ({ children, onNewClick }) => {
  return (
    <Container>
      <Title>{children}</Title>
      {onNewClick && <Button onClick={onNewClick}>Novo</Button>}
    </Container>
  );
};

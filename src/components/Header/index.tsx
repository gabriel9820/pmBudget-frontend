import { Container, Content } from "./styles";

interface IProps {
  onOpenNewTransactionModal: () => void;
}

export const Header: React.FC<IProps> = ({ onOpenNewTransactionModal }) => {
  return (
    <Container>
      <Content>
        <button onClick={onOpenNewTransactionModal}>Nova Transação</button>
      </Content>
    </Container>
  );
};

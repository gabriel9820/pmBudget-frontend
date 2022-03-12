//import logo from "../../assets/logo.png";

import { Container, Content } from "./styles";

interface IProps {
  onOpenNewTransactionModal: () => void;
}

export const Header: React.FC<IProps> = ({ onOpenNewTransactionModal }) => {
  return (
    <Container>
      <Content>
        {/* <img src={logo} alt="pmBudget" /> */}
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
};

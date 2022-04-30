import { Container } from "./styles";

export const StatusCell: React.FC = ({ children }) => {
  return (
    <Container className={children ? "active" : "inactive"}>
      {children ? "Ativo" : "Inativo"}
    </Container>
  );
};

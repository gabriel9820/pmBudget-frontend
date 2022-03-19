import income from "../../assets/income.svg";
import expense from "../../assets/expense.svg";
import balance from "../../assets/balance.svg";

import { Container } from "./styles";

import { formatMoney } from "../../utils/format";

export const Summary = () => {
  return (
    <Container>
      <div>
        <header>
          <p>Receitas</p>
          <img src={income} alt="Receitas" />
        </header>
        <strong>{formatMoney(1000)}</strong>
      </div>

      <div>
        <header>
          <p>Despesas</p>
          <img src={expense} alt="Despesas" />
        </header>
        <strong>{formatMoney(500)}</strong>
      </div>

      <div className="highlighted-background">
        <header>
          <p>Saldo</p>
          <img src={balance} alt="Saldo" />
        </header>
        <strong>{formatMoney(500)}</strong>
      </div>
    </Container>
  );
};

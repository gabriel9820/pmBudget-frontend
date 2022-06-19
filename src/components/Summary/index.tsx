import { useSelector } from "react-redux";

import income from "../../assets/income.svg";
import expense from "../../assets/expense.svg";
import balance from "../../assets/balance.svg";

import { Container } from "./styles";

import { formatMoney } from "../../utils/format";
import { AppState } from "../../store";

export const Summary = () => {
  const { summary } = useSelector((state: AppState) => state.transactions);

  return (
    <Container>
      <div>
        <header>
          <p>Receitas</p>
          <img src={income} alt="Receitas" />
        </header>
        <strong>{formatMoney(summary.incomes)}</strong>
      </div>

      <div>
        <header>
          <p>Despesas</p>
          <img src={expense} alt="Despesas" />
        </header>
        <strong>{formatMoney(summary.expenses)}</strong>
      </div>

      <div className="highlighted-background">
        <header>
          <p>Saldo</p>
          <img src={balance} alt="Saldo" />
        </header>
        <strong>{formatMoney(summary.balance)}</strong>
      </div>
    </Container>
  );
};

import { useEffect, useState } from "react";

import { Container } from "./styles";

import { getAllTransactionsAsync } from "../../services/transactions.service";
import { formatDate, formatMoney } from "../../utils/format";
import {
  ITransactionOutputModel,
  TransactionType,
} from "../../models/transaction.model";

export const TransactionsTable = () => {
  const [transactions, setTransactions] = useState<ITransactionOutputModel[]>(
    []
  );

  useEffect(() => {
    const getAllTransactions = async () => {
      const { data: apiResponse } = await getAllTransactionsAsync();
      setTransactions(apiResponse.data);
    };

    getAllTransactions();
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.title}</td>
              <td
                className={
                  transaction.type === TransactionType.Income
                    ? "income"
                    : "expense"
                }
              >
                {formatMoney(transaction.value)}
              </td>
              <td>{transaction.category}</td>
              <td>{formatDate(new Date())}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

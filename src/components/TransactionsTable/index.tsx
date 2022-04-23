import { useEffect, useState } from "react";
import { Column } from "react-table";

import { ValueCell } from "./styles";
import { Table } from "../Table";

import {
  deleteTransactionByIdAsync,
  getAllTransactionsAsync,
} from "../../services/transactions.service";
import { formatDate, formatMoney } from "../../utils/format";
import {
  ITransactionInputModel,
  ITransactionOutputModel,
  TransactionType,
} from "../../models/transaction.model";
import { apiExceptionHandler } from "../../utils/exception-handler";

const columns: Column<ITransactionOutputModel>[] = [
  {
    Header: "Título",
    accessor: "title",
  },
  {
    Header: "Valor",
    accessor: "value",
    Cell: ({ value, row }) => {
      const className =
        row.original.type === TransactionType.Income ? "income" : "expense";

      return <ValueCell className={className}>{formatMoney(value)}</ValueCell>;
    },
  },
  {
    Header: "Categoria",
    accessor: "category",
  },
  {
    Header: "Data",
    accessor: "date",
    Cell: ({ value }) => formatDate(value),
  },
];

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

  const deleteTransaction = async (data: ITransactionInputModel) => {
    try {
      await deleteTransactionByIdAsync(data.id);
    } catch (error) {
      apiExceptionHandler(error);
    }
  };

  return (
    <Table
      columns={columns}
      data={transactions}
      onDeleteClick={(data) => deleteTransaction(data)}
    />
  );
};

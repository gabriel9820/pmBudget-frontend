import { useSelector } from "react-redux";
import { Column } from "react-table";

import { ValueCell } from "./styles";
import { Table } from "../Table";

import { formatDate, formatMoney } from "../../utils/format";
import {
  ITransactionOutputModel,
  TransactionType,
} from "../../models/transaction.model";
import { AppState, useAppDispatch } from "../../store";
import { deleteTransactionById } from "../../store/transactions/actions";

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
  const dispatch = useAppDispatch();
  const { transactions } = useSelector((state: AppState) => state.transactions);

  const deleteTransaction = (data: ITransactionOutputModel) => {
    dispatch(deleteTransactionById(data.id));
  };

  return (
    <Table
      columns={columns}
      data={transactions}
      onDeleteClick={(data) => deleteTransaction(data)}
    />
  );
};

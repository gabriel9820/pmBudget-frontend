interface ITransaction {
  date: Date;
  title: string;
  type: TransactionType;
  value: number;
  category: string;
}

export enum TransactionType {
  Income = 1,
  Expense = 2,
}

export interface ITransactionInputModel extends ITransaction {
  id: number | undefined;
}

export interface ITransactionOutputModel extends ITransaction {
  id: number;
}

export interface ISummaryOutputModel {
  incomes: number;
  expenses: number;
  balance: number;
}

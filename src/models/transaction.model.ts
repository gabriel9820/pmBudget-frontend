interface ITransaction {
  id: number;
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

export interface ITransactionInputModel extends ITransaction {}

export interface ITransactionOutputModel extends ITransaction {}

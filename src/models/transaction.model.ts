import { ICategoryOutputModel } from "./category.model";

interface ITransaction {
  date: Date;
  title: string;
  type: TransactionType;
  value: number;
}

export enum TransactionType {
  Income = 1,
  Expense = 2,
}

export interface ITransactionInputModel extends ITransaction {
  id: number | undefined;
  categoryId: number;
}

export interface ITransactionOutputModel extends ITransaction {
  id: number;
  category: ICategoryOutputModel;
}

export interface ISummaryOutputModel {
  incomes: number;
  expenses: number;
  balance: number;
}

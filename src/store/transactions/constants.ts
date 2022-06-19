import { ISummaryOutputModel, ITransactionOutputModel } from "../../models/transaction.model";

export interface ITransactionsReducerProps {
  transactions: ITransactionOutputModel[];
  summary: ISummaryOutputModel;
}

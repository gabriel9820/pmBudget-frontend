import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import { ITransactionsReducerProps } from "./constants";
import { getAllTransactionsAction } from "./actions";
import {
  ISummaryOutputModel,
  ITransactionOutputModel,
} from "../../models/transaction.model";

const INIT_STATE = {
  transactions: [],
  summary: {
    incomes: 0,
    expenses: 0,
    balance: 0,
  },
};

export default createReducer<ITransactionsReducerProps>(INIT_STATE, {
  [getAllTransactionsAction.type]: (
    state,
    action: PayloadAction<{
      transactions: ITransactionOutputModel[];
      summary: ISummaryOutputModel;
    }>
  ) => ({
    ...state,
    transactions: action.payload.transactions,
    summary: action.payload.summary,
  }),
});

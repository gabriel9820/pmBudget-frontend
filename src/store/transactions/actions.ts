import { createAction } from "@reduxjs/toolkit";

// import { AppDispatch } from "..";
import {
  ISummaryOutputModel,
  ITransactionInputModel,
  ITransactionOutputModel,
} from "../../models/transaction.model";
import {
  createTransactionAsync,
  deleteTransactionByIdAsync,
  getAllTransactionsAsync,
  getSummaryAsync,
} from "../../services/transactions.service";

export const getAllTransactionsAction = createAction<{
  transactions: ITransactionOutputModel[];
  summary: ISummaryOutputModel;
}>("GET_ALL_TRANSACTIONS");

export const getAllTransactions = () => {
  return async (dispatch: any) => {
    try {
      const { data: apiResponseTransactions } = await getAllTransactionsAsync();
      const { data: apiResponseSummary } = await getSummaryAsync();

      dispatch(
        getAllTransactionsAction({
          transactions: apiResponseTransactions.data,
          summary: apiResponseSummary.data,
        })
      );
    } catch (erro) {
      //tratarErro(erro);
    }
  };
};

export const createTransaction = (transaction: ITransactionInputModel) => {
  return async (dispatch: any) => {
    try {
      await createTransactionAsync(transaction);
      dispatch(getAllTransactions());

      // Alerta({
      //   tipo: "success",
      //   texto: "Transação criada com sucesso!",
      // });
    } catch (erro) {
      // tratarErro(erro);
    }
  };
};

export const deleteTransactionById = (id: number) => {
  return async (dispatch: any) => {
    try {
      await deleteTransactionByIdAsync(id);
      dispatch(getAllTransactions());

      // Alerta({
      //   tipo: "success",
      //   texto: "Transação excluída com sucesso!",
      // });
    } catch (erro) {
      //tratarErro(erro);
    }
  };
};

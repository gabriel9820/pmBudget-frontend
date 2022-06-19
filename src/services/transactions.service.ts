import { api } from "./api";
import { IApiResponse } from "../models/api.model";
import {
  ISummaryOutputModel,
  ITransactionInputModel,
  ITransactionOutputModel,
} from "../models/transaction.model";

export const getAllTransactionsAsync = async () => {
  return api.get<IApiResponse<ITransactionOutputModel[]>>("transactions");
};

export const getSummaryAsync = async () => {
  return api.get<IApiResponse<ISummaryOutputModel>>("transactions/summary");
};

export const createTransactionAsync = async (data: ITransactionInputModel) => {
  return api.post<IApiResponse<ITransactionOutputModel[]>>(
    "transactions",
    data
  );
};

export const deleteTransactionByIdAsync = async (id: number) => {
  return api.delete<IApiResponse<void>>(`transactions/${id}`);
};

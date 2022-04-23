import { api } from "./api";
import { IApiResponse } from "../models/api.model";
import {
  ITransactionInputModel,
  ITransactionOutputModel,
} from "../models/transaction.model";

export const getAllTransactionsAsync = async () => {
  return api.get<IApiResponse<ITransactionOutputModel[]>>("transactions");
};

export const getTransactionByIdAsync = async (id: number) => {
  return api.get<IApiResponse<ITransactionOutputModel[]>>(`transactions/${id}`);
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

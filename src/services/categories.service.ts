import { api } from "./api";
import { IApiResponse } from "../models/api.model";
import {
  ICategoryInputModel,
  ICategoryOutputModel,
} from "../models/category.model";

export const getAllCategoriesAsync = async () => {
  return api.get<IApiResponse<ICategoryOutputModel[]>>("categories");
};

export const getCategoryByIdAsync = async (id: number) => {
  return api.get<IApiResponse<ICategoryOutputModel[]>>(`categories/${id}`);
};

export const createCategoryAsync = async (data: ICategoryInputModel) => {
  return api.post<IApiResponse<ICategoryOutputModel[]>>("categories", data);
};

export const updateCategoryAsync = async (
  id: number,
  data: ICategoryInputModel
) => {
  return api.put<IApiResponse<ICategoryOutputModel>>(`categories/${id}`, data);
};

export const deleteCategoryByIdAsync = async (id: number) => {
  return api.delete<void>(`categories/${id}`);
};

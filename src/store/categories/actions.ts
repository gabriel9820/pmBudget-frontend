import { createAction } from "@reduxjs/toolkit";

// import { AppDispatch } from "..";
import { ICategoryOutputModel } from "../../models/category.model";
import {
  createCategoryAsync,
  deleteCategoryByIdAsync,
  getAllCategoriesAsync,
  updateCategoryAsync,
} from "../../services/categories.service";

export const getAllCategoriesAction =
  createAction<ICategoryOutputModel[]>("GET_ALL_CATEGORIES");

export const getAllCategories = () => {
  return async (dispatch: any) => {
    try {
      const { data: apiResponse } = await getAllCategoriesAsync();
      dispatch(getAllCategoriesAction(apiResponse.data));
    } catch (erro) {
      //tratarErro(erro);
    }
  };
};

export const createCategory = (category: ICategoryOutputModel) => {
  return async (dispatch: any) => {
    try {
      await createCategoryAsync(category);
      dispatch(getAllCategories());

      // Alerta({
      //   tipo: "success",
      //   texto: "Categoria criada com sucesso!",
      // });
    } catch (erro) {
      // tratarErro(erro);
    }
  };
};

export const updateCategory = (category: ICategoryOutputModel) => {
  return async (dispatch: any) => {
    try {
      await updateCategoryAsync(category.id, category);
      dispatch(getAllCategories());

      // Alerta({
      //   tipo: "success",
      //   texto: "Categoria alterada com sucesso!",
      // });
    } catch (erro) {
      // tratarErro(erro);
    }
  };
};

export const deleteCategoryById = (id: number) => {
  return async (dispatch: any) => {
    try {
      await deleteCategoryByIdAsync(id);
      dispatch(getAllCategories());

      // Alerta({
      //   tipo: "success",
      //   texto: "Aluno excluído com sucesso!",
      // });
    } catch (erro) {
      //tratarErro(erro);
    }
  };
};

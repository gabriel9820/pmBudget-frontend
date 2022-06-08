import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import { ICategoriesReducerProps } from "./constants";
import { getAllCategoriesAction } from "./actions";
import { ICategoryOutputModel } from "../../models/category.model";

const INIT_STATE = {
  categories: [],
};

export default createReducer<ICategoriesReducerProps>(INIT_STATE, {
  [getAllCategoriesAction.type]: (state, action: PayloadAction<ICategoryOutputModel[]>) => ({
    ...state,
    categories: action.payload,
  }),
});

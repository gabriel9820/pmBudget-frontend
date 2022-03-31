import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import { IAuthReducerProps } from "./constants";
import { loginUser } from "./actions";
import { IAuthenticatedUserOutputModel } from "../../models/login.model";

const INIT_STATE = {
  isLoggedIn: false,
  user: undefined,
};

export default createReducer<IAuthReducerProps>(INIT_STATE, {
  [loginUser.type]: (
    state,
    action: PayloadAction<IAuthenticatedUserOutputModel>
  ) => ({
    ...state,
    isLoggedIn: true,
    user: action.payload,
  }),
});

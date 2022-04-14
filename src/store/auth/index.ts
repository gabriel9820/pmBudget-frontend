import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import { IAuthReducerProps } from "./constants";
import { loginUser, logoutUser } from "./actions";
import { ILoginOutputModel } from "../../models/login.model";

const INIT_STATE = {
  isLoggedIn: false,
  user: undefined,
  accessToken: "",
};

export default createReducer<IAuthReducerProps>(INIT_STATE, {
  [loginUser.type]: (state, action: PayloadAction<ILoginOutputModel>) => ({
    ...state,
    isLoggedIn: true,
    user: action.payload.user,
    accessToken: action.payload.accessToken,
  }),
  [logoutUser.type]: (state) => ({
    ...state,
    isLoggedIn: false,
    user: undefined,
    accessToken: "",
  }),
});

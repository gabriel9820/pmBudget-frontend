import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import { IPreferencesReducerProps } from "./constants";
import { switchTheme } from "./actions";

const INIT_STATE = {
  theme: "dark",
};

export default createReducer<IPreferencesReducerProps>(INIT_STATE, {
  [switchTheme.type]: (state, action: PayloadAction<string>) => ({
    ...state,
    theme: action.payload,
  }),
});

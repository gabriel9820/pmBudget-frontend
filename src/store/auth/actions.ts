import { createAction } from "@reduxjs/toolkit";

import { ILoginOutputModel } from "../../models/login.model";

export const loginUser = createAction<ILoginOutputModel>("LOGIN_USER");

export const logoutUser = createAction("LOGOUT_USER");

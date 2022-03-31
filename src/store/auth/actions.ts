import { createAction } from "@reduxjs/toolkit";

import { IAuthenticatedUserOutputModel } from "../../models/login.model";

export const loginUser =
  createAction<IAuthenticatedUserOutputModel>("LOGIN_USER");

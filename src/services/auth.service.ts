import { api } from "./api";
import { IApiResponse } from "../models/api.model";
import { ILoginOutputModel } from "../models/login.model";

export const loginAsync = async (username: string, password: string) => {
  return api.post<IApiResponse<ILoginOutputModel>>("accounts/login", {
    userName: username,
    password: password,
  });
};

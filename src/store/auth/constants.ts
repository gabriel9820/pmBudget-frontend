import { IAuthenticatedUserOutputModel } from "../../models/login.model";

export interface IAuthReducerProps {
  isLoggedIn: boolean;
  user: IAuthenticatedUserOutputModel | undefined;
}

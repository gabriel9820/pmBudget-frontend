export interface ILoginOutputModel {
  accessToken: string;
  expiresIn: number;
  user: IAuthenticatedUserOutputModel;
}

export interface IAuthenticatedUserOutputModel {
  id: string;
  name: string;
  email: string;
  userName: string;
}

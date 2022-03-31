import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";

import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

import { AppState } from "../store";

export const AppRoutes = () => {
  const { isLoggedIn } = useSelector((state: AppState) => state.auth);

  return useRoutes([PrivateRoutes(isLoggedIn), PublicRoutes(isLoggedIn)]);
};

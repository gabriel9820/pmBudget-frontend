import { useRoutes } from "react-router-dom";

import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const AppRoutes = () => {
  const isLoggedIn = true;

  return useRoutes([PrivateRoutes(isLoggedIn), PublicRoutes(isLoggedIn)]);
};

import { Navigate, RouteObject } from "react-router-dom";

import { PublicLayout } from "../layout/PublicLayout";
import { LoginPage } from "../pages/Login";

export const PublicRoutes = (isLoggedIn: boolean): RouteObject => ({
  path: "/",
  element: isLoggedIn ? <Navigate to="/" /> : <PublicLayout />,
  children: [
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/registrar",
      element: <div>Registrar</div>,
    },
  ],
});

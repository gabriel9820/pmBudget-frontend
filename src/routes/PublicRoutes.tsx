import { Navigate, RouteObject } from "react-router-dom";

import { PublicLayout } from "../layout/PublicLayout";
import { Login } from "../components/Login";

export const PublicRoutes = (isLoggedIn: boolean): RouteObject => ({
  path: "/",
  element: isLoggedIn ? <Navigate to="/" /> : <PublicLayout />,
  children: [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/registrar",
      element: <div>Registrar</div>,
    },
  ],
});

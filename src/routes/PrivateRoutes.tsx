import { Navigate, RouteObject } from "react-router-dom";

import { PrivateLayout } from "../layout/PrivateLayout";
import Dashboard from "../pages/Dashboard";

export const PrivateRoutes = (isLoggedIn: boolean): RouteObject => ({
  path: "/",
  element: isLoggedIn ? <PrivateLayout /> : <Navigate to="/login" />,
  children: [
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/categorias",
      element: <div style={{ color: "white" }}>Categorias</div>,
    },
  ],
});

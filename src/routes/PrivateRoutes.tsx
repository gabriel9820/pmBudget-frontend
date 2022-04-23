import { Navigate, RouteObject } from "react-router-dom";

import { PrivateLayout } from "../layout/PrivateLayout";
import { CategoriesPage } from "../pages/Categories";
import { DashboardPage } from "../pages/Dashboard";

export const PrivateRoutes = (isLoggedIn: boolean): RouteObject => ({
  path: "/",
  element: isLoggedIn ? <PrivateLayout /> : <Navigate to="/login" />,
  children: [
    {
      path: "/",
      element: <DashboardPage />,
    },
    {
      path: "/categories",
      element: <CategoriesPage />,
    },
  ],
});

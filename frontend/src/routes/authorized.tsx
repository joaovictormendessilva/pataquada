import { createBrowserRouter } from "react-router";
import { HomePage } from "../pages/home/HomePage";

export const authorizedRoutes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

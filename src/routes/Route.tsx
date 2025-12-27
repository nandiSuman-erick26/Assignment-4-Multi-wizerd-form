import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const Form = lazy(() => import("../pages/Form"));
export const Route = createBrowserRouter([
  {
    path: "",
    element: <Form />,
  },
]);

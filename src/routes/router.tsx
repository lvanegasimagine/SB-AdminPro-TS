import { createBrowserRouter } from "react-router-dom";
import {
  RootLayout,
} from "@/components/organisms";
import { Login, Register } from "@/pages/Auth";
import { NotFound } from "@/pages/NotFound";
import { PrivateRouter } from "./Private/PrivateRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      PrivateRouter
    ],
  },
]);

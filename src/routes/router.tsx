import App from "@/App";
import {
  RootLayout,
  LayoutPublic,
  LayoutTwo,
  LayoutThree,
} from "@/components/organisms";
import { PrivateLayout } from "@/components/organisms/PrivateLayout";
import { Login, Register } from "@/pages/Auth";
import { NotFound } from "@/pages/NotFound";
import { createBrowserRouter } from "react-router-dom";

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
      {
        path: "dashboard",
        element: <PrivateLayout />,
        children: [
          {
            path: '/dashboard',
            element: <App />,
            children: [
              {
                path: "dashboard-1",
                element: <LayoutPublic />,
              },
              {
                path: "dashboard-2",
                element: <LayoutTwo />,
              },
              {
                path: "dashboard-3",
                element: <LayoutThree />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

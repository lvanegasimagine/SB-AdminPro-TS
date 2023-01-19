import App from "@/App";
import {
  LayoutPublic,
  LayoutTwo,
  LayoutThree,
  Account,
  PrivateLayout
} from "@/components/organisms";

export const PrivateRouter = {
  path: "dashboard",
  element: <PrivateLayout />,
  children: [
    {
      path: '/dashboard',
      element: <App />,
      children: [
        {
          index: true,
          element: <LayoutPublic />,
        },
        {
          path: "dashboard-2",
          element: <LayoutTwo />,
        },
        {
          path: "dashboard-3",
          element: <LayoutThree />,
        },{
          path: "account",
          element: <Account />,
        },
      ],
    },
  ],
}

import App from "@/App";
import { Modal } from "@/components/atoms";
import {
  LayoutPublic,
  LayoutTwo,
  LayoutThree,
  PrivateLayout,
} from "@/components/organisms";
import { Billing, LayoutAccount, Profile } from "@/components/organisms/Account";
import { Security } from "@/components/organisms/Account";

export const PrivateRouter = {
  path: "dashboard",
  element: <PrivateLayout />,
  children: [
    {
      path: "/dashboard",
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
        },
        {
          path: "account",
          element: <Profile />,
          children: [
            {
              path: 'profile',
              element: <LayoutAccount/>
            },
            {
              path: 'billing',
              element: <Billing/>
            },
            {
              path: 'security',
              element: <Security/>
            }
          ]
        },
      ],
    },
  ],
};

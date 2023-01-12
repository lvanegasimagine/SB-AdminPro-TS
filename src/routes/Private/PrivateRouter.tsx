import {
  LayoutPublic,
  LayoutTwo,
  LayoutThree,
  Account,
} from "@/components/organisms";

export const PrivateRouter = [
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
    element: <Account />,
  },
];

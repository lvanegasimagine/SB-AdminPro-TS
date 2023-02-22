import App from "@/App";
import {
  LayoutPublic,
  LayoutTwo,
  PrivateLayout,
  LayoutEmpleado
} from "@/components/organisms";
import { Billing, LayoutAccount, Profile, Security } from "@/components/organisms/Account";
import { Empleado, EditarEmpleado, NuevoEmpleado } from "@/pages/Empleado";

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
          path: "empleado",
          element: <LayoutEmpleado />,
          children: [
            {
              index: true,
              element:<Empleado/>
            },
            {
              path: "nuevo",
              element: <NuevoEmpleado/>
            },
            {
              path: "editar/:id",
              element: <EditarEmpleado/>
            }
          ]
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

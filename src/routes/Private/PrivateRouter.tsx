import App from "@/App";
import {
  LayoutPublic,
  LayoutTwo,
  PrivateLayout,
  LayoutEmpleado,
  LayoutDepartamento,
} from "@/components/organisms";
import {
  Billing,
  LayoutAccount,
  Profile,
  Security,
} from "@/components/organisms/Account";
import { Departamento, EditarDepartamento, ViewDepartament } from "@/pages";
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
              element: <Empleado />,
            },
            {
              path: "nuevo",
              element: <NuevoEmpleado />,
            },
            {
              path: "editar/:id",
              element: <EditarEmpleado />
            },
          ],
        },
        {
          path: "departamento",
          element: <LayoutDepartamento />,
          children: [
            {
              index: true,
              element: <Departamento />,
            },
            {
              path: "view/:id",
              element: <ViewDepartament />,
            },
            {
              path: "editar/:id",
              element: <EditarDepartamento />,
            },
          ],
        },
        {
          path: "account",
          element: <Profile />,
          children: [
            {
              path: "profile",
              element: <LayoutAccount />,
            },
            {
              path: "billing",
              element: <Billing />,
            },
            {
              path: "security",
              element: <Security />,
            },
          ],
        },
      ],
    },
  ],
};

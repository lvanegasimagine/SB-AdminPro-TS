import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/atoms";
import "./styles/LayoutEmpleado.css";

export interface LayoutEmpleadoInterface {}

const LayoutEmpleado = (): JSX.Element => {
  return (
    <>
      <main>
        <Header icon=" bi-file-earmark-person-fill" title="Empleados" />
        <Outlet />
      </main>
      {/* <Footer/> */}
    </>
  );
};

export default LayoutEmpleado;

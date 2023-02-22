import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import USERLIST from "@/components/organisms/LayoutEmpleado/data/Empleado";

import "./styles/EditarEmpleado.css";

export interface EditarEmpleadoInterface {
  id: string;
  avatarUrl: string;
  name: string;
  status: string;
  role: string;
}

const EditarEmpleado = () => {
  const [empleado, setEmpleado] = useState<EditarEmpleadoInterface | any>("");
  const { id } = useParams();

  useEffect(() => {
    (() => {
      const data = USERLIST.find((e) => e.id === id);
      setEmpleado(data);
    })();
  }, [id]);

  return (
    <div className="container-fluid px-4">
      <div className="card bg-gradient-primary-to-secondary mb-4">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <div className="me-3">
              <div className="small text-white-50">Organización:</div>
              <div className="h1 text-white">Corea y Asociados S.A</div>
            </div>
            <div className="text-white">miembros</div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>{empleado.id}</div>
        <div>{empleado.avatarUrl}</div>
        <div>{empleado.name}</div>
        <div>{empleado.status}</div>
        <div>{empleado.role}</div>
      </div>
    </div>
  );
};

export default EditarEmpleado;

import React from "react";
import "./styles/NuevoEmpleado.css";
export interface NuevoEmpleadoInterface {}

const NuevoEmpleado: React.FC<NuevoEmpleadoInterface> = () => {
  return (
    <div className="container-fluid px-4">
      <div className="card bg-gradient-primary-to-secondary mb-4">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <div className="me-3">
              <div className="h1 text-white">Crear Empleado</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoEmpleado;

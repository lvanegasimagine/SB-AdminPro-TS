import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import './empleado.css'
import USERLIST from "@/components/organisms/LayoutEmpleado/data/Empleado";
import { ListarEmpleado } from "./ListarEmpleado";

const Empleado = () => {
  const [empleados, setEmpleados] = useState(USERLIST)
  const [filtroRol, setFiltroRol] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    if (!empleados) setEmpleados([]);
    console.log("🚀 ~ file: Empleado.tsx:11 ~ Empleado ~ roles:", roles)
  }, [empleados]);

  const roles = [...new Set(empleados.map((empleado) => empleado.role))]
  const empleadosFiltrado = empleados.filter((employee) => filtroRol === '' || employee.role === filtroRol)


  const handleNavigate = () => {
    navigate("nuevo");
  };

  return (
    <div className="container-fluid px-4">
      <div className="card bg-gradient-primary-to-secondary mb-4">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <div className="me-3">
              <div className="small text-white-50">Organización:</div>
              <div className="h1 text-white">Corea y Asociados S.A</div>
            </div>
            <div className="text-white">{empleados.length} miembros</div>
          </div>
        </div>
      </div>
      <button
        className="btn btn-primary text-primary justify-content-around text-white"
        onClick={handleNavigate}
      >
        <i
          className="bi-person"
          style={{
            fontSize: "1rem",
            marginRight: "0.2rem",
            color: "white",
            paddingBottom: '2px'
          }}
        ></i>
        Nuevo Empleado
      </button>
      <div className="card mt-2">
        <div className="card-body">
          <div className="d-flex flex-row-reverse align-items-center mb-4">
            <div>
              <select className="form-select" id="rol" value={filtroRol} onChange={(e) => setFiltroRol(e.target.value)}>
                <option value="">--- Seleccionar Opcion ---</option>
                {roles.map((rol) => <option key={rol} value={rol}>{rol}</option>)}
              </select>
            </div>
            <span className="p-2 text-black">Filtrar</span>
          </div>
          <div className="container">
            <div className="row">
              {empleadosFiltrado.map((empleado) => <ListarEmpleado empleado={empleado}/>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empleado;

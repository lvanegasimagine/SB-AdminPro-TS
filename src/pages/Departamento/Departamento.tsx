import { httpClient } from "@/axios/httpClient";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/Departamento.css";
import { Modal } from "@/components/atoms";

export interface DepartamentoInterface { }

interface iDepartamentoResponse {
  id: number;
  nombre_departamento: String;
  descripcion_departamento: String;
  created_at: string;
  updated_at: string;
}
const Departamento: React.FC<DepartamentoInterface> = () => {
  const [departamento, setDepartamento] = useState<
    iDepartamentoResponse[] | []
  >([]);
  const navigate = useNavigate();
  const [modalDepartamento, setModalDepartamento] = useState('exampleModalCenter')
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    listarDepartamento();
  }, [modalDepartamento]);

  const listarDepartamento = async () => {
    try {
      const {
        data: { data },
      } = await httpClient.get("/departamento");
      if (data) {
        setDepartamento(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleOpen = () => setShowModal(true);

  const handleClose = () => setShowModal(false);

  return (
    <div className="container-fluid px-4">
      <div className="card bg-gradient-primary-to-secondary mb-4">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <div className="me-3">
              <div className="small text-white-50">Organización:</div>
              <div className="h1 text-white">Corea y Asociados S.A</div>
            </div>
            <div className="text-white">{departamento.length} miembros</div>
          </div>
        </div>
      </div>
      <div className="col-12 col-xl-auto mb-3">
        <button
          className="btn btn-primary text-primary justify-content-around text-white"
          onClick={() => navigate('nuevo')}
        >
          <i
            className="bi-person"
            style={{
              fontSize: "1rem",
              marginRight: "0.2rem",
              color: "white",
            }}
          ></i>
          Nuevo Departamento
        </button>
      </div>
      <div className="card">
        <div className="card-body">
          {/* <div className="small text-muted mb-2">Administrators:</div> */}
          <div className="row">
            {departamento.map((empleados) => (
              <div className="col-lg-4 pb-4" key={empleados.id}>
                <div className="d-flex align-items-center">
                  <div className="avatar avatar-lg">
                    <img
                      className="avatar-img img-fluid"
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${empleados.id}.png`}
                    />
                  </div>
                  <div className="ms-3">
                    <Link
                      to={`editar/${empleados.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div className="fs-4 text-dark fw-500">
                        {empleados.nombre_departamento}
                      </div>
                    </Link>
                    <div className="small text-muted">{empleados.descripcion_departamento}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departamento;

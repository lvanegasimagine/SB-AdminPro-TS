import { Link, useNavigate } from 'react-router-dom';

import USERLIST from "@/components/organisms/LayoutEmpleado/data/Empleado";

const Empleado = () => {
  const navigate = useNavigate();

  const handleNavigate = () => { 
    navigate('nuevo')
   }
  return (
    <div className="container-fluid px-4">
          <div className="card bg-gradient-primary-to-secondary mb-4">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <div className="me-3">
                  <div className="small text-white-50">Organización:</div>
                  <div className="h1 text-white">Corea y Asociados S.A</div>
                </div>
                <div className="text-white">{USERLIST.length} miembros</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-auto mb-3">
            <button className="btn btn-primary text-primary justify-content-around text-white" onClick={handleNavigate}>
              <i
                className="bi-person"
                style={{
                  fontSize: "1rem",
                  marginRight: "0.2rem",
                  color: "white",
                }}
              ></i>
              Nuevo Empleado
            </button>
          </div>
          <div className="card">
            <div className="card-body">
              {/* <div className="small text-muted mb-2">Administrators:</div> */}
              <div className="row">
                {USERLIST.map((empleados) => (
                  <div className="col-lg-4 pb-4" key={empleados.id}>
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-lg">
                        <img
                          className="avatar-img img-fluid"
                          src={empleados.avatarUrl}
                        />
                      </div>
                      <div className="ms-3">
                        <Link
                          to={`editar/${empleados.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <div className="fs-4 text-dark fw-500">
                            {empleados.name}
                          </div>
                        </Link>
                        <div className="small text-muted">{empleados.role}</div>
                        {empleados.status === "active" ? (
                          <span className="badge badge-success">
                            {empleados.status}
                          </span>
                        ) : (
                          <span className="badge badge-danger">
                            {empleados.status}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
  )
}

export default Empleado
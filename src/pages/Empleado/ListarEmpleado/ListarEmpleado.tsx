import React from 'react';
import './ListarEmpleado.css';
import { Link } from 'react-router-dom';

export type ListarEmpleadoProps = {
	empleado: any
}

const ListarEmpleado: React.FC<ListarEmpleadoProps> = ({ empleado }) => {
	return (
		<div className="col-lg-4 col-md-6 mb-4" key={empleado.id}>
			<div className="col-lg-8 pb-6" >
				<div className="d-flex align-items-center">
					<div className="avatar avatar-lg">
						<img
							className="avatar-img img-fluid"
							src={empleado.avatarUrl}
						/>
					</div>
					<div className="ms-3">
						<Link
							to={`editar/${empleado.id}`}
							style={{ textDecoration: "none" }}
						>
							<div className="fs-4 text-dark fw-500">
								{empleado.name}
							</div>
						</Link>
						<span className="small pb-1 fw-bolder">{empleado.role}</span>
						<div className="small text-muted">{empleado.job_title}</div>
					</div>
				</div>
			</div>
		</div>
	)

};

export default ListarEmpleado;

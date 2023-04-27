import { getDepartamento } from '@/api/ResponseDepartamento';
import { ErrorMessage, FooterModal, Loader, Modal } from '@/components/atoms';
import FormikControl from '@/formik/FormikControl';
import { IActionsForms, IEmployee, INewDepartament } from '@/interface';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import * as Yup from "yup";
import { IconButton } from '@mui/material';

const ViewDepartament = () => {
	const [open, setOpen] = useState(false);
	const { id } = useParams();
	const { data, isLoading: isLoadingDepartament, isError: isErrorDepartament, error } = useQuery(['departamento', { id }], getDepartamento);

	if (isLoadingDepartament) return <Loader />

	if (isErrorDepartament) return <ErrorMessage />

	const initialValues: INewDepartament = {
		name: data?.name,
		description: data?.description
	};

	const validationSchema = Yup.object().shape({
		name: Yup.string().required("Name is required"),
		description: Yup.string().min(6).required("Description is required"),
	});

	const onSubmit = async (
		values: INewDepartament,
		{ resetForm, setSubmitting }: IActionsForms
	) => {
		console.log(values)
	};

	const handleOpen = () => setOpen(true);

	const handleClose = () => setOpen(false);

	const bodyContent = (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			{({ handleSubmit, isSubmitting }) => (
				<Form onSubmit={handleSubmit}>
					<div className="mb-4 pt-3">
						<FormikControl
							control="InputField"
							type="text"
							label="Nombre del Departamento"
							name="name"
							required
						/>
					</div>
					<div className="mb-5">
						<FormikControl
							control="InputField"
							type="text"
							label="Descripcion del Departamento"
							name="description"
							required
						/>
					</div>
					<FooterModal handleClose={handleClose} isSubmitting={isSubmitting} />
				</Form>
			)}
		</Formik>
	)

	return (
		<div className="container-xl px-4 mt-4">
			<div className="card">
				<div className="card-header">Detalles Departamento</div>
				<div className="card-body">
					<a className="card card-icon lift lift-sm mb-4">
						<div className="row g-0">
							<div className="col-auto card-icon-aside bg-primary" style={{ color: 'white' }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
							</svg>
							</div>
							<div className="col">
								<div className="card-body py-5">
									{data ? (
										<>
											<h5 className="card-title text-primary mb-2" onClick={handleOpen}>Departamento: {data.name}
												<IconButton aria-label="delete">
													
												</IconButton>
											</h5>
											<p className="card-text mb-1">Descripción: {data.description}</p>
											<div className="small text-muted">Empleados asignado: {data.employees.length}</div>
										</>
									) : (<div>
										<h5 className="card-title text-primary mb-2">No hay data</h5>
									</div>)}
									{open && <Modal handleClose={handleClose} open={open} title="Editar Departamento" body={bodyContent} />}
								</div>
							</div>
						</div>
					</a>
					<div style={{ textAlign: "right" }}>
						<button className='btn btn-success'>+ Agregar Empleado</button>
						<button className='btn btn-success' onClick={handleOpen}>+ Editar Departamento</button>
					</div>
					<h4 className="mb-0 mt-5">Empleados Asignados</h4>
					<hr className="mt-2 mb-4" />
					<div className="row">
						{data.employees.length > 0 ? (
							<>
								{data.employees.map((empleado: IEmployee) => (
									<div className="col-lg-4 mb-4" key={empleado._id}>
										<a className="card lift lift-sm h-100" href="knowledge-base-category.html">
											<div className="card-body py-5">
												<h5 className="card-title text-orange mb-2">
													🧔 {empleado.firstName} {empleado.lastName}
												</h5>
												<p className="card-text">{empleado.position}</p>
											</div>
											<div className="card-footer"><div className="small text-muted">✉ {empleado.email} 📱 {empleado.phone}</div></div>
										</a>
									</div>
								))}
							</>) : null}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ViewDepartament
import { httpClient } from "@/axios/httpClient";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FooterModal, Modal } from "@/components/atoms";
import { Form, Formik } from "formik";
import FormikControl from "@/formik/FormikControl";
import * as Yup from "yup";
import "./styles/Departamento.css";
import { IActionsForms, INewDepartament } from "@/interface";


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
  const [open, setOpen] = React.useState(false);

  const initialValues: INewDepartament = {
    name: "Informatica",
    description: "Responsable de los equipos informaticos de la empresa",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    description: Yup.string().min(6).required("Description is required"),
  });

  const onSubmit = async (
    { name, description }: INewDepartament,
    { resetForm, setSubmitting }: IActionsForms
  ) => {
    console.log({ name, description })
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
          <FooterModal handleClose={handleClose} />
        </Form>
      )}
    </Formik>
  )


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
          onClick={handleOpen}
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
        {open && <Modal handleClose={handleClose} open={open} title="Nuevo Departamento" body={bodyContent} />}
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

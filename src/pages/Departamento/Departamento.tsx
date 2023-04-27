import { useState } from 'react';
import { ErrorMessage, FooterModal, Loader, Modal } from "@/components/atoms";
import { Form, Formik } from "formik";
import FormikControl from "@/formik/FormikControl";
import { IActionsForms, INewDepartament } from "@/interface";
import { useMutateDepartamento, useQueryDepartamento } from "@/hooks/useMutate";
import { DepartamentItemScreen } from '@/components/organisms';
import * as Yup from "yup";
import "./styles/Departamento.css";

export interface DepartamentoInterface { }

const Departamento: React.FC<DepartamentoInterface> = () => {
  const [open, setOpen] = useState(false);

  const { mutate, isError, isLoading } = useMutateDepartamento();
  const { data: departamentoList, isError: isErrorDepartament, isLoading: isLoadingDepartament } = useQueryDepartamento();

  if (isLoadingDepartament) return <Loader />

  if (isErrorDepartament) return <ErrorMessage />

  const initialValues: INewDepartament = {
    name: "Informatica",
    description: "Responsable de los equipos informaticos de la empresa",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    description: Yup.string().min(6).required("Description is required"),
  });

  const onSubmit = async (
    values: INewDepartament,
    { resetForm, setSubmitting }: IActionsForms
  ) => {
    mutate(values, {
      onSuccess: () => {
        resetForm();
        setSubmitting(false);
        setOpen(false)
      }
    })
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
    <div className="container-fluid px-4">
      <div className="card bg-gradient-primary-to-secondary mb-4">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <div className="me-3">
              <div className="small text-white-50">Organización:</div>
              <div className="h1 text-white">Corea y Asociados S.A</div>
            </div>
            <div className="text-white">{departamentoList.length} miembros</div>
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
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Descripcion</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {departamentoList && departamentoList.map((departamento: any, index: number) =>
                  <DepartamentItemScreen key={departamento._id} index={index} {...departamento} />
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departamento;

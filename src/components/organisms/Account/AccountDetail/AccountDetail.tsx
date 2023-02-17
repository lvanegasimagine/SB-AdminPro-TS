import {
  IActionsForms,
  IUserUpdateAccount,
} from "@/interface";
import { Form, Formik } from "formik";
import FormikControl from "@/formik/FormikControl";
import { useUserContext } from "@/provider";
import * as Yup from "yup";
import "./styles/AccountDetail.css";

const AccountDetail = (): JSX.Element => {
  const { user }: any = useUserContext();
  let arr = user?.displayName.split(" ");

  const initialValues: IUserUpdateAccount = {
    firstName: arr.length === 4 ? `${arr[0]} ${arr[1]}` : arr[0],
    lastName: arr.length === 4 ? `${arr[2]} ${arr[3]}` : arr[1],
    email: user?.email,
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string(),
    lastName: Yup.string(),
    email: Yup.string(),
  });

  const onSubmit = (
    { firstName, lastName, email }: IUserUpdateAccount,
    { resetForm, setSubmitting }: IActionsForms
  ) => {
    try {
    } catch (err: any) {
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="card mb-4">
      <div className="card-header">Account Details</div>
      <div className="card-body">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <div className="row gx-3 mb-3">
                <div className="col-md-6">
                  <FormikControl
                    control="InputField"
                    type="text"
                    label="First Name"
                    name="firstName"
                    required
                    flag={true}
                  />
                </div>
                <div className="col-md-6">
                  <FormikControl
                    control="InputField"
                    type="text"
                    label="Last Name"
                    name="lastName"
                    required
                    flag={true}
                  />
                </div>
              </div>
              <div className="mb-3">
                <FormikControl
                  control="InputField"
                  type="email"
                  label="Email Address"
                  name="email"
                  required
                  flag={true}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AccountDetail;

// function ChangePasswordForm() {
//   const initialValues: IChangePasswordUser = {
//     currentPassword: "",
//     newPassword: "",
//     repeatPassword: "",
//   };

//   const validationSchema = Yup.object().shape({
//     password: Yup.string().trim().min(6).required(),
//     newPassword: Yup.string().trim().min(6).required(),
//     confirmPassword: Yup.string()
//       .trim()
//       .min(6)
//       .required()
//       .label("confirm password")
//       .required()
//       .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
//   });

//   const onSubmit = (
//     {currentPassword}: any
//   ) => {
//     console.log(currentPassword);
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={onSubmit}
//     >
//       {({ handleSubmit, isSubmitting }) => (
//         <Form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <FormikControl
//               control="InputField"
//               type="text"
//               label="Contraseña Actual"
//               name="currentPassword"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <FormikControl
//               control="InputField"
//               type="text"
//               label="Nueva Contraseña"
//               name="newPassword"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <FormikControl
//               control="InputField"
//               type="text"
//               label="Confirmar Contraseña"
//               name="repeatPassword"
//               required
//             />
//           </div>
//           <div className="modal-footer">
//             <button
//               type="button"
//               className="btn btn-secondary"
//               data-bs-dismiss="modal"
//             >
//               Cerrar
//             </button>
//             <button
//               type="submit"
//               className="btn btn-primary"
//               disabled={isSubmitting}
//             >
//               Actualizar
//             </button>
//           </div>
//         </Form>
//       )}
//     </Formik>
//   );
// }

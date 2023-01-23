import { NavLink, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { forgotPassword } from "@/services";
import FormikControl from "@/formik/FormikControl";
import * as Yup from "yup";
import "./styles/ForgotPassword.css";

export interface ForgotPasswordInterface {}

const ForgotPassword: React.FC<ForgotPasswordInterface> = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
  };

  const validateSchema = Yup.object({
    email: Yup.string().required("Correo Obligatorio").email("Correo Invalido"),
  });

  const onSubmit = async (values: any, action: any) => {
    await forgotPassword(values.email).then(() => {
      console.log("Correo enviado");
      navigate("/");
	    action.resetForm();
    });
  };

  return (
    <div id="layoutAuthentication">
      <div id="layoutAuthentication_content">
        <main>
          <div className="container-xl px-4">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-6 col-md-8 col-sm-11">
                <div className="card my-5">
                  <div className="card-body p-5 text-center">
                    <div className="h3 fw-light mb-0">Password Recovery</div>
                  </div>
                  <hr className="my-0" />
                  <div className="card-body p-5">
                    <div className="text-center small text-muted mb-4">
                      Enter your email address below and we will send you a link
                      to reset your password.
                    </div>
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validateSchema}
                      onSubmit={onSubmit}
                    >
                      {({ handleSubmit, isSubmitting }) => (
                        <Form onSubmit={handleSubmit}>
                          <div className="mb-3">
                            <FormikControl
                              control="InputField"
                              type="email"
                              label="Email Address"
                              name="email"
                              required
                            />
                          </div>
                          <button
                            className="btn btn-primary"
                            type="submit"
                            disabled={isSubmitting}
                          >
                            Reset Password
                          </button>
                        </Form>
                      )}
                    </Formik>
                  </div>
                  <hr className="my-0" />
                  <div className="card-body px-5 py-4">
                    <div className="small text-center">
                      New user?
                      <NavLink to="/register"> Create an account!</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ForgotPassword;

import React, { useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import { UserContext } from "@/context";
import { UserContextProvider } from "@/types";
import { login, loginWithGoogle } from "@/services";
import { IActionsForms, ILoginValues } from "@/interface";
import { FaFacebookF, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import * as Yup from "yup";
import "./styles/Login.css";
import FormikControl from "@/formik/FormikControl";
import { useUserContext } from "@/provider";

export interface LoginInterface {}

const Login: React.FC<LoginInterface> = (): JSX.Element => {
  const { user } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user]);

  const initialValues: ILoginValues = {
    email: "lvanegas1429@gmail.com",
    password: "123456789",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email not Valid").required("Email is required"),
    password: Yup.string().trim().min(6).required("Password is required"),
  });

  const onSubmit = async (
    { email, password }: ILoginValues,
    {resetForm, setSubmitting}: IActionsForms
  ) => {
    try {
      await login({ email, password });
      resetForm();
    } catch (err: any) {
      handleErrors(err.code);
    } finally {
      setSubmitting(false);
    }
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
                    <div className="h3 fw-light mb-3">Sign In</div>
                    <a className="btn btn-icon btn-facebook mx-1" href="#!">
                      <FaFacebookF />
                    </a>
                    <a className="btn btn-icon btn-github mx-1" href="#!">
                      <FaGithub />
                    </a>
                    <button
                      type="button"
                      className="btn btn-icon btn-google mx-1"
                      onClick={async () => await loginWithGoogle()}
                    >
                      <FaGoogle />
                    </button>
                    <a className="btn btn-icon btn-twitter mx-1" href="#!">
                      <FaTwitter />
                    </a>
                  </div>
                  <hr className="my-0" />
                  <div className="card-body p-5">
                    <Formik
                      initialValues={initialValues}
                      onSubmit={onSubmit}
                      validationSchema={validationSchema}
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
                          <div className="mb-3">
                            <FormikControl
                              control="InputField"
                              type="password"
                              label="Password"
                              name="password"
                              required
                            />
                          </div>

                          <div className="mb-3">
                            <NavLink className="small" to="forgot-password">
                              Forgot your password?
                            </NavLink>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mb-0">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="checkRememberPassword"
                                type="checkbox"
                                value=""
                              />
                              <label
                                className="form-check-label"
                                htmlFor="checkRememberPassword"
                              >
                                Remember password
                              </label>
                            </div>
                            <button
                              className="btn btn-primary"
                              type="submit"
                              disabled={isSubmitting}
                            >
                              Login
                            </button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                  <hr className="my-0" />
                  <div className="card-body px-5 py-4">
                    <div className="small text-center">
                      New user?
                      <NavLink to="register"> Create an account!</NavLink>
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

export default Login;

function handleErrors(code: any) {
  switch (code) {
    case "auth/wrong-password":
    case "auth/user-not-found":
      alert("El usuario o contraseña son incorrecto.");
      break;
    case "auth/email-not-found":
      alert('Usuario No Existe')
      break;
    default:
      break;
  }
}

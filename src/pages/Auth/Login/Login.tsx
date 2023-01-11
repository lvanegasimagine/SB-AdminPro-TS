import React, { useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { UserContext } from "@/context";
import { login } from "@/firebase/FirebaseConfig";
import { FaFacebookF, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import * as Yup from "yup";
import { UserContextProvider } from "@/types";
import "./styles/Login.css";

export interface LoginInterface {}

interface MyFormValues {
  email: string;
  password: string;
}

const Login: React.FC<LoginInterface> = (): JSX.Element => {
  const { user } = useContext(UserContext) as UserContextProvider;
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user]);

  const onSubmit = async (
    values: any,
    actions: any
  ) => {
    try {
      console.log(values.email, values.password);
      await login({ email: values.email, password: values.password });
      console.log("user logged in");
      actions.resetForm();
    } catch (error: any) {
      console.log(error.code);
      console.log(error.message);
      if (error.code === "auth/user-not-found") {
        actions.setErrors({ email: "Email already in use" });
      }
      if (error.code === "auth/wrong-password") {
        actions.setErrors({ password: "Wrong password" });
      }
    } finally {
      actions.setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().trim().min(6).required(),
  });

  const initialValues: MyFormValues = { email: "lvanegas1429@gmail.com", password: "123456789" };

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
                    <a className="btn btn-icon btn-google mx-1" href="#!">
                      <FaGoogle />
                    </a>
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
                      {({
                        handleSubmit,
                        handleChange,
                        values,
                        isSubmitting,
                        errors,
                        touched,
                        handleBlur,
                      }) => (
                        <form onSubmit={handleSubmit}>
                          <div className="mb-3">
                            <label
                              className="text-gray-600 small"
                              htmlFor="emailExample"
                            >
                              Email address
                            </label>
                            <input
                              className="form-control form-control-solid"
                              type="text"
                              placeholder=""
                              aria-label="Email Address"
                              aria-describedby="emailExample"
                              value={values.email}
                              onChange={handleChange}
                              name="email"
                              onBlur={handleBlur}
                            />
                          </div>
                          {errors.email && touched.email && errors.email}
                          <div className="mb-3">
                            <label
                              className="text-gray-600 small"
                              htmlFor="passwordExample"
                            >
                              Password
                            </label>
                            <input
                              className="form-control form-control-solid"
                              type="password"
                              placeholder=""
                              aria-label="Password"
                              aria-describedby="passwordExample"
                              value={values.password}
                              onChange={handleChange}
                              name="password"
                              onBlur={handleBlur}
                            />
                          </div>
                          {errors.password && touched.password && errors.password}
                          <div className="mb-3">
                            <a
                              className="small"
                              href="auth-password-social.html"
                            >
                              Forgot your password?
                            </a>
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
                              type="submit" disabled={isSubmitting}
                            >
                              Login
                            </button>
                          </div>
                        </form>
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
      <div id="layoutAuthentication_footer">
        <footer className="footer-admin mt-auto footer-dark">
          <div className="container-xl px-4">
            <div className="row">
              <div className="col-md-6 small">
                Copyright &copy; Your Website 2021
              </div>
              <div className="col-md-6 text-md-end small">
                <a href="#!">Privacy Policy</a>
                &middot;
                <a href="#!">Terms &amp; Conditions</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Login;

import React, { useContext } from "react";
import { Formik } from "formik";
import { loginWithGoogle, register } from "@/firebase/FirebaseConfig";
import { useRedirectActiveUser } from "@/hooks/useRedirectActiveUser";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { UserContext } from "@/context/UserContext";
import { UserContextProvider } from "@/types";
import * as Yup from "yup";
import "./styles/Register.css";
import { IRegisterValue } from "@/interface";

export interface RegisterInterface {}


const Register: React.FC<RegisterInterface> = (): JSX.Element => {
  const { user } = useContext(UserContext) as UserContextProvider;

  useRedirectActiveUser(user, "/dashboard");

  const onSubmit = async (values: any, actions: any) => {
    try {
      const displayName = values?.name + " " + values?.surname;
      register({ email: values.email, password: values.password, displayName: displayName });
      console.log("user logged in");
      actions.resetForm();
    } catch (error: any) {
      console.log(error.code);
      console.log(error.message);
      if (error.code === "auth/email-already-in-use") {
        actions.setErrors({ email: "Email already in use" });
      }
    } finally {
      actions.setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    surname: Yup.string().required("Surname is required"),
    email: Yup.string().email().required(),
    password: Yup.string().trim().min(6).required(),
  });

  const initialValues: IRegisterValue = {
    name: "Luis",
    surname: "Vanegas",
    email: "lvanegas1429@gmail.com",
    password: "123456789",
  };

  const handleGoogleSignIn = async () => {
      await loginWithGoogle();
   }

  return (
    <div id="layoutAuthentication">
      <div id="layoutAuthentication_content">
        <main>
          <div className="container-xl px-4">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-9">
                <div className="card my-5">
                  <div className="card-body p-5 text-center">
                    <div className="h3 fw-light mb-3">Create an Account</div>
                    <div className="small text-muted mb-2">
                      Sign in using...
                    </div>
                    <a className="btn btn-icon btn-facebook mx-1" href="#!">
                      <FaFacebookF />
                    </a>
                    <a className="btn btn-icon btn-github mx-1" href="#!">
                      <FaGithub />
                    </a>
                    <button type="button" className="btn btn-icon btn-google mx-1" onClick={handleGoogleSignIn}>
                      <FaGoogle />
                    </button>
                    <a className="btn btn-icon btn-twitter mx-1" href="#!">
                      <FaTwitter />
                    </a>
                  </div>
                  <hr className="my-0" />
                  <div className="card-body p-5">
                    <div className="text-center small text-muted mb-4">
                      ...or enter your information below.
                    </div>
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
                          <div className="row gx-3">
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label
                                  className="text-gray-600 small"
                                  htmlFor="firstNameExample"
                                >
                                  First name
                                </label>
                                <input
                                  className="form-control form-control-solid"
                                  type="text"
                                  placeholder=""
                                  aria-label="First Name"
                                  aria-describedby="firstNameExample"
                                  value={values.name}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="name"
                                />
                              </div>
                              {errors.name && touched.name && errors.name}
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label
                                  className="text-gray-600 small"
                                  htmlFor="lastNameExample"
                                >
                                  Last name
                                </label>
                                <input
                                  className="form-control form-control-solid"
                                  type="text"
                                  placeholder=""
                                  aria-label="Last Name"
                                  aria-describedby="lastNameExample"
                                  value={values.surname}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="surname"
                                />
                              </div>
                              {errors.surname && touched.surname && errors.surname}
                            </div>
                          </div>
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
                          <div className="row gx-3">
                            <div className="col-md-6">
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
                            </div>
                            {errors.password &&
                              touched.password &&
                              errors.password}
                            <div className="col-md-6">
                              {/* <div className="mb-3">
                                <label
                                  className="text-gray-600 small"
                                  htmlFor="confirmPasswordExample"
                                >
                                  Confirm Password
                                </label>
                                <input
                                  className="form-control form-control-solid"
                                  type="password"
                                  placeholder=""
                                  aria-label="Confirm Password"
                                  aria-describedby="confirmPasswordExample"
                                />
                              </div> */}
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                id="checkTerms"
                                type="checkbox"
                                value=""
                              />
                              <label
                                className="form-check-label"
                                htmlFor="checkTerms"
                              >
                                I accept the
                                <a href="#!"> terms &amp; conditions</a>.
                              </label>
                            </div>
                            <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                              Create Account
                            </button>
                          </div>
                        </form>
                      )}
                    </Formik>
                  </div>
                  <hr className="my-0" />
                  <div className="card-body px-5 py-4">
                    <div className="small text-center">
                      Have an account?
                      <NavLink to="/"> Sign in!</NavLink>
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

export default Register;

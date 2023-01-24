import React, { useContext, useState } from "react";
import { Form, Formik } from "formik";
import { useRedirectActiveUser } from "@/hooks/useRedirectActiveUser";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { UserContext } from "@/context/UserContext";
import { UserContextProvider } from "@/types";
import { IActionsForms, IRegisterValue } from "@/interface";
import * as Yup from "yup";
import {
  changeUserName,
  loginWithGoogle,
  register,
  sendVerificationEmail,
} from "@/services";
import { auth } from "@/firebase/FirebaseConfig";
import "./styles/Register.css";
import FormikControl from "@/formik/FormikControl";

export interface RegisterInterface {}

const Register: React.FC<RegisterInterface> = (): JSX.Element => {
  const { user, setUser } = useContext(UserContext) as UserContextProvider;
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  useRedirectActiveUser(user, "/");

  const initialValues: IRegisterValue = {
    name: "Luis",
    surname: "Vanegas",
    email: "lvanegas1429@gmail.com",
    password: "123456789",
    confirmPassword: "123456789",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    surname: Yup.string().required("Surname is required"),
    email: Yup.string().email().required(),
    password: Yup.string().trim().min(6).required(),
    confirmPassword: Yup.string()
      .trim()
      .min(6)
      .required()
      .label("confirm password")
      .required()
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const onSubmit = async (
    { email, password, name, surname }: IRegisterValue,
    actions: IActionsForms
  ) => {
    try {
      const displayName = `${name} ${surname}`;
      register({
        email,
        password,
        displayName,
      });
      // .then(() => {
      //   changeUserName(auth, displayName).then(() => {
      //     console.log("actualizado");
      //     setUser(!user);
      //   });
      //   sendVerificationEmail(auth);
      // })
      // .catch((err) => console.log("Error Creando la cuenta", err));
      actions.resetForm();
    } catch (err: any) {
      console.log(err);
      // if (err.code === "auth/email-already-in-use") {
      //   // actions.setErrors(alert(''));
      //   alert('Email en uso')
      // }
    } finally {
      actions.setSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    await loginWithGoogle();
  };

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

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
                    <button
                      type="button"
                      className="btn btn-icon btn-google mx-1"
                      onClick={handleGoogleSignIn}
                    >
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
                      {({ handleSubmit, isSubmitting }) => (
                        <Form onSubmit={handleSubmit}>
                          <div className="row gx-3">
                            <div className="col-md-6">
                              <div className="mb-3">
                                <FormikControl
                                  control="InputField"
                                  type="text"
                                  label="First Name"
                                  name="name"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3">
                                <FormikControl
                                  control="InputField"
                                  type="text"
                                  label="Last Name"
                                  name="surname"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mb-3">
                            <FormikControl
                              control="InputField"
                              type="email"
                              label="Email Address"
                              name="email"
                              required
                            />
                          </div>
                          <div className="row gx-3">
                            <div className="col-md-6">
                              <div className="mb-3">
                                <FormikControl
                                  control="TextFieldPassword"
                                  type="password"
                                  label="Password"
                                  name="password"
                                  required
                                  showPassword={showPassword}
                                  handlePassword={handlePassword}
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3">
                                <FormikControl
                                  control="TextFieldPasswordConfirm"
                                  type="password"
                                  label="Confirm Password"
                                  name="confirmPassword"
                                  required
                                  showConfirmPassword={showConfirmPassword}
                                  handleConfirmPassword={handleConfirmPassword}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between">
                            <button
                              className="btn btn-primary btn-lg mt-2"
                              type="submit"
                              disabled={isSubmitting}
                            >
                              Create Account
                            </button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                  <hr className="my-0" />
                  <div className="card-body px-5 py-4">
                    <div className="small text-center fs-5">
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
    </div>
  );
};

export default Register;

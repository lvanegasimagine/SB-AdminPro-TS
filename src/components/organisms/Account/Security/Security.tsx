import React, { useState, useContext } from "react";
import { IActionsForms, IChangePasswordUser } from "@/interface";
import * as Yup from "yup";
import "./styles/Security.css";
import { Form, Formik } from "formik";
import FormikControl from "@/formik/FormikControl";
import { changePassword, deleteAccountUser, reauthenticate } from "@/services";
import { auth } from "@/firebase/FirebaseConfig";
import { UserContext } from "@/context";
import { UserContextProvider } from "@/types";

export interface SecurityInterface {}

const Security: React.FC<SecurityInterface> = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const initialValues: IChangePasswordUser = {
    currentPassword: "",
    newPassword: "",
    repeatPassword: "",
  };

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validationSchema = Yup.object().shape({
    currentPassword: Yup.string().trim().min(6).required(),
    newPassword: Yup.string().trim().min(6).required(),
    repeatPassword: Yup.string()
      .trim()
      .min(6)
      .required()
      .label("confirm password")
      .required()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
  });

  const onSubmit = (
    { currentPassword, newPassword }: IChangePasswordUser,
    { resetForm, setSubmitting, setErrors }: any
  ) => {
    try {
      reauthenticate(currentPassword)
        .then(() => {
          changePassword(auth.currentUser, newPassword).then(() =>
            alert("Contraseña Actualizada")
          );
        })
        .catch((err: any) => console.error(err));
      resetForm();
    } catch (err: any) {
      console.log(err);
      if (err.code === "auth/email-already-in-use") {
        alert("Email en uso");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main>
      <div className="container-xl px-4 mt-4">
        <div className="row">
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-header">Change Password</div>
              <div className="card-body">
                <Formik
                  initialValues={initialValues}
                  onSubmit={onSubmit}
                  validationSchema={validationSchema}
                >
                  {({ handleSubmit, isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <FormikControl
                          control="TextFieldPassword"
                          type="password"
                          label="Current Password"
                          name="currentPassword"
                          required
                          showPassword={showPassword}
                          handlePassword={handlePassword}
                        />
                      </div>
                      <div className="mb-3">
                        <FormikControl
                          control="TextFieldPasswordConfirm"
                          type="password"
                          label="New Password"
                          name="newPassword"
                          required
                          showConfirmPassword={showConfirmPassword}
                          handleConfirmPassword={handleConfirmPassword}
                        />
                      </div>
                      <div className="mb-3">
                        <FormikControl
                          control="TextFieldPasswordConfirm"
                          type="password"
                          label="Repeat Password"
                          name="repeatPassword"
                          required
                          showConfirmPassword={showConfirmPassword}
                          handleConfirmPassword={handleConfirmPassword}
                        />
                      </div>
                      <button
                        className="btn btn-primary btn-lg mt-2"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        ✔ Proceder
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-header">Delete Account</div>
              <div className="card-body">
                <p>
                  Deleting your account is a permanent action and cannot be
                  undone. If you are sure you want to delete your account,
                  select the button below.
                </p>
                <button
                  className="btn btn-danger-soft text-danger"
                  type="button"
                >
                  ❌ Delete my account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Security;

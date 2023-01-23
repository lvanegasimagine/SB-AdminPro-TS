import { propsWithFieldFormik } from "@/interface";
import { Field } from "formik";
import { FiEye, FiEyeOff } from "react-icons/fi";

const TextFieldPassword = (props: any) => {
  const { name, label, type, showPassword, handlePassword } = props;

  return (
    <Field name={name}>
      {({ field, meta }: propsWithFieldFormik) => (
        <>
          <label className="text-gray-600 small" htmlFor={name}>
            {label}
          </label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span
                className="input-group-text"
                id="validationTooltipUsernamePrepend"
              >
                {showPassword ? (
                  <FiEye onClick={handlePassword} />
                ) : (
                  <FiEyeOff onClick={handlePassword} />
                )}
              </span>
            </div>
            <input
              type={showPassword ? "text" : type || "password"}
              className={
                meta.touched && meta.error
                  ? "form-control form-control-solid is-invalid"
                  : "form-control form-control-solid"
              }
              aria-label={label}
              aria-describedby={name}
              {...field}
            />
            {meta.touched && meta.error && (
              <div className="invalid-feedback">{meta.error}</div>
            )}
          </div>
        </>
      )}
    </Field>
  );
};

export default TextFieldPassword;

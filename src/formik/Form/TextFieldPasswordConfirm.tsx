import { propsWithFieldFormik } from "@/interface";
import { Field } from "formik";
import { FiEye, FiEyeOff } from "react-icons/fi";

const TextFieldPasswordConfirm = (props: any) => {
  const { name, label, type, showConfirmPassword, handleConfirmPassword } =
    props;

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
                {showConfirmPassword ? (
                  <FiEye onClick={handleConfirmPassword} />
                ) : (
                  <FiEyeOff onClick={handleConfirmPassword} />
                )}
              </span>
            </div>
            <input
              type={showConfirmPassword ? "text" : type || "password"}
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

export default TextFieldPasswordConfirm;

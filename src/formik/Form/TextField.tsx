import { propsWithFieldFormik } from "@/interface";
import { Field } from "formik";

const TextField = (props: any) => {
  const { name, label, type, flag, value } = props;

  return (
    <Field name={name}>
      {({
        field,
        meta,
      }: propsWithFieldFormik) => (
        <>
          <label className="text-gray-600 small" htmlFor={name}>
            {label}
          </label>
          <input
            type={type}
            className={meta.touched && meta.error ? "form-control form-control-solid is-invalid": "form-control form-control-solid"}
            aria-label={label}
            aria-describedby={name}
            disabled={flag}
            value={value}
            {...field}
          />
          {meta.touched && meta.error && (
            <div className="invalid-feedback">{meta.error}</div>
          )}
        </>
      )}
    </Field>
  );
};

export default TextField;

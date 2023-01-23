import { TextField, TextFieldPassword, TextFieldPasswordConfirm } from "./Form";

function FormikControl(props: any) {
  const { control, ...rest } = props;

  switch (control) {
    case "InputField":
      return <TextField {...rest} />;
    case "TextFieldPassword":
      return <TextFieldPassword {...rest} />;
    case "TextFieldPasswordConfirm":
      return <TextFieldPasswordConfirm {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;

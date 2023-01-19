import TextField from "./Form/TextField";

function FormikControl(props: any) {
    const { control, ...rest} = props;
    
    switch (control) {
        case 'InputField':
            return <TextField {...rest}/>
            break;
    
        default:
            return null;
            break;
    }
}

export default FormikControl
export interface IUserLogin {
  email: string;
  password: string;
}
export interface IUserRegister {
  email: string;
  password: string;
  displayName: string;
}

export interface IRegisterValue {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ILoginValues {
  email: string;
  password: string;
}

export interface IActionsForms {
  resetForm: () => void;
  setErrors: (err: { email?: string; password?: string }) => void;
  setSubmitting: (err: boolean) => void;
}

export interface propsWithFieldFormik {
  field: any;
  form?: any;
  meta: any;
}

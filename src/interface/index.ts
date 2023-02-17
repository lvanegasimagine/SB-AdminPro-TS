import { User } from "firebase/auth";

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

export interface IUserUpdateAccount {
  firstName: string;
  lastName: string;
  email: string;
}

export interface IChangePasswordUser {
  currentPassword: string;
  newPassword: string;
  repeatPassword: string;
}

export interface IActionsForms {
  resetForm: () => void;
  setErrors: (err: { email?: string; password?: string }) => void;
  setSubmitting: (err: boolean) => void;
}

export interface propsWithUserContext {
  user: User | any;
  setUser: (value: boolean) => boolean;
  setReloadApp: (value: boolean) => boolean;
}

export interface propsWithFieldFormik {
  field: any;
  form?: any;
  meta: any;
}

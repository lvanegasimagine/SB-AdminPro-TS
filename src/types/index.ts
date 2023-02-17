import { Auth, User } from "firebase/auth";

export type TUserContext = [
  boolean,
  React.Dispatch<React.SetStateAction<undefined>>
];

export type UserContextProvider = {
  user: Auth | {} | any;
  reloadApp: boolean;
  setUser: (value: boolean) => boolean;
  setReloadApp: (value: boolean) => boolean;
};

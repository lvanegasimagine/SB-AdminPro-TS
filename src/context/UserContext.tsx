import React, { createContext } from "react";

type TUserContext = [boolean, React.Dispatch<React.SetStateAction<undefined>>];

export const UserContext = createContext<TUserContext | {}>({});

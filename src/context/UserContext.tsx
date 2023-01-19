import { TUserContext } from "@/types";
import { createContext } from "react";

export const UserContext = createContext<TUserContext | {}>({});

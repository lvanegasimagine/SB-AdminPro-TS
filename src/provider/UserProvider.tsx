import React, { PropsWithChildren, useState } from "react";
import { UserContext } from "@/context/UserContext";

export const UserProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [user, setUser] = useState<boolean>(false);
  return <UserContext.Provider value={{user}}>{children}</UserContext.Provider>;
};

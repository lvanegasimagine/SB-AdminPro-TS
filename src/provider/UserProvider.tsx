import { PropsWithChildren, useState, useEffect, useContext } from "react";
import { UserContextProvider } from "@/types";
import { UserContext } from "@/context/UserContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/FirebaseConfig";
import { Loader } from "@/components/atoms";

export const UserProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [user, setUser] = useState<any>(false);
  const [reloadApp, setReloadApp] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => setUser(user));
    return unsubscribe;
  }, [user]);

  if (user === false) return <Loader />;

  return (
    <UserContext.Provider value={{ user, setUser, reloadApp, setReloadApp }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUserContext() {
  return useContext(UserContext) as UserContextProvider;
}

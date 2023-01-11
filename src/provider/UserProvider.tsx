import { PropsWithChildren, useState, useEffect } from "react";
import { UserContext } from "@/context/UserContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/FirebaseConfig';

export const UserProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [user, setUser] = useState<any>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      setUser(user);
    })
    return unsubscribe;
  }, [])

  if(user === false) return <p>Loading App...</p>

  return <UserContext.Provider value={{user}}>{children}</UserContext.Provider>;
};

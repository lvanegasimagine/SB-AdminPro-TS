import { PropsWithChildren, useState, useEffect } from "react";
import { UserContext } from "@/context/UserContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '@/firebase/FirebaseConfig';
import { Loader } from "@/components/atoms";

export const UserProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [user, setUser] = useState<any>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      setUser(user);
    })
    return unsubscribe;
  }, [user])

  if(user === false) return <Loader/>

  return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>;
};

import { useState, useEffect } from "react";
import { auth } from "@/firebase/FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export function useAuth() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user: any) => setCurrentUser(user));
        return unsub;
    }, [])

    return currentUser;
}
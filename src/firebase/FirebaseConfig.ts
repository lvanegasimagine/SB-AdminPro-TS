import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { IUserLoginAndRegister } from "@/interface";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const login = ({ email, password }: IUserLoginAndRegister) =>
  signInWithEmailAndPassword(auth, email, password);

export const register = ({
  email,
  password,
  displayName,
}: IUserLoginAndRegister) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Usuario Registrado");
      changeUserName(auth, displayName);
    })
    .catch((err) => console.log("Error Creando la cuenta", err));
};

const changeUserName = (auth: any, displayName: string) => {
  updateProfile(auth.currentUser, {
    displayName: displayName,
  }).catch((_) => console.error("Error al asignar el nombre de usuario"));
};
export const loginWithGoogle = () => {
  const googleProvider = new GoogleAuthProvider();
  return signInWithPopup(auth, googleProvider);
};

export const logOut = () => signOut(auth);

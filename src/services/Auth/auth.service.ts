import { auth } from "@/firebase/FirebaseConfig";
import { IUserLogin, IUserRegister } from "@/interface";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";

export const login = ({ email, password }: IUserLogin) =>
  signInWithEmailAndPassword(auth, email, password);

export const register = ({ email, password }: IUserRegister) => {
  createUserWithEmailAndPassword(auth, email, password);
};

export const changeUserName = (auth: any, displayName: string) => {
  return updateProfile(auth.currentUser, {
    displayName: displayName,
  });
};

export const sendVerificationEmail = async (auth: any) => {
  return sendEmailVerification(auth.currentUser).then((_) =>
    console.log("todo bien")
  );
};

export const loginWithGoogle = () => {
  const googleProvider = new GoogleAuthProvider();
  return signInWithPopup(auth, googleProvider);
};

export const forgotPassword = (email: string) => {
  return sendPasswordResetEmail(auth, email);
};

export const logOut = () => signOut(auth);

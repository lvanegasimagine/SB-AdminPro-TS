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
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
  deleteUser
} from "firebase/auth";

export const login = ({ email, password }: IUserLogin) =>
  signInWithEmailAndPassword(auth, email, password);

export const register = ({ email, password }: IUserRegister) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const reauthenticate = (password: string) => {
  const user: any = auth.currentUser;

  const credentials = EmailAuthProvider.credential(user?.email, password);

  return reauthenticateWithCredential(user, credentials);
}

export const changePassword = (user: any,password: string) => {
  return updatePassword(user, password)
}

export const deleteAccountUser = (uid: string) => {
  
}

export const changeUserName = (auth: any, displayName: string) => {
  return updateProfile(auth.currentUser, {
    displayName: displayName,
  });
};

export const sendVerificationEmail = async (auth: any) => {
  return sendEmailVerification(auth.currentUser).then((user) =>
    console.log(user)
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

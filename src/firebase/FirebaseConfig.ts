import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  Auth,
  sendEmailVerification,
} from "firebase/auth";
import { FirebaseStorage, getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { IUserLogin, IUserRegister } from "@/interface";
import { useRedirectActiveUser } from "@/hooks/useRedirectActiveUser";

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
export const auth: Auth = getAuth(app);
export const storage: FirebaseStorage = getStorage();

export const login = ({ email, password }: IUserLogin) =>
  signInWithEmailAndPassword(auth, email, password);

export const register = ({
  email,
  password,
}: IUserRegister) => {
  return createUserWithEmailAndPassword(auth, email, password)
};

export const changeUserName = (auth: any, displayName: string) => {
  return updateProfile(auth.currentUser, {
    displayName: displayName,
  })
};

export const sendVerificationEmail = (auth: any) => {
  return sendEmailVerification(auth.currentUser).then((_) => console.log('todo bien'));
};

export const loginWithGoogle = () => {
  const googleProvider = new GoogleAuthProvider();
  return signInWithPopup(auth, googleProvider);
};

export const logOut = () => signOut(auth);

export async function upload(file: any, currentUser: any, setLoading: any) {
  const fileRef = ref(storage, currentUser.uid + '.png');
  setLoading(true);
  
  const snapshot = await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);

  return updateProfile(currentUser, {photoURL});
}
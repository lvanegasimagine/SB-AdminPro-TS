import { storage } from "@/firebase/FirebaseConfig";
import { updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export async function upload(file: any, currentUser: any, setLoading: any) {
    const fileRef = ref(storage, currentUser.uid + '.png');
    setLoading(true);
    
    await uploadBytes(fileRef, file);
    const photoURL = await getDownloadURL(fileRef);
  
    return updateProfile(currentUser, {photoURL});
  }
import { storage } from "@/firebase/FirebaseConfig";
import { updateProfile } from "firebase/auth";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

export async function upload(
  file: any,
  user: any,
  setUser: any,
  setReloadApp: any
) {
  const storageRef = ref(storage, `/avatar/${user.uid}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {},
    (err) => console.error("Error al actualizar el avatar"),
    () => {
      getDownloadURL(uploadTask.snapshot.ref)
        .then(async (url) => {
          await updateProfile(user, {
            photoURL: url,
          }).then(() => setReloadApp((prevState: any) => !prevState));
        })
        .catch((err) => console.log(err.code));
    }
  );
}

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Profile1 from "@/assets/profile-1.png";
import { upload } from "@/services";

const UploadAvatar = ({ user, setUser, setReloadApp }: any) => {
  const [avatarURL, setAvatarURL] = useState<string>(user.photoURL);

  const onDrop = useCallback((acceptedFiles: any) => {
    const file = acceptedFiles[0];
    setAvatarURL(URL.createObjectURL(file));
    uploadImage(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    noKeyboard: true,
    onDrop,
  });

  const uploadImage = (file: File) => {
    if (!file) {
      console.error("Please upload an image first!");
    }
    upload(file, user, setUser, setReloadApp);
  };

  return (
    <div className="col-xl-4">
      <div className="card mb-4 mb-xl-0">
        <div className="card-header">Profile Picture</div>
        <div className="card-body text-center" {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <>
              <img
                className="img-account-profile rounded-circle mb-2"
                src={Profile1}
                alt=""
              />
            </>
          ) : (
            <>
              <img
                className="img-account-profile rounded-circle mb-2"
                src={avatarURL ? avatarURL : Profile1}
                alt=""
              />
            </>
          )}
          <div className="small font-italic text-muted mb-4">
            JPG or PNG no larger than 5 MB components
          </div>
          {/* <button className="btn btn-primary" type="button">
            Upload new image
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default UploadAvatar;

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Profile1 from "@/assets/profile-1.png";
import { upload } from "@/services";

const UploadAvatar = ({ user, setUser, setReloadApp }: any) => {
  const [avatarURL, setAvatarURL] = useState<string>(user.photoURL);

  const onDrop = useCallback((acceptedFiles: any) => {
    const file = acceptedFiles[0];
    if (
      file?.type === "image/png" ||
      file?.type === "image/jpg" ||
      file?.type === "image/jpeg"
    ) {
      setAvatarURL(URL.createObjectURL(file));
      uploadImage(file);
    }
  }, []);

  const { getRootProps, fileRejections, getInputProps, isDragActive } =
    useDropzone({
      accept: {
        "image/jpeg": [".jpeg"],
        "image/jpg": [".jpg"],
        "image/png": [".png"],
      },
      noKeyboard: true,
      onDrop,
    });

  const fileRejectionItems = fileRejections.map(({ file, errors }: any) => (
    <div key={file.path}>
      {errors.map((e: any) => (
        <div className="alert alert-danger" role="alert" key={e.code}>
          {e.message}
        </div>
      ))}
    </div>
  ));

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
          <div className="small font-italic text-muted mb-4">
            {fileRejectionItems}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadAvatar;

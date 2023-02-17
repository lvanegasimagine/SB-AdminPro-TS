import { UploadAvatar } from "@/components/atoms";
import { propsWithUserContext } from "@/interface";
import "./styles/AccountAvatar.css";

const AccountAvatar = ({
  user,
  setUser,
  setReloadApp,
}: propsWithUserContext): JSX.Element => {
  return (
    <UploadAvatar user={user} setUser={setUser} setReloadApp={setReloadApp} />
  );
};

export default AccountAvatar;

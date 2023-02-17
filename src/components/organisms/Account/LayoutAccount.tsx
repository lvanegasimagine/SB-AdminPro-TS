import { useUserContext } from "@/provider";
import { AccountAvatar } from "./AccountAvatar";
import { AccountDetail } from "./AccountDetail";

const LayoutAccount = (): JSX.Element => {
  const { user, setUser, setReloadApp } = useUserContext();
  return (
    <div className="row">
      <AccountAvatar
        user={user}
        setUser={setUser}
        setReloadApp={setReloadApp}
      />
      <div className="col-xl-8">
        <AccountDetail />
      </div>
    </div>
  );
};

export default LayoutAccount;

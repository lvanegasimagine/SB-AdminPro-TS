import React from "react";
import { FiGlobe } from "react-icons/fi";
import "./styles/Account.css";
import { Header, UploadAvatar } from "@/components/atoms";
import { useUserContext } from "@/provider";
import { AccountDetail } from "./AccountDetail";
export interface AccountInterface {}

const Account: React.FC<AccountInterface> = (): JSX.Element => {
  const { user, setUser, setReloadApp } = useUserContext();
  return (
    <>
      <main>
        <Header>
          <h1 className="page-header-title">
            <div className="page-header-icon">
              <FiGlobe />
            </div>
            Organization Details
          </h1>
        </Header>
        <div className="container-xl px-4 mt-4">
          <nav className="nav nav-borders">
            <a className="nav-link active ms-0" href="account-profile.html">
              Profile
            </a>
            <a className="nav-link" href="account-billing.html">
              Billing
            </a>
            <a className="nav-link" href="account-security.html">
              Security
            </a>
            <a className="nav-link" href="account-notifications.html">
              Notifications
            </a>
          </nav>
          <hr className="mt-0 mb-4" />
          <div className="row">
            <UploadAvatar
              user={user}
              setUser={setUser}
              setReloadApp={setReloadApp}
            />
            <div className="col-xl-8">
              <AccountDetail/>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer-admin mt-auto footer-light">
        <div className="container-xl px-4">
          <div className="row">
            <div className="col-md-6 small">
              Copyright &copy; Your Website 2021
            </div>
            <div className="col-md-6 text-md-end small">
              <a href="#!">Privacy Policy</a>
              &middot;
              <a href="#!">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Account;

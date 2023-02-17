import React from "react";
import { Header } from "@/components/atoms";
import { NavLink, Outlet } from 'react-router-dom';
import "./styles/Profile.css";

export interface ProfileInterface {}

const Profile: React.FC<ProfileInterface> = () => {
  return (
    <>
      <main>
        <Header icon='bi-person' title="Account Settings"/>
        <div className="container-xl px-4 mt-4">
          <nav className="nav nav-borders">
            <NavLink className="nav-link" to="profile">
              Profile
            </NavLink>
            <NavLink className="nav-link" to="billing">
              Billing
            </NavLink>
            <NavLink className="nav-link" to="security">
              Security
            </NavLink>
          </nav>
          <hr className="mt-0 mb-4" />
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Profile;

import React from "react";
import { Outlet } from "react-router-dom";
import { UserProvider } from "@/provider";
import "./styles/RootLayout.css";
export interface RootLayoutInterface {}

const RootLayout: React.FC<RootLayoutInterface> = () => {
  return (
    <UserProvider>
      <Outlet />
    </UserProvider>
  );
};

export default RootLayout;

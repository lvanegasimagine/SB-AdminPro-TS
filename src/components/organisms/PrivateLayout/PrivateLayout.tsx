import React, { useContext } from "react";
import { UserContext } from "@/context";
import { Navigate, Outlet } from "react-router-dom";
import "./styles/PrivateLayout.css";
import { UserContextProvider } from "@/types";

export interface PrivateLayoutInterface {}

const PrivateLayout: React.FC<PrivateLayoutInterface> = () => {
  const { user } = useContext(UserContext) as UserContextProvider;

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateLayout;

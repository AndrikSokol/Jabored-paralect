import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout: FC = () => {
  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;

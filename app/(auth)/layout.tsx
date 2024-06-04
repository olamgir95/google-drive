import React from "react";
import { ChildProps } from "../../types";

const AuthLayout = ({ children }: ChildProps) => {
  return (
    <div className="relative">
      <div>Navbar</div>
      <div>Sidebar</div>
      {children}
    </div>
  );
};

export default AuthLayout;

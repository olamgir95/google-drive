import React, { ReactNode } from "react";
import Navbar from "./../../components/shared/navbar";
import Sidebar from "@/components/shared/sidebar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      {children}
    </div>
  );
};

export default RootLayout;

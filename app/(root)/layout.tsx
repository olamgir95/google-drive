import React, { ReactNode } from "react";
import Navbar from "./../../components/shared/navbar";
import Sidebar from "@/components/shared/sidebar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <Sidebar />

      <main className="w-full min-h-[90vh] relative top-[10vh] pl-72 bg-[#F6F9FC] dark:bg-[#1f1f1f] p-4">
        <div className="h-[90vh] rounded-md bg-white dark:bg-black ml-4 p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default RootLayout;

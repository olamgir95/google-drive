import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  const { userId } = auth();
  console.log(userId);

  return (
    <div className="h-[10vh] fixed left-0 right-0 top-0 z-30 bg-[F6F9FC]">
      <div className="flex items-center justify-between my-4 mx-6">
        <Link href={"/"}>
          <div className=" flex items-center">
            <Image src={"/logo.svg"} alt="Logo" width={40} height={40} />
            <span className="pl-2 text-[22px] opacity-75">Drive</span>
          </div>
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;

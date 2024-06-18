import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import { HelpCircle, Settings } from "lucide-react";
import UserBox from "./userBox";
import { Avatar, AvatarFallback } from "../ui/avatar";

const Navbar = () => {
  const { userId } = auth();
  console.log("userid", userId);

  return (
    <div className="h-[10vh] fixed left-0 top-0 right-0 z-30 bg-[#F6F9FC] dark:bg-[#1F1F1F]">
      <div className="flex items-center justify-between my-4 mx-6">
        <Link href={"/"}>
          <div className=" flex items-center">
            <Image src={"/logo.svg"} alt="Logo" width={40} height={40} />
            <span className="pl-2 text-[22px] opacity-75">Drive</span>
          </div>
        </Link>
        <div className="flex items-center space-x-2">
          <ModeToggle />
          <div
            className="hover:bg-secondary rounded-full transition p-2 "
            role="button"
          >
            <HelpCircle className="h-5 w-5" />
          </div>
          <div
            className="hover:bg-secondary rounded-full transition p-2 "
            role="button"
          >
            <Settings className="h-5 w-5" />
          </div>
          {userId ? (
            <UserBox />
          ) : (
            <Avatar className="cursor-pointer">
              <AvatarFallback>OO</AvatarFallback>
            </Avatar>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { TNavBar } from "@/types/types";
import { get } from "@/utils/request-handler";
import endpoints from "@/constant/endpoints";
import BottomNav from "./bottom-nav";
import Topbar from "./topbar";

export const Navbar = async () => {
  let navBar: TNavBar = [] as TNavBar;

  await get({
    endPoint: endpoints.NAVBAR,
    token: "",
    enableCaching: true,
    success: (message: string, res: { data: TNavBar }) => {
      navBar = res.data;
    },
    failure: (message: string) => {
      console.log(message);
    },
  });

  return (
    <div className="bg-green-600 z-999 min-w-screen">
      <Topbar/>
      <BottomNav navBar={navBar} />
    </div>
  );
};

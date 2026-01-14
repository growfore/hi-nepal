import { TNavBar } from "@/types/types";
import { get } from "@/utils/request-handler";
import endpoints from "@/constant/endpoints";
import Topbar from "./topbar";
import BottomNav from "@/components/bottom-nav";
import { sortNavBar } from "@/lib/nav-utils";

export const Navbar = async () => {
  let navData: TNavBar = [] as TNavBar;

  await get({
    endPoint: endpoints.NAVBAR,
    token: "",
    enableCaching: true,
    success: (message: string, res: { data: TNavBar }) => {
      navData = res.data;
    },
    failure: (message: string) => {
      console.log(message);
    },
  });

  const sortedNavbar = sortNavBar(navData);

  return (
    <div className="bg-green-600 z-999 min-w-screen">
      <Topbar />
      <BottomNav navBar={sortedNavbar} />
    </div>
  );
};

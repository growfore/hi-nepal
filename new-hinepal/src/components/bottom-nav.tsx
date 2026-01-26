import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TNavBar } from "@/types/types";
import { DesktopNav } from "@/components/desktop-nav";
import { MobileNav } from "@/components/mobile-nav";

interface BottomNavProps {
  navBar: TNavBar;
  currentPath?: string;
}

export default function BottomNav({
  navBar,
  currentPath = "",
}: BottomNavProps) {
  const destination = currentPath.split("/")[1] || "";

  return (
    <nav className="bg-white w-full shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between mx-auto gap-4 container p-2">
        <Link href="/" title="Go to homepage" className="shrink-0">
          <Image
            src="/assets/hinepal-logo.webp"
            priority
            height={160}
            width={100}
            alt="hinepal logo"
            className="h-auto w-auto"
          />
        </Link>

        <DesktopNav navBar={navBar} />

        <div className="flex gap-2 items-center">
          <Link href={`/booking?destination=${destination}`}>
            <Button
              size="lg"
              className="text-base md:text-lg px-4 py-2 md:px-6 md:py-3 bg-black hover:bg-orange-500 rounded-lg"
            >
              Book Now
            </Button>
          </Link>
          <MobileNav navBar={navBar} />
        </div>
      </div>
    </nav>
  );
}

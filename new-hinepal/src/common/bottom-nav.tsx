"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronRight,
  ChevronUp,
  LucideMenu,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TNavBar } from "@/types/types";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const destinationOrder = ["Everest Region", "Annapurna Region", "Manaslu Region"];

const packageOrders: Record<string, string[]> = {
  "Annapurna Region": [
    "Annapurna Base Camp Trek",
    "Mardi Himal Trek",
    "Ghorepani Poon Hill Trek",
    "Jomsom Muktinath Trek",
    "Annapurna Circuit Trek",
    "North Annapurna Base Camp Trek",
    "Dhaulagiri Circuit Trek",
    "Kori Trek",
    "Khumai Danda Trek",
    "Kapuche Lake Trek",
    "Khopra danda trek",
  ],
  "Dolpo Region": [
    "Upper Dolpo Trek",
    "Lower Dolpo Trek",
    "Shey Phoksundo Lake Trek",
  ],
};

function sortDestinations(destinations: any[]) {
  return [...destinations].sort((a, b) => {
    const aIndex = destinationOrder.indexOf(a.name);
    const bIndex = destinationOrder.indexOf(b.name);

    if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
    if (aIndex !== -1) return -1;
    if (bIndex !== -1) return 1;
    return 0;
  });
}

function sortPackages(destinationName: string, packages: any[]) {
  const order = packageOrders[destinationName];
  if (!order) return packages;

  return [...packages].sort((a, b) => {
    const aIndex = order.indexOf(a.title);
    const bIndex = order.indexOf(b.title);

    if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
    if (aIndex !== -1) return -1;
    if (bIndex !== -1) return 1;

    return a.title.localeCompare(b.title);
  });
}

export function BottomNav({ navBar }: { navBar: TNavBar }) {
  const [topValue, setTopValue] = useState(60);
  const [disableHover, setDisableHover] = useState(false);
  const path = usePathname();

  function getDestination(path: string) {
    const staticPaths = [
      "/",
      "/booking",
      "/adventure",
      "/about-us",
      "/blogs",
      "/treks/everest-base-camp",
      "/guides/professional",
    ];
    const slashCount = path.split("/").length - 1;

    if (staticPaths.includes(path) || slashCount > 2) {
      return "";
    }

    return path.startsWith("/") ? path.slice(1) : path;
  }

  const destination = getDestination(path);

  const handleClick = () => {
    setDisableHover(true);
    setTimeout(() => setDisableHover(false), 500);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newTop = Math.max(60 - scrollY, 0);
      setTopValue(newTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{ top: topValue }}
      className={cn(
        "fixed  px-4 items-center py-4 z-[999] bg-white min-w-[100vw]"
      )}
    >
      <div className="flex items-center justify-between container mx-auto gap-4 md:max-w-[75vw]">
        {/* Logo */}
        <Link href={"/"} className="flex-shrink-0 min-w-[50px]">
          <Image
            loader={({ src }) => src}
            unoptimized
            src={"/assets/hinepal-logo.webp"}
            priority
            height={170}
            width={130}
            alt="hinepal logo"
            className="h-auto w-[100px] md:w-[130px]"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="flex gap-4 items-center">
          {navBar.map((activity, index) => (
            <div key={index}>
              <div
                onClick={handleClick}
                className={cn(!disableHover && "group", "hidden md:flex")}
              >
                <Link
                  href={`/activities/${activity.slug}`}
                  className="font-bold uppercase flex gap-1 cursor-pointer"
                >
                  {activity.name}
                  <ChevronDown className="group-hover:hidden" />
                  <ChevronUp className="hidden group-hover:block" />
                </Link>
                <div className="">
                  <div className="hidden group-hover:grid absolute top-[60px] z-[999] left-0 w-[100vw] py-8 px-0">
                    <div className="pb-8 bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container px-12 mx-auto flex-wrap w-[100vw] rounded-md">
                      {sortDestinations(activity.destinations).map(
                        (destination, index) => (
                          <div key={index}>
                            <Link
                              className="font-semibold text-lg"
                              href={`/activities/${activity.slug}/${destination.slug}`}
                            >
                              <div className="flex gap-1 items-center mb-2 text-[#F05A24] hover:text-green-700">
                                <span>{destination.name}</span>
                                <ChevronRight className="size-4" />
                              </div>
                            </Link>
                            <ul className="flex flex-col gap-2">
                              {sortPackages(
                                destination.name,
                                destination.packages
                              ).map((packageItem, index) => (
                                <li key={index}>
                                  <Link
                                    href={`/${packageItem.slug}`}
                                    className="hover:border-b-2 border-dashed border-green-700 hover:text-green-700"
                                  >
                                    {packageItem.title.includes(":")
                                      ? packageItem.title.split(":")[0].trim()
                                      : packageItem.title.trim()}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <Link
            title="go to adventures page"
            href={"/adventure"}
            className="hidden md:flex hover:text-green-700 font-bold uppercase gap-1 cursor-pointer"
          >
            Adventure
          </Link>
          <Link
            title="go to about page"
            href={"/about-us"}
            className="hidden md:flex hover:text-green-700 font-bold uppercase gap-1 cursor-pointer"
          >
            About Us
          </Link>
          <Link
            title="go to blogs page"
            href={"/blogs"}
            className="hidden md:flex hover:text-green-700 font-bold uppercase gap-1 cursor-pointer"
          >
            Blogs
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="flex gap-2">
          <div className="flex justify-center items-center">
            <Link
              href={`/booking?destination=${destination}`}
              className="hover:cursor-pointer"
            >
              <Button
                name="navigation-menu"
                title="open navigation menu"
                size={"lg"}
                className="md:p-8 text-lg p-4"
              >
                Book Now
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger title="open navigation menu">
                <LucideMenu size={42} />
              </SheetTrigger>
              <SheetContent className="flex flex-col gap-4 p-8 z-[99999]">
                <>
                  {navBar.map((activity, index) => (
                    <Accordion key={index} type="single" collapsible>
                      <AccordionItem value={`item-${index}`}>
                        <AccordionTrigger className="font-bold text-xl uppercase flex p-0">
                          {activity.name}
                        </AccordionTrigger>
                        <AccordionContent>
                          {sortDestinations(activity.destinations).map(
                            (destination, index) =>
                              destination.packages.length > 0 && (
                                <Accordion
                                  key={index}
                                  type="single"
                                  collapsible
                                >
                                  <AccordionItem value={`item-${index}`}>
                                    <AccordionTrigger className="font-semibold text-xl p-0 py-2">
                                      {destination.name}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                      <ul className="flex flex-col gap-2">
                                        {sortPackages(
                                          destination.name,
                                          destination.packages
                                        ).map((packageItem, index) => (
                                          <li key={index}>
                                            <Link
                                              href={`/${packageItem.slug}`}
                                              className="hover:border-b-2 border-dashed border-[#EF5922] hover:text-[#EF5922] font-bold text-lg "
                                            >
                                              {packageItem.title.includes(":")
                                                ? packageItem.title
                                                    .split(":")[0]
                                                    .trim()
                                                : packageItem.title.trim()}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </AccordionContent>
                                  </AccordionItem>
                                </Accordion>
                              )
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))}

                  <Link
                    title="go to adventures page"
                    href={"/adventure"}
                    className="uppercase font-bold text-xl"
                  >
                    Adventures
                  </Link>
                  <Link
                    title="go to about page"
                    href={"/about-us"}
                    className="uppercase font-bold text-xl"
                  >
                    About us
                  </Link>
                  <Link
                    title="go to blogs"
                    href={"/blogs"}
                    className="uppercase font-bold text-xl"
                  >
                    Blogs
                  </Link>
                </>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, ChevronUp, LucideMenu } from "lucide-react";
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
import { usePathname, useRouter } from "next/navigation";

export function BottomNav({ navBar }: { navBar: TNavBar }) {
  const [topValue, setTopValue] = useState(60);
  const [disableHover, setDisableHover] = useState(false);
  const path = usePathname();
  const router = useRouter();

  const destination = path.split("/")[1] || "";

  const destinationOrder = [
    "Everest Region",
    "Annapurna Region",
    "Manaslu Region",
  ];

  function sortDestinations(destinations: any[]) {
    return [...destinations].sort((a, b) => {
      const aIndex = destinationOrder.indexOf(a.name);
      const bIndex = destinationOrder.indexOf(b.name);

      if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
      if (aIndex !== -1) return -1;
      if (bIndex !== -1) return 1;
      return a.name.localeCompare(b.name);
    });
  }

  const packageOrders: Record<string, string[]> = {
    "annapurna-region": [
      "annapurna-base-camp-trek",
      "mardi-himal-trek",
      "ghorepani-poon-hill-trek",
      "jomsom-muktinath-trek",
      "annapurna-circuit-trek",
      "north-annapurna-base-camp-trek",
      "dhaulagiri-circuit-trek",
      "kori-trek",
      "khumai-danda-trek",
      "kapuche-lake-trek",
      "khopra-danda-trek",
    ],
    "dolpo-region": [
      "shey-phoksundo-lake-trek",
      "upper-dolpo-trek",
      "lower-dolpo-trek",
    ],
    "manaslu-region": [
      "manaslu-circuit-trek",
      "manaslu-tsum-valley-circuit-trek",
      "tsum-valley-trek",
    ],
    "everest-region": [
      "everest-base-camp-trek",
      "chola-pass-gokyo-trek",
      "gokyo-valley-trek",
      "pikey-peak-trek",
      "three-passes-trek",
      "renjo-la-pass-trek",
    ],
    "multi-days-tour": [
      "kathmandu-tour-package",
      "upper-mustang-tour",
      "tilicho-lake-tour",
      "rara-lake-tour-nepal",
      "kalinchowk-trek",
      "ghandruk-village-tour",
      "sikles-village-tour",
      "panchase-trek",
    ],
    "day-tours": [
      "pokhara-valley-tour",
      "sarangkot-pokhara-tour",
      "world-peace-pagoda",
      "pokhara-australian-camp-hike",
      "kalikasthan-thulakot-hill",
    ],
  };

  function sortPackages(destinationSlug: string, packages: any[]) {
    const order = packageOrders[destinationSlug];
    if (!order)
      return [...packages].sort((a, b) => a.title.localeCompare(b.title));

    return [...packages].sort(
      (a, b) => order.indexOf(a.slug) - order.indexOf(b.slug)
    );
  }

  const handleClick = () => {
    setDisableHover(true);
    setTimeout(() => setDisableHover(false), 500);
  };

  useEffect(() => {
    const handleScroll = () => {
      setTopValue(Math.max(60 - window.scrollY, 0));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{ top: topValue }}
      className="fixed px-4 py-4 z-[999] bg-white w-full shadow-sm"
    >
      <div className="flex items-center justify-between container mx-auto gap-4 md:max-w-[75vw]">
        <Link
          title="Go to homepage"
          href={"/"}
          className="flex-shrink-0 min-w-[50px]"
        >
          <Image
            src={"/assets/hinepal-logo.webp"}
            priority
            height={170}
            width={130}
            alt="hinepal logo"
            className="h-auto w-[100px] md:w-[130px]"
          />
        </Link>

        <div className="flex gap-4 items-center">
          {navBar.map((activity, index) => (
            <div key={index}>
              <div
                onClick={handleClick}
                className={cn(!disableHover && "group", "hidden lg:flex")}
              >
                <Link
                  href={`/activities/${activity.slug}`}
                  prefetch={false}
                  onMouseEnter={() =>
                    router.prefetch(`/activities/${activity.slug}`)
                  }
                  className="font-bold uppercase flex gap-1 cursor-pointer"
                >
                  {activity.name} <ChevronDown className="group-hover:hidden" />
                  <ChevronUp className="hidden group-hover:block" />
                </Link>

                <div className="hidden group-hover:grid absolute top-[60px] left-0 w-[100vw] py-8 px-0 z-[999]">
                  <div className="pb-8 bg-white shadow-md  border-b border-gray-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container px-12 mx-auto flex-wrap w-[100vw] rounded-md">
                    {sortDestinations(activity.destinations).map(
                      (destination, idx) => (
                        <div key={idx}>
                          <Link
                            className="font-semibold text-lg"
                            prefetch={false}
                            href={`/activities/${activity.slug}/${destination.slug}`}
                            onMouseEnter={() =>
                              router.prefetch(
                                `/activities/${activity.slug}/${destination.slug}`
                              )
                            }
                          >
                            <div className="flex gap-1 items-center mb-2 text-[#F05A24] hover:text-green-700">
                              <span>{destination.name}</span>
                              <ChevronRight className="size-4" />
                            </div>
                          </Link>
                          <ul className="flex flex-col gap-2">
                            {sortPackages(
                              destination.slug,
                              destination.packages
                            ).map((pkg, pIdx) => (
                              <li key={pIdx}>
                                <Link
                                  href={`/${pkg.slug}`}
                                  prefetch={false}
                                  onMouseEnter={() =>
                                    router.prefetch(`/${pkg.slug}`)
                                  }
                                  className="hover:border-b-2 border-dashed border-green-700 hover:text-green-700"
                                >
                                  {pkg.title.includes(":")
                                    ? pkg.title.split(":")[0].trim()
                                    : pkg.title.trim()}
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
          ))}

          <Link
            href={"/adventure"}
            className="hidden lg:flex hover:text-green-700 font-bold uppercase gap-1"
          >
            Adventure
          </Link>
          <Link
            href={"/about-us"}
            className="hidden lg:flex hover:text-green-700 font-bold uppercase gap-1"
          >
            About Us
          </Link>
          <Link
            href={"/blogs"}
            className="hidden lg:flex hover:text-green-700 font-bold uppercase gap-1"
          >
            Blogs
          </Link>
        </div>

        {/* Mobile menu */}
        <div className="flex gap-2 self-center">
          <Link href={`/booking?destination=${destination}`}>
            <Button
              size="lg"
              className="md:p-8 text-lg p-4 bg-green-700 hover:bg-orane-600 cursor-pointer rounded-lg hover:bg-orange-400"
            >
              Book Now
            </Button>
          </Link>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger className="flex justify-center items-center">
                <LucideMenu className="size-12 -mt-1 md:mt-0 md:size-16" />
              </SheetTrigger>
              <SheetContent className="flex flex-col gap-4 p-8 z-[99999]">
                {navBar.map((activity, idx) => (
                  <Accordion key={idx} type="single" collapsible>
                    <AccordionItem value={`item-${idx}`}>
                      <AccordionTrigger className="font-bold text-xl uppercase flex p-0">
                        <Link href={`/activities/${activity.slug}`}>
                          {activity.name}
                        </Link>
                      </AccordionTrigger>
                      <AccordionContent>
                        {sortDestinations(activity.destinations).map(
                          (destination, dIdx) => (
                            <Accordion key={dIdx} type="single" collapsible>
                              <AccordionItem value={`item-${dIdx}`}>
                                <AccordionTrigger className="font-semibold text-xl p-0 py-2">
                                  <Link
                                    href={`/activities/${activity.slug}/${destination.slug}`}
                                    className="flex gap-1 items-center text-orange-600"
                                  >
                                    {destination.name}
                                  </Link>
                                </AccordionTrigger>
                                <AccordionContent>
                                  <ul className="flex flex-col gap-2">
                                    {sortPackages(
                                      destination.slug,
                                      destination.packages
                                    ).map((pkg, pIdx) => (
                                      <li key={pIdx}>
                                        <Link
                                          href={`/${pkg.slug}`}
                                          className="hover:border-b-2 border-dashed border-[#EF5922] hover:text-[#EF5922] font-bold text-lg"
                                        >
                                          {pkg.title.includes(":")
                                            ? pkg.title.split(":")[0].trim()
                                            : pkg.title.trim()}
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
                  href={"/adventure"}
                  className="uppercase font-bold text-xl"
                >
                  Adventures
                </Link>
                <Link
                  href={"/about-us"}
                  className="uppercase font-bold text-xl"
                >
                  About us
                </Link>
                <Link href={"/blogs"} className="uppercase font-bold text-xl">
                  Blogs
                </Link>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

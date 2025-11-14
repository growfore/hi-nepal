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
import { useMemo, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Topbar from "./topbar";

export default function BottomNav({ navBar }: Readonly<{ navBar: TNavBar }>) {
  const [disableHover, setDisableHover] = useState(false);
  const path = usePathname();
  const destination = path.split("/")[1] || "";

  const destinationOrder = useMemo(
    () => ["Everest Region", "Annapurna Region", "Manaslu Region"],
    []
  );

  const packageOrders = useMemo(
    () => ({
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
    }),
    []
  );

  const sortDestinations = useCallback(
    (destinations: any[]) =>
      [...destinations].sort((a, b) => {
        const aIndex = destinationOrder.indexOf(a.name);
        const bIndex = destinationOrder.indexOf(b.name);
        if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
        if (aIndex !== -1) return -1;
        if (bIndex !== -1) return 1;
        return a.name.localeCompare(b.name);
      }),
    [destinationOrder]
  );

  const sortPackages = useCallback(
    (destinationSlug: string, packages: any[]) => {
      // @ts-expect-error type error
      const order = packageOrders[destinationSlug];
      if (!order)
        return [...packages].sort((a, b) => a.title.localeCompare(b.title));
      return [...packages].sort(
        (a, b) => order.indexOf(a.slug) - order.indexOf(b.slug)
      );
    },
    [packageOrders]
  );

  const handleClick = useCallback(() => {
    setDisableHover(true);
    setTimeout(() => setDisableHover(false), 500);
  }, []);

  return (
    <nav
      style={{ top: 0 }}
      className="fixed z-999 bg-white w-full shadow-sm top-0"
    >
      <Topbar />
      <div className="flex items-center justify-between container mx-auto gap-4 md:max-w-[75vw] p-2">
        <a href="/" title="Go to homepage" className="shrink-0 min-w-[50px]">
          <Image
            src="/assets/hinepal-logo.webp"
            priority
            height={170}
            width={130}
            alt="hinepal logo"
            className="h-auto w-[100px] md:w-[130px]"
          />
        </a>

        <div className="flex gap-4 items-center">
          {navBar.map((activity) => (
            <div key={activity.slug}>
              <button
                onClick={handleClick}
                className={cn(!disableHover && "group", "hidden lg:flex")}
              >
                <Link
                  href={`/activities/${activity.slug}`}
                  prefetch={false}
                  className="font-bold uppercase flex gap-1 cursor-pointer"
                >
                  {activity.name}
                  <ChevronDown className="group-hover:hidden" />
                  <ChevronUp className="hidden group-hover:block" />
                </Link>

                {/* Dropdown */}
                <div className="hidden group-hover:grid absolute top-[120px] left-0 w-screen py-8 px-0 z-999">
                  <div className="pb-8 bg-white shadow-md border-b border-gray-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container px-12 mx-auto rounded-md">
                    {sortDestinations(activity.destinations).map(
                      (destination) => (
                        <div key={destination.slug}>
                          {/* a tag instead of Link */}
                          <a
                            className="font-semibold text-lg"
                            href={`/activities/${activity.slug}/${destination.slug}`}
                          >
                            <div className="flex gap-1 items-center mb-2 text-[#F05A24] hover:text-green-700">
                              <span>{destination.name}</span>
                              <ChevronRight className="size-4" />
                            </div>
                          </a>

                          <ul className="flex flex-col items-start text-left gap-2 font-medium">
                            {sortPackages(
                              destination.slug,
                              destination.packages
                            ).map((pkg) => (
                              <li key={pkg.slug}>
                                <a
                                  href={`/${pkg.slug}`}
                                  className="hover:border-b-2 border-dashed border-green-700 hover:text-green-700"
                                >
                                  {pkg.title.split(":")[0].trim()}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </button>
            </div>
          ))}

          {/* Keep these as Links (SPA feel) */}
          <a
            href="/adventure"
            className="hidden lg:flex hover:text-green-700 font-bold uppercase gap-1"
          >
            Adventure
          </a>
          <a
            href="/about-us"
            className="hidden lg:flex hover:text-green-700 font-bold uppercase gap-1"
          >
            About Us
          </a>
          <a
            href="/blogs"
            className="hidden lg:flex hover:text-green-700 font-bold uppercase gap-1"
          >
            Blogs
          </a>
        </div>

        {/* Mobile */}
        <div className="flex gap-2 self-center">
          <a href={`/booking?destination=${destination}`}>
            <Button
              size="lg"
              className="md:p-8 text-lg p-4 bg-green-700 cursor-pointer rounded-lg hover:bg-orange-400"
            >
              Book Now
            </Button>
          </a>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger className="flex justify-center items-center">
                <LucideMenu className="size-12 -mt-1 md:mt-0 md:size-16" />
              </SheetTrigger>
              <SheetContent className="flex flex-col gap-4 p-8 z-99999 overflow-y-auto">
                {navBar.map((activity) => (
                  <Accordion key={activity.slug} type="single" collapsible>
                    <AccordionItem value={`item-${activity.slug}`}>
                      <AccordionTrigger className="font-bold text-xl uppercase flex p-0">
                        <a href={`/activities/${activity.slug}`}>
                          {activity.name}
                        </a>
                      </AccordionTrigger>
                      <AccordionContent>
                        {sortDestinations(activity.destinations).map(
                          (destination) => (
                            <Accordion
                              key={destination.slug}
                              type="single"
                              collapsible
                            >
                              <AccordionItem value={`item-${destination.slug}`}>
                                <AccordionTrigger className="font-semibold text-xl p-0 py-2">
                                  <a
                                    href={`/activities/${activity.slug}/${destination.slug}`}
                                    className="flex gap-1 items-center text-orange-600"
                                  >
                                    {destination.name}
                                  </a>
                                </AccordionTrigger>
                                <AccordionContent>
                                  <ul className="flex flex-col gap-2">
                                    {sortPackages(
                                      destination.slug,
                                      destination.packages
                                    ).map((pkg) => (
                                      <li key={pkg.slug}>
                                        <a
                                          href={`/${pkg.slug}`}
                                          className="hover:border-b-2 border-dashed border-[#EF5922] hover:text-[#EF5922] font-bold text-lg"
                                        >
                                          {pkg.title.split(":")[0].trim()}
                                        </a>
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
                <a href="/adventure" className="uppercase font-bold text-xl">
                  Adventures
                </a>
                <a href="/about-us" className="uppercase font-bold text-xl">
                  About Us
                </a>
                <a href="/blogs" className="uppercase font-bold text-xl">
                  Blogs
                </a>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

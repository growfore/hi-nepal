import { LucideMenu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { TNavBar } from "@/types/types";
import { Button } from "./ui/button";

export function MobileNav({ navBar }: { navBar: TNavBar }) {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger className="flex items-center justify-center">
          <LucideMenu className="size-12 md:size-16" />
        </SheetTrigger>

        <SheetContent className="flex flex-col p-6 overflow-y-auto w-[300px] sm:w-[400px]">
          {navBar.map((activity) => (
            <Accordion key={activity.slug} type="single" collapsible>
              <AccordionItem value={activity.slug} className="border-b">
                <AccordionTrigger className="font-bold text-xl uppercase">
                  {activity.name}
                </AccordionTrigger>

                <AccordionContent className="pl-2">
                  {activity.destinations.map((destination) => (
                    <Accordion
                      key={destination.slug}
                      type="single"
                      collapsible
                    >
                      <AccordionItem
                        value={destination.slug}
                        className="border-b-0"
                      >
                        <AccordionTrigger className="font-bold text-xl">
                          {destination.name}
                        </AccordionTrigger>

                        <AccordionContent>
                          <ul className="flex flex-col gap-4 pl-4">
                            {/* Destination main link */}
                            <li>
                              <SheetClose asChild>
                                <Link
                                  href={`/activities/${activity.slug}/${destination.slug}`}
                                  className="text-orange-600 hover:text-orange-700  text-lg font-bold"
                                >
                                  View {destination.name}
                                </Link>
                              </SheetClose>
                            </li>

                            {/* Packages */}
                            {destination.packages.map((pkg) => (
                              <li key={pkg.slug}>
                                <SheetClose asChild>
                                  <Link
                                    href={`/${pkg.slug}`}
                                    className="hover:text-[#EF5922] hover:underline text-lg"
                                  >
                                    {pkg.title.split(":")[0].trim()}
                                  </Link>
                                </SheetClose>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}

          {/* Static links */}
          {[
            { href: "/adventure", label: "Adventures" },
            { href: "/about-us", label: "About Us" },
            { href: "/air-ticket-booking-nepal", label: "Flight Ticket" },
            { href: "/helicopter-rescue-flights-nepal", label: "Rescue Flights" },
            { href: "/vehicle-rent", label: "Vehicle Rent" },
            { href: "/blogs", label: "Blogs" },
          ].map(({ href, label }) => (
            <SheetClose asChild key={href}>
              <Link
                href={href}
                className="uppercase font-bold text-lg py-2"
              >
                {label}
              </Link>
            </SheetClose>
          ))}

          {/* Explicit close */}
          <SheetClose asChild>
            <Button className="w-full">Close</Button>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  );
}

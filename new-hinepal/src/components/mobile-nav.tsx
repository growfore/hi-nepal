import { LucideMenu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { TNavBar } from "@/types/types";

export function MobileNav({ navBar }: { navBar: TNavBar }) {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger className="flex justify-center items-center">
          <LucideMenu className="size-12 md:size-16" />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-4 p-6 overflow-y-auto w-[300px] sm:w-[400px]">
          {navBar.map((activity) => (
            <Accordion key={activity.slug} type="single" collapsible>
              <AccordionItem value={activity.slug} className="border-b">
                <AccordionTrigger className="font-bold text-lg uppercase py-3">
                  {activity.name}
                </AccordionTrigger>
                <AccordionContent>
                  {activity.destinations.map((destination) => (
                    <Accordion key={destination.slug} type="single" collapsible>
                      <AccordionItem value={destination.slug} className="border-b-0">
                        <AccordionTrigger className="font-semibold text-base py-2">
                          <Link
                            href={`/activities/${activity.slug}/${destination.slug}`}
                            className="text-orange-600 hover:text-orange-700"
                          >
                            {destination.name}
                          </Link>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="flex flex-col gap-2 pl-2">
                            {destination.packages.map((pkg) => (
                              <li key={pkg.slug}>
                                <Link
                                  href={`/${pkg.slug}`}
                                  className="text-sm hover:text-[#EF5922] hover:underline"
                                >
                                  {pkg.title.split(":")[0].trim()}
                                </Link>
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
          
          <Link href="/adventure" className="uppercase font-bold text-lg py-2">
            Adventures
          </Link>
          <Link href="/about-us" className="uppercase font-bold text-lg py-2">
            About Us
          </Link>
          <Link href="/air-ticket-booking-nepal" className="uppercase font-bold text-lg py-2">
            Flight Ticket
          </Link>
          <Link href="/helicopter-rescue-flights-nepal" className="uppercase font-bold text-lg py-2">
            Rescue Flights
          </Link>
          <Link href="/vehicle-rent" className="uppercase font-bold text-lg py-2">
            Vehicle Rent
          </Link>
          <Link href="/blogs" className="uppercase font-bold text-lg py-2">
            Blogs
          </Link>
        </SheetContent>
      </Sheet>
    </div>
  );
}
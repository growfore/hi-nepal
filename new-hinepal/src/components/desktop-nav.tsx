import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { TNavBar } from "@/types/types";

export function DesktopNav({ navBar }: { navBar: TNavBar }) {
  return (
    <div className="hidden lg:flex gap-4 items-center">
      {navBar.map((activity) => (
        <div key={activity.slug} className="group relative">
          <Link
            href={`/activities/${activity.slug}`}
            prefetch={false}
            className="font-bold uppercase flex gap-1 items-center hover:text-green-700"
          >
            {activity.name}
            <ChevronDown className="size-4" />
          </Link>

          <div className="hidden group-hover:block absolute top-full  pt-4 z-50">
            <div className="bg-white shadow-lg border border-gray-200 rounded-md p-6 min-w-[900px]">
              <div className="grid grid-cols-3 gap-6">
                {activity.destinations.map((destination) => (
                  <div key={destination.slug}>
                    <Link
                      href={`/activities/${activity.slug}/${destination.slug}`}
                      className="font-semibold text-lg flex gap-1 items-center mb-3 text-[#F05A24] hover:text-green-700"
                    >
                      {destination.name}
                      <ChevronRight className="size-4" />
                    </Link>
                    <ul className="flex flex-col gap-2 text-sm">
                      {destination.packages.map((pkg) => (
                        <li key={pkg.slug}>
                          <Link
                            href={`/${pkg.slug}`}
                            className="hover:text-green-700 hover:underline text-lg"
                          >
                            {pkg.title.split(":")[0].trim()}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="group relative">
        <button className="font-bold uppercase flex gap-1 items-center hover:text-green-700">
          Transport
          <ChevronDown className="size-4" />
        </button>
        
        <div className="hidden group-hover:block absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50">
          <div className="bg-white shadow-lg border border-gray-200 rounded-md p-6 min-w-[250px]">
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/air-ticket-booking-nepal"
                  className="text-[#F05A24] hover:text-green-700 font-semibold"
                >
                  Flight Tickets
                </Link>
              </li>
              <li>
                <Link
                  href="/vehicle-rent"
                  className="text-[#F05A24] hover:text-green-700 font-semibold"
                >
                  Vehicle Rent
                </Link>
              </li>
              <li>
                <Link
                  href="/helicopter-rescue-flights-nepal"
                  className="text-[#F05A24] hover:text-green-700 font-semibold"
                >
                  Rescue Flights
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Link href="/adventure" className="font-bold uppercase hover:text-green-700">
        Adventure
      </Link>
      <Link href="/about-us" className="font-bold uppercase hover:text-green-700">
        About Us
      </Link>
    </div>
  );
}

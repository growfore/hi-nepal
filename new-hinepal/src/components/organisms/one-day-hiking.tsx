import PackageCard from "@/components/molecules/package-card";
import { TPackages } from "@/types/types";
import Link from "next/link";
import React from "react";
import HLinkComp from "../atoms/link-component";

const OneDayTours = ({ packages }: { packages: any[] }) => {
  const filteredPackages = packages || [];

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-justify md:text-center md:mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold  leading-tight">
              1 Day & Short Hiking Tours in Nepal
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-4">
              Nepal may be famous for long treks, but it also offers some of the most rewarding Day Hikes in Nepal for travelers short on time. Hi Nepal Travels & Treks provides well-planned day hikes and short hiking tours in Nepal, ideal for those seeking quick yet memorable trekking experiences.

              Enjoy breathtaking Himalayan views, scenic trails and rich cultural encounters while exploring popular hiking routes around Pokhara, Kathmandu and the
              <HLinkComp
                text="Annapurna region"
                href="/activities/trekking/annapurna-region"
              />. From gentle nature walks to rewarding viewpoints, hiking in Pokhara, Nepal offers one of the best short trekking experiences in the country.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
            {filteredPackages.map((item: any, index) => (
              <PackageCard
                key={item.id}
                item={item}
                destination={{
                  slug: item.destination.slug.split("/")[2],
                  activity: {
                    name: "Trekking",
                    slug: "trekking",
                  },
                }}
              />
            ))}
          </div>
          <div className="flex flex-col justify-center items-center my-12">
            <div className="text-center flex flex-col md:flex-row items-center gap-4 justify-center">
              <Link
                href="/activities/tours/day-tours"
                prefetch={false}
                className="uppercase inline-flex items-center justify-center px-8 py-4 bg-black text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition-colors duration-300"
              >
                All one Day Hikes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneDayTours;

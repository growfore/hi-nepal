import PackageCard from "@/components/package-card";
import endpoints from "@/constant/endpoints";
import { TPackages } from "@/types/types";
import { get } from "@/utils/request-hander";
import Link from "next/link";
import React from "react";

const OneDayTours = async () => {
  let packages: TPackages = [];
  await get({
    endPoint: endpoints.PACKAGES,
    // params: { query: 'everest' },
    token: "",
    success: (message, res) => {
      packages.push(...res.data.packages);
    },
    failure: (message) => {
      console.log(message);
    },
  });

  const popularTreks = [
    "pokhara-valley-tour",
    "sarangkot-pokhara-tour",
    "world-peace-pagoda",
  ];

  const filteredPackages = packages
    .filter((pkg) => popularTreks.includes(pkg.slug))
    .sort(
      (a, b) => popularTreks.indexOf(a.slug) - popularTreks.indexOf(b.slug)
    );

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className='text-orange-500 text-xl font-semibold uppercase relative inline-block px-8 before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-6 before:h-0.5 before:bg-orange-500 after:content-[""] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-6 after:h-0.5 after:bg-orange-500'>
              One Day Hiking in Nepal
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-4">
              Limited on time but still want a trekking experience. Nepal hiking
              company offers the best hiking places in Nepal, where you can gain
              the experience of trekking in a limited time while enjoying the
              beautiful vista of the Himalayas, cultural and natural beauties.
              Hiking in Pokhara Nepal is offers one of the best hiking
              experiences in Nepal.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPackages.map((item: any, index) => (
              <PackageCard
                key={index}
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
                className="uppercase inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition-colors duration-300"
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

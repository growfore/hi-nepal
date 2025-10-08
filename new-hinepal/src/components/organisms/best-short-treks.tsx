import PackageCard from "@/components/molecules/package-card";
import endpoints from "@/constant/endpoints";
import { TPackageDetails, TPackages } from "@/types/types";
import { get } from "@/utils/request-hander";
import { usePopularPackages } from "@/zustand/store";
import Link from "next/link";
import React from "react";

const BestShortTreks = async ({ packages }: { packages: TPackages }) => {
  const popularTreks = [
    "mardi-himal-trek",
    "ghorepani-poon-hill-trek",
    "kori-trek",
  ];

  const filteredPackages = packages
    .filter((pkg) => popularTreks.includes(pkg.slug))
    .sort(
      (a, b) => popularTreks.indexOf(a.slug) - popularTreks.indexOf(b.slug)
    );

  return (
    <section className="py-8  bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-left md:text-center mb-12 md:mb-16">
          <div className="max-w-4xl mx-auto">
            <p className='text-orange-500 text-xl font-semibold uppercase relative inline-block px-8 before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-6 before:h-0.5 before:bg-orange-500 after:content-[""] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-6 after:h-0.5 after:bg-orange-500'>
              BEST SHORT TREKS IN NEPAL
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-4">
              Looking for the best yet short trekking options in Nepal. Hi Nepal
              Travels and Treks, a reliable trekking agency in Nepal, offers you
              well-planned itineraries of some of the most pleasing treks of
              Nepal, like{" "}
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/mardi-himal-trek"}
              >
                Mardi Himal
              </Link>
              ,{" "}
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/ghorepani-poon-hill-trek"}
              >
                Ghorepani Poon Hill
              </Link>
              , and{" "}
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/kapuche-lake-trek"}
              >
                Kapuche Lake Trek
              </Link>
              . Explore the beautiful Himalaya range of Nepal with us,
              maximizing your travel experience.
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
            <small className="mb-4">Explore More</small>
            <div className="text-center flex flex-col md:flex-row items-center gap-4 justify-center">
              <Link
                href="/activities/trekking"
                className="uppercase inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition-colors duration-300"
              >
                Best Treks in Nepal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestShortTreks;

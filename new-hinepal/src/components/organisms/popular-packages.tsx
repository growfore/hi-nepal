import PackageCard from "@/components/molecules/package-card";
import { TPackages } from "@/types/types";
import Link from "next/link";
import React from "react";

const PopularPackages = async ({ packages }: { packages: TPackages }) => {
  const popularTreks = [
    "everest-base-camp-trek",
    "annapurna-base-camp-trek",
    "manaslu-circuit-trek",
    "mardi-himal-trek",
    "kathmandu-tour-package",
    "pokhara-valley-tour",
  ];

  const filteredPackages = packages
    .filter((pkg) => popularTreks.includes(pkg.slug))
    .sort(
      (a, b) => popularTreks.indexOf(a.slug) - popularTreks.indexOf(b.slug)
    );

  return (
    <section className="py-2 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-left md:text-center mb-12 md:mb-16">
          <div className="mt-12">
            {/* <h1 className='text-orange-500 text-xl font-semibold uppercase relative inline-block px-8 before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-6 before:h-0.5 before:bg-orange-500 after:content-[""] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-6 after:h-0.5 after:bg-orange-500'>
              NEPAL TRAVEL PACKAGES
            </h1> */}
            {/* <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-dark-blue-900 leading-tight">
              Nepal Travel Packages
            </h2> */}

            {/* <h2 className='mt-12 text-orange-500 text-xl font-semibold uppercase relative inline-block px-8 before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-6 before:h-0.5 before:bg-orange-500 after:content-[""] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-6 after:h-0.5 after:bg-orange-500'>
              Popular Treks in Nepal
            </h2> */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-dark-blue-900 leading-tight">Popular Treks in Nepal</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-4">
              Are you looking for Premium Trekking or Tour packages with a
              Reliable trekking agency in Nepal? Get the best Nepal Tour package
              with the Best Travel and Trekking Company in Nepal. Hi Nepal
              Travels and Treks Pvt. Ltd. is one of the reputed Nepal trekking
              companies offering high-quality services in trekking and
              travelling fields for more than 20 years.
              Nepal is a heaven on Earth offering some of the most popular treks
              in the world, including Everest Base Camp, Annapurna Base Camp,
              and Manaslu Circuit treks. Enhance your trekking experience with
              the best trekking company in Nepal while strolling between
              high-standing snow-capped mountains and stunning natural and
              cultural beauties.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center ">
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
            <small className="mb-4">Explore More</small>
            <div className="text-center flex flex-col md:flex-row items-center gap-4 justify-center">
              <Link
                href="/activities/trekking"
                className="uppercase inline-flex items-center justify-center px-8 py-4 bg-orange-400 text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition-colors duration-300"
              >
                Popular Trekking Packages
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularPackages;

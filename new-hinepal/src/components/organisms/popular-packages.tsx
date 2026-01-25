import { TPackages } from "@/types/types";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
const PackageCard = dynamic(() => import("@/components/molecules/package-card"), { ssr: false });

const PopularPackages = async ({ packages }: { packages: TPackages }) => {
  return (
    <section className="py-2">
      <div className="mx-auto px-6 md:container">
        <div className="text-left md:text-center mb-12 md:mb-16">
          <div className="mt-12">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-dark-blue-900 leading-tight">
              Top 6 Treks in Nepal 2026
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-4">
              Are you looking for premium trekking or tour packages with a
              reliable trekking & travel agency in Pokhara, Nepal? Get the best
              Nepal tour package with the best tour and travel company in Nepal.
              Hi Nepal Travels and Treks Pvt. Ltd. is one of the reputed Nepal
              trekking companies offering high-quality services in the trekking
              and travelling fields for more than 20 years. Nepal is a heaven on
              Earth, offering some of the most popular treks in the world,
              including{" "}
              <Link
                href={"https://hinepaltreks.com/everest-base-camp-trek"}
                className="text-green-700 underline"
              >
                Mount Everest Base Camp
              </Link>
              ,{" "}
              <Link
                href={"https://hinepaltreks.com/annapurna-base-camp-trek"}
                className="text-green-700 underline"
              >
                Annapurna Base Camp
              </Link>
              ,{" "}
              <Link
                href={"https://hinepaltreks.com/annapurna-circuit-trek"}
                className="text-green-700 underline"
              >
                Annapurna Circuit
              </Link>
              , and
              <Link
                href={"https://hinepaltreks.com/manaslu-circuit-trek"}
                className="text-green-700 underline"
              >
                Manaslu Circuit
              </Link>{" "}
              treks. Enhance your trekking experience with the best trekking,
              tours & travel agency in Nepal while strolling between
              high-standing snow-capped mountains and stunning natural and
              cultural beauties.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center ">
            {packages.map((item: any, index) => (
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
                prefetch={false}
                className="uppercase inline-flex items-center justify-center px-8 py-4 bg-black text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition-colors duration-300"
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

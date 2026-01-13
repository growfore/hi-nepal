import PackageCard from "@/components/molecules/package-card";
import { TPackages } from "@/types/types";
import Link from "next/link";
import React from "react";

const TenDaysPlusTreks = ({ packages }: { packages: any[] }) => {
  const filteredPackages = packages || [];

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-left md:text-center mb-12 md:mb-16">
          <div className="max-w-4xl mx-auto mt-12">
            {/* <p className='text-orange-500 text-xl font-semibold uppercase relative inline-block px-8 before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-6 before:h-0.5 before:bg-orange-500 after:content-[""] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-6 after:h-0.5 after:bg-orange-500'>
              10 Days Plus Treks in Nepal
            </p> */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold  leading-tight">
              10 Days Plus Treks in Nepal
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-4">
              Nepal offers everything, from beginner-friendly to some of the
              most challenging and long trekking trails in the world, such as
              the{" "}
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/annapurna-circuit-trek"}
              >
                Annapurna Circuit
              </Link>
              ,{" "}
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/kanchenjunga-circuit-trek"}
              >
                Kanchenjunga Circuit
              </Link>
              , and{" "}
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/dhaulagiri-circuit-trek"}
              >
                Dhaulagiri Circuit
              </Link>{" "}
              Treks. No matter how challenging and tough the route is, our team
              is sworn to make your trekking experience as safe as possible.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
            {filteredPackages.map((item: any) => (
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
                href="/activities/trekking"
                prefetch={false}
                className="uppercase inline-flex items-center justify-center py-4 px-8 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition-colors duration-300"
              >
                More Trekking Trails
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TenDaysPlusTreks;

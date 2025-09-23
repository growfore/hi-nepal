import PackageCard from "@/components/package-card";
import endpoints from "@/constant/endpoints";
import { TPackages } from "@/types/types";
import { get } from "@/utils/request-hander";
import Link from "next/link";
import React from "react";

const PopularTours = async () => {
  let packages: TPackages = [];
  await get({
    endPoint: endpoints.PACKAGES,
    token: "",
    success: (message, res) => {
      packages.push(...res.data.packages);
    },
    failure: (message) => {
      console.log(message);
    },
  });

  const popularTours = [
    "kathmandu-tour-package",
    "upper-mustang-tour",
    "tilicho-lake-tour",
  ];

  const filteredPackages = packages
    .filter((pkg) => popularTours.includes(pkg.slug))
    .sort(
      (a, b) => popularTours.indexOf(a.slug) - popularTours.indexOf(b.slug)
    );

  return (
    <section className="py-8  bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-left md:text-center mb-12 md:mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className='text-orange-500 text-xl font-semibold uppercase relative inline-block px-8 before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-6 before:h-0.5 before:bg-orange-500 after:content-[""] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-6 after:h-0.5 after:bg-orange-500'>
              Popular Tours in Nepal
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-4">
              Nepal is not just about the Himalayan trekkings, with the best
              planned and{" "}
              <Link
                className="text-green-700"
                href={
                  "https://hinepaltreks.com/activities/tours/multi-days-tour"
                }
              >
                most popular multi-day tour
              </Link>{" "}
              with the best tour operator in Nepal, you can make your travels
              rewarding. Explore Nepal with the{" "}
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/upper-mustang-tour"}
              >
                Upper Mustang
              </Link>
              , { " "}
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/rara-lake-tour-nepal"}
              >
                Rara Lake
              </Link>
              , {" "}
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/tilicho-lake-tour"}
              >
                Tilicho Lake
              </Link>
              , and {" "}
              <Link
                className="text-green-700"
                href={"https://hinepaltreks.com/kathmandu-tour-package"}
              >
                Kathmandu Valley tour package
              </Link>
              , some of the best Nepal hiking tours
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
                href="/activities/tours"
                className="uppercase inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition-colors duration-300"
              >
                All Popular Tours
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularTours;

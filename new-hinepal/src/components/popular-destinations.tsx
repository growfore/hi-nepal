import endpoints from "@/constant/endpoints";
import { TDestination } from "@/types/types";
import { getProxyUrl } from "@/utils/imageProxy";
import { get } from "@/utils/request-hander";
import Link from "next/link";
import React from "react";

const PopularDestinations = async () => {
  const topDestinations: TDestination[] = [];
  await get({
    endPoint: endpoints.DESTINATIONS,
    token: "",
    success: (message, res) => {
      topDestinations.push(...res.data);
    },
    failure: (message) => {
      console.log(message);
    },
  });
  const data = topDestinations;

  const order = [
    "Everest Region",
    "Annapurna Region",
    "Manaslu Region",
    "Langtang Region",
    "Dolpo Region",
  ];

  const sorted = data
    .filter((item) => order.includes(item.name))
    .sort((a, b) => order.indexOf(a.name) - order.indexOf(b.name));

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-end mb-12 md:mb-16">
          <div className="">
            <p className='text-orange-500 text-sm font-semibold uppercase relative pl-8 before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-6 before:h-0.5 before:bg-orange-500'>
              POPULAR DESTINATIONS
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-dark-blue-900 leading-tight">
              Nepal Travel Destinations
            </h2>
          </div>
          <div className="text-gray-600 text-base md:text-lg leading-relaxed text-justify">
            Hi Nepal Travels & Treks Pvt. Ltd. is the best trekking company in
            Nepal, specializing in offering unforgettable{" "}
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/activities/trekking"}
            >
              trekking
            </Link>
            ,{" "}
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/activities/tours"}
            >
              tours
            </Link>
            , and{" "}
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/adventure"}
            >
              adventure sports
            </Link>{" "}
            experiences across the country. From breathtaking mountain trails to
            rich cultural journeys, our trekking and travel agency in Nepal
            offers expertly guided treks, customized tours, and seamless travel
            services.{" "}
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/activities/trekking"}
            >
              Trekking
            </Link>{" "}
            to the stunning {" "}
            <Link
              className="text-green-700"
              href={
                "https://hinepaltreks.com/activities/trekking/everest-region"
              }
            >
              Everest
            </Link> {" "}
            and {" "}
            <Link
              className="text-green-700"
              href={
                "https://hinepaltreks.com/activities/trekking/annapurna-region"
              }
            >
              Annapurna regions
            </Link>{" "}
            to{" "}
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/activities/tours"}
            >
              tour
            </Link>{" "}
            around{" "}
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/pokhara-valley-tour"}
            >
              Pokhara
            </Link>{" "}
            and{" "}
            <Link
              className="text-green-700"
              href={"https://hinepaltreks.com/kathmandu-tour-package"}
            >
              Kathmandu valleys
            </Link>
            , Hi Nepal Travels and Treks, a reliable travel agency in Nepal,
            Pokhara, offers tons of heavenly traveling and trekking destinations
            in Nepal.
          </div>
        </div>
        <div className="grid gap-8">
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sorted.slice(0, 5).map((d, index) => {
                return (
                  <Link
                    key={index}
                    className="block"
                    href={"/activities/trekking/" + d.slug}
                  >
                    <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <figure className="w-full h-64">
                        <img
                          src={getProxyUrl(d.image)}
                          loading="lazy"
                          width={600}
                          height={400}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 366px"
                          alt={d.name}
                          className="w-full h-full object-cover"
                        />
                      </figure>
                      {/* <div className='absolute top-4 left-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10'>
                        {d.activity.name}
                      </div> */}
                      <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                        <h3 className="text-xl font-bold">{d.name}</h3>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center my-12">
          <small className="mb-4">Explore More</small>
          <div className="text-center flex flex-col md:flex-row items-center gap-4 justify-center">
            <Link
              href="/activities/trekking"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition-colors duration-300"
            >
              TREKKING DESTINATIONS
            </Link>
            <Link
              href="/activities/tours"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-700 text-white font-semibold rounded-full shadow-md hover:bg-green-500 transition-colors duration-300"
            >
              TOUR DESTINATIONS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;

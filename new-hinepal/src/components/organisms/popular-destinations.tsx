import endpoints from "@/constant/endpoints";
import { TDestination } from "@/types/types";
import { get } from "@/utils/request-handler";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { placeholderImage } from "@/utils/placeholder-image";
import HLinkComp from "../atoms/link-component";

const PopularDestinations = async () => {
  const topDestinations: TDestination[] = [];
  await get({
    endPoint: endpoints.DESTINATIONS,
    token: "",
    success: (message, res) => {
      topDestinations.push(...res.data);
    },
    enableCaching: true,
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
      <div className="container mx-auto px-4 md:px-6 ">
        <div className="grid gap-8 md:gap-4  mb-12 md:mb-16 flex-col justify-center text-center">
          <div className="">
            <p className='text-orange-500 text-sm font-semibold uppercase relative inline-block px-8 before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-6 before:h-0.5 before:bg-orange-500 after:content-[""] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-6 after:h-0.5 after:bg-orange-500'>
            POPULAR DESTINATIONS
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-dark-blue-900 leading-tight">
              Trekking Regions in Nepal
            </h2>
          </div>
          <div className="text-gray-600 text-base md:text-lg leading-relaxed text-justify">
            Trekking Regions in Nepal

            Nepal is home to some of the world’s most diverse and iconic <HLinkComp text="trekking" href="/activities/trekking" />
            regions, and Hi Nepal Travels & Treks Pvt. Ltd. is a trusted trekking company in Nepal, specializing in unforgettable trekking,
            <HLinkComp href="/activities/tours" text="tours" /> and
            <HLinkComp href="/adventure" text="adventure" /> experiences across the country.
            As an experienced trekking and travel agency in Nepal, we offer expertly guided treks, customized itineraries, and seamless travel services tailored to every type of traveler.

            From the legendary <HLinkComp text="Everest" href="/everest-region" />trekking region to the scenic
            <HLinkComp text="Annapurna" href="/annapurna-region" /> trekking region, and from cultural journeys in the
            <HLinkComp href="/pokhara-valley-tour" text="Pokhara" /> and
            <HLinkComp text="Kathmandu" href="/kathmandu-tour-package" /> valleys to remote Himalayan trails, we cover the most popular trekking regions in Nepal. Based in Pokhara, Hi Nepal Travels & Treks is a reliable travel agency in Nepal, offering access to a wide range of heavenly trekking and travel destinations throughout the country.
          </div>
        </div>
        <div className="grid gap-8">
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sorted.slice(0, 5).map((d, index) => {
                return (
                  <Link
                    key={d.slug}
                    className="block"
                    href={"/activities/trekking/" + d.slug}
                    prefetch={false}
                  >
                    <div className="relative rounded-md hover:-translate-y-1 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                      <figure className="w-full h-64">
                        <Image
                          blurDataURL={placeholderImage}
                          placeholder="blur"
                          src={d.image}
                          width={420}
                          height={320}
                          alt={d?.imageAlt || d.name}
                          className="w-full h-full object-cover"
                        />
                      </figure>
                      <div className="absolute inset-x-0 bottom-0 p-6 bg-linear-to-t from-black/70 to-transparent text-white">
                        <h3 className="text-2xl font-bold">{d.name}</h3>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center my-12">
          <div className="text-center flex flex-col md:flex-row items-center gap-4 justify-center">
            <Link
              href="/activities/trekking"
              prefetch={false}
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition-colors duration-300"
            >
              TREKKING DESTINATIONS
            </Link>
            <Link
              href="/activities/tours"
              prefetch={false}
              className="inline-flex items-center justify-center px-8 py-4 bg-green-700 text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition-colors duration-300"
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

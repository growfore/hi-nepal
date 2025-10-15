"use server";

import { TDestinationSingle, TPackages } from "@/types/types";
import Link from "next/link";
import React from "react";
import { LucideClock, LucideStar } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type TProps = {
  item: TPackages[0];
  destination: Partial<TDestinationSingle>;
};

const PackageCard = (props: TProps) => {
  const { item } = props;

  return (
    <div className="w-full">
      <div className="w-[380px] pb-4  bg-white rounded-md shadow-sm  hover:-translate-y-0.5 overflow-hidden hover:shadow-md transition-all duration-300 relative">
        <figure className="w-full h-56 relative">
          <Link
            aria-label={item.title}
            href={`/${item.slug}`}
            className="block w-full h-full"
          >
            <Image
              width={300}
              height={300}
              className="w-full h-full object-cover rounded-t-md"
              src={(item?.thumbnail)}
              alt={item.title || "Package thumbnail"}
            />
          </Link>
        </figure>
        <div className="p-4">
          <div className="">
            <h3 className="text-2xl font-bold text-dark-blue-900 mb-2">
              <Link title={item.title} href={`/${item.slug}`}>
                {item.title.split(":")[0]}
              </Link>
            </h3>
            <div className="flex gap-1 justify-between">
              <div className="flex gap-1 flex-col">
                <p>{item?.destination?.name}</p>
                <p className="flex gap-1 items-center">
                  <LucideClock strokeWidth={1} />
                  <span>
                    {item?.duration && item.duration.includes(":")
                      ? item.duration
                      : item.duration + " Day(s)"}
                  </span>
                </p>
              </div>
              <div className="flex flex-col">
                <p>115+ Reviews</p>
                <p className="flex gap-1 items-center">
                  {Array.from({ length: 5 }).map((_, idx) => {
                    return (
                      <span>
                        <LucideStar size={16} fill="#18A44A" stroke="#18A44A" />
                      </span>
                    );
                  })}
                </p>
                <p className="font-bold text-green-600">5.0 Ratings</p>
              </div>
            </div>
          </div>
          <div className="flex ">
            <Link href={`/booking?destination=${item?.slug}`}>
              <Button
                size={"lg"}
                className="rounded-full bg-orange-400 hover:bg-orange-600 cursor-pointer mt-4"
              >
                {" "}
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;

"use server";

import { TDestinationSingle, TPackages } from "@/types/types";
import Link from "next/link";
import React from "react";
import { LucideClock } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type TProps = {
  item: TPackages[0];
  destination: Partial<TDestinationSingle>;
};

const PackageCard = (props: TProps) => {
  const { item } = props;

  return (
    <div className="">
      <div className="sm:w-full md:max-w-[380px] md:w-[380px] pb-4  bg-white rounded-md shadow-sm  hover:-translate-y-0.5 overflow-hidden hover:shadow-md transition-all duration-300 relative">
        <figure className="w-full h-56 relative">
            <Link
            aria-label={item.title}
            href={`/${item.slug}`}
            className="block w-full h-full"
            prefetch={false}
          >
            <Image
              width={1200}
              height={300}
              className="w-full h-full object-cover rounded-t-md"
              src={item?.thumbnail}
              alt={item?.thumbnailImageAlt || item.title || "Package thumbnail"}
            />
          </Link>
        </figure>
        <div className="p-4">
          <h3 className="text-2xl font-bold text-dark-blue-900 mb-2">
            <Link title={item.title} href={`/${item.slug}`} prefetch={false}>
              {item.title.split(":")[0]}
            </Link>
          </h3>
          <div className="flex gap-1 justify-between">
            <div className="flex gap-1 flex-col">
              <p>{item?.destination?.name}</p>
              <p className="flex gap-1 items-center">
                <LucideClock strokeWidth={1} />
                <span>{item?.duration ?? "-"} Day(s)</span>
              </p>
            </div>

            <Link href={`/booking?destination=${item?.slug}`} prefetch={false}>
              <Button
                size={"lg"}
                className="rounded-full  hover:bg-orange-600 cursor-pointer mt-4"
              >
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

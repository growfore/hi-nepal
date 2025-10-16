"use server";

import Link from "next/link";
import React from "react";
import { LucideClock, LucideStar, LucideTimer } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

type TCardProps = {
  slug: string;
  image: string;
  title: string;
  days?: string | null;
  destination?: string;
};

const TrekkingCard = (props: TCardProps) => {
  const { slug, image, title, days, destination } = props;

  return (
    <div className="w-full">
      <div className="w-[340px] md:w-[380px] pb-4 h-[440px] bg-white rounded-md shadow-sm  hover:-translate-y-0.5 overflow-hidden hover:shadow-md transition-all duration-300 relative flex flex-col justify-between">
        <figure className="w-full h-56 relative">
          <Link
            aria-label={title}
            href={`/${slug}`}
            className="block w-full h-full"
          >
            <Image
              width={300}
              height={300}
              className="w-full h-full object-cover rounded-t-md"
              src={(image)}
              alt={title || "Package thumbnail"}
            />
          </Link>
        </figure>
        <div className="p-4">
          <div className="">
            <h3 className="text-2xl font-bold text-dark-blue-900 mb-2">
              <Link title={title} href={`/${slug}`}>
                {title.split(":")[0]}
              </Link>
            </h3>
            <div className="flex gap-1 justify-between">
              <div className="flex gap-1 flex-col">
                <p>{destination && destination}</p>
                <p className="flex gap-1 items-center">
                  <LucideClock strokeWidth={1} />
                  <span>{days && days} Day(s)</span>
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
            <Link href={`/booking?destination=${slug}`}>
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

export default TrekkingCard;

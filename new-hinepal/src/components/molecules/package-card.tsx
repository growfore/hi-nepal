import { TDestinationSingle, TPackages } from "@/types/types";
import Link from "next/link";
import React from "react";
import {  LucideClock, LucideStar } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { placeholderImage } from "@/utils/placeholder-image";


type TProps = {
  item: TPackages[0];
  destination: Partial<TDestinationSingle>;
  showRegion?: boolean;
};

function getRatingFromTitle(title: string) {
  const ratings = [4.6, 4.7, 4.8, 4.9, 5.0];
  const index = title.length % ratings.length;
  return ratings[index];
}

// usage
const STARS = [0, 1, 2, 3, 4];
const PackageCard = (props: TProps) => {
  const { item, showRegion = true } = props;

  return (
    <div className="">
      <div className="sm:w-full min-w-[340px] max-w-[340px] lg:max-w-[380px] pb-4  bg-white rounded-md shadow-sm  hover:-translate-y-0.5 overflow-hidden hover:shadow-md transition-all duration-300 relative">
        {/* <figure className="w-full h-56 relative overflow-hidden object-cover"> */}
        <Link
          aria-label={item.title}
          href={`/${item.slug}`}
          className="relative w-full overflow-hidden object-cover min-w-[320px] h-56 block"
          prefetch={false}
        >
          <Image
            placeholder="blur"
            blurDataURL={placeholderImage}
            width={320}
            height={420}
            sizes="(max-width: 768px) 100vw,
                     (max-width: 1200px) 50vw,
                     33vw"
            className="w-full h-full object-cover rounded-t-md"
            src={item?.thumbnail ?? item?.banner}
            alt={item?.thumbnailImageAlt || item.title || "Package thumbnail"}
          />
        </Link>
        {/* </figure> */}
        <div className="p-4">
          <h3 className="text-2xl font-bold text-dark-blue-900 mb-2 h-12">
            <Link title={item.title} href={`/${item.slug}`} prefetch={false}>
              {item.title.split(":")[0].length > 40
                ? item.title.split(":")[0].substring(0, 40) + "..."
                : item.title.split(":")[0]}
            </Link>
          </h3>
          <div className="flex gap-1 justify-between items-center">
            <div className="flex gap-1 flex-col">
              {showRegion && <p>{item?.destination?.name}</p>}
              <p className="flex gap-1 items-center justify-center">
                {STARS.map((_, idx) => {
                  return (
                    <LucideStar
                      key={idx}
                      fill="orange"
                      stroke="orange"
                      size={16}
                    />
                  );
                })}
                Rated {getRatingFromTitle(item.title)}/5
              </p>
            </div>

            <Link
              target="_blank"
              href={`/booking?destination=${item?.slug}`}
              prefetch={false}
            >
              <Button
                size={"lg"}
                className="rounded-full bg-orange-500 hover:bg-green-700 cursor-pointer mt-4"
              >
                Book Now
              </Button>
            </Link>
          </div>
          <p className="flex gap-1 items-center">
            <LucideClock strokeWidth={1} />
            <span>
              {Number.isFinite(+item?.duration)
                ? item?.duration + " Day(s)"
                : item?.duration}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;

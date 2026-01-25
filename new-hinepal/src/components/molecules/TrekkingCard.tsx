"use server";

import Link from "next/link";
import { LucideClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { placeholderImage } from "@/utils/placeholder-image";

type TCardProps = {
  slug: string;
  image: string;
  title: string;
  days?: string | null;
  destination?: string;
  activity?: boolean;
};

const TrekkingCard = (props: TCardProps) => {
  const { slug, image, title, days, destination, activity } = props;

  return (
    <div
      className={cn(
        activity ? "h-[440px]" : "h-full",
        "w-[340px] md:w-[380px] pb-4 bg-white rounded-md shadow-sm  hover:-translate-y-0.5 overflow-hidden hover:shadow-md transition-all duration-300 relative flex flex-col justify-between"
      )}
    >
      <figure className="w-full h-56 relative overflow-hidden">
        <Link
          aria-label={title}
          href={`/${slug}`}
          className="relative w-full h-full"
          prefetch={false}
        >
          <Image
            placeholder="blur"
            blurDataURL={placeholderImage}
            width={300}
            height={300}
            className="w-full object-cover rounded-t-md"
            src={image}
            sizes="
      (max-width: 640px) 100vw,
      (max-width: 1024px) 90vw,
      (max-width: 1536px) 80vw,
      70vw
    "
            alt={title || "Package thumbnail"}
          />
        </Link>
      </figure>
      <div className="p-4">
        <h3 className="text-2xl font-bold text-dark-blue-900 mb-2">
          <Link title={title} href={`/${slug}`} prefetch={false}>
            {title.split(":")[0]}
          </Link>
        </h3>
        <div
          className={cn(activity ? "flex" : "hidden", "gap-1 justify-between")}
        >
          <div className="flex gap-1 flex-col">
            <p>{destination}</p>
            <p className="flex gap-1 items-center">
              <LucideClock strokeWidth={1} />
              <span>{days} Day(s)</span>
            </p>
          </div>
        </div>
        <Link href={`/booking?destination=${slug}`} prefetch={false}>
          <Button
            size={"lg"}
            className={cn(
              activity ? "" : "hidden",
              "rounded-full bg-orange-400 hover:bg-orange-600 cursor-pointer mt-4"
            )}
          >
            {" "}
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TrekkingCard;

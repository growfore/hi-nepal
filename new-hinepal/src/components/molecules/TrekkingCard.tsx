// import { LucideTimer } from "lucide-react";
// import { getProxyUrl } from "@/utils/imageProxy";
// import { Badge } from "@/components/ui/badge";

// export default function TrekkingCard({ image, title, days }: TCardProps) {
//   return (
//     <div className="max-w-[380px]">
//       <div className="relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-2xl transition-all duration-300 ease-in-out">
//         <div className="relative aspect-[16/9] w-[420px] overflow-hidden">
//           <img
//             src={getProxyUrl(image) || "/placeholder.svg"}
//             alt={title}
//             className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
//             sizes="(max-width: 768px) 100vw, 400px"
//           />

//           {/* Dark gradient overlay for better text contrast */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

//           <div className="absolute bottom-6 left-6 md:bottom-4 md:left-4 text-white z-10">
//             {days && (
//               <Badge className="bg-green-700">
//                 <LucideTimer className="w-4 h-4" />
//                 {days.includes(":") ? days : `${days} Day(s)`}
//               </Badge>
//             )}
//             <h3 className="text-3xl md:text-2xl sm:text-xl font-bold m-0 leading-tight text-white drop-shadow-2xl">
//               {title.split(":")[0]}
//             </h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use server";

import { TDestinationSingle, TPackages } from "@/types/types";
import Link from "next/link";
import React from "react";
import { LucideClock, LucideStar, LucideTimer } from "lucide-react";
import { getProxyUrl } from "@/utils/imageProxy";
import { Button } from "../ui/button";

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
      <div className="w-[380px] pb-4 h-[440px] bg-white rounded-md shadow-sm  hover:-translate-y-0.5 overflow-hidden hover:shadow-md transition-all duration-300 relative flex flex-col justify-between">
        <figure className="w-full h-56 relative">
          <Link
            aria-label={title}
            href={`/${slug}`}
            className="block w-full h-full"
          >
            <img
              loading="lazy"
              width={300}
              height={300}
              className="w-full h-full object-cover rounded-t-md"
              src={getProxyUrl(image)}
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

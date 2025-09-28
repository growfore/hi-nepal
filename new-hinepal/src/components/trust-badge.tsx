"use client";

import { LucideStar } from "lucide-react";
import Link from "next/link";

export default function TrustBadge() {
  return (
    <Link
      href={
        "https://www.tripadvisor.com/Attraction_Review-g293891-d12268304-Reviews-Hi_Nepal_Travels_Treks-Pokhara_Gandaki_Zone_Western_Region.html"
      }
      target="_blank"
      className="flex flex-col md:flex-row gap-1 items-start  justify-left mt-2 font-medium text-xl hover:underline"
    >
      <div className="flex gap-1">
        5.0
        <div className="flex gap-1 items-center justify-center">
          {Array.from({ length: 5 }).map((arr, index) => {
            return <LucideStar color="orange" fill="orange" />;
          })}
        </div>
      </div>
      <div>110+ Reviews (Recommended by 99.9% of Travellers)</div>
    </Link>
  );
}

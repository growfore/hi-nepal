import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { siteData } from "@/constant/sitedata";

const STARS = [0, 1, 2, 3, 4];

export default function TripAdvisorBadge() {
  return (
    <Link
      href={siteData.reviews.tripAdvisor.link}
      target="_blank"
      className="w-full hover:pointer-cursor flex gap-2 items-center justify-center md:justify-start lg:justify-center  px-8 py-2 border border-gray-300 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <Image
        src="/assets/tripadvisor-logo-icon.webp"
        alt="Tripadvisor Logo"
        width={50}
        height={50}
      />
      <div className="border-l pl-2 border-gray-300 h-8 flex justify-center  flex-col">
        <div className="flex justify-center items-center gap-1">
          <span className="ml-2 font-semibold text-sm flex">
            {siteData.reviews.tripAdvisor.rating}/5
          </span>
          {STARS.map((i) => (
            <div key={i} className="bg-green-700 rounded-full size-2" />
          ))}
        </div>
        <span className="ml-2 text-xs">
          {siteData.reviews.tripAdvisor.reviewsCount}+ Reviews
        </span>
      </div>
      <Button
        size={"sm"}
        variant={"secondary"}
        className="cursor-pointer rounded-3xl text-xs md:justify-self-end sm:ml-8 md:ml-0"
      >
        Read Reviews
      </Button>
    </Link>
  );
}

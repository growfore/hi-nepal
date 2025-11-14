import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function TripAdvisorBadge() {
  return (
    <Link
      href={
        "https://www.tripadvisor.com/Attraction_Review-g293891-d12268304-Reviews-Hi_Nepal_Travels_Treks-Pokhara_Gandaki_Zone_Western_Region.html"
      }
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
          <span className="ml-2 font-semibold text-sm flex">5.0</span>
          {new Array(5).fill(null).map((_arr) => {
            return (
              <div
                key={_arr}
                className="bg-green-700 rounded-full w-4 h-4"
              ></div>
            );
          })}
        </div>
        <p className="ml-2 text-xs">115+ Reviews</p>
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

import Link from "next/link";
import { Button } from "./ui/button";

export default function TripAdvisorBadge() {
  return (
    <Link
      href={
        "https://www.tripadvisor.com/Attraction_Review-g293891-d12268304-Reviews-Hi_Nepal_Travels_Treks-Pokhara_Gandaki_Zone_Western_Region.html"
      }
      target="_blank"
      className="min-w-[340px] hover:pointer-cursor flex gap-2 items-center justify-center px-8 py-2 border border-gray-300 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <img
        src="/assets/tripadvisor-logo-icon.webp"
        alt="Tripadvisor Logo"
        width={50}
        height={50}
      />
      <div className="border-l pl-2 border-gray-300 h-8 flex justify-center  flex-col">
        <div className="flex justify-center items-center gap-1">
          <span className="ml-2 font-semibold text-lg flex">5.0</span>
          {Array.from({ length: 5 }).map((arr, index) => {
            return (
              <div
                key={index}
                className="bg-green-700 rounded-full w-4 h-4"
              ></div>
            );
          })}
        </div>
        <p className="ml-2 text-sm">115+ Reviews</p>
      </div>
      <Button size={'sm'} variant={"secondary"} className="cursor-pointer rounded-3xl">
        Read Reviews
      </Button>
    </Link>
  );
}

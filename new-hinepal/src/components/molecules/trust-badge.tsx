import Link from "next/link";

const TRIPADVISOR_URL = "https://www.tripadvisor.com/Attraction_Review-g293891-d12268304-Reviews-Hi_Nepal_Travels_Treks-Pokhara_Gandaki_Zone_Western_Region.html";
const STARS = Array.from({ length: 5 }, (_, i) => i);

export default function TrustBadge() {
  return (
    <Link
      href={TRIPADVISOR_URL}
      target="_blank"
      className="flex flex-col md:flex-row gap-1 items-start justify-left mt-2 font-medium text-xl hover:underline"
    >
      <div className="flex gap-1">
        5.0
        <div className="flex gap-0.5 items-center justify-center mx-2">
          {STARS.map((i) => (
            <div
              key={i}
              className="bg-green-700 rounded-full w-4 h-4"
              aria-label={`Star ${i + 1}`}
            />
          ))}
        </div>
      </div>
      <div>122+ Reviews (Recommended by 100% of Travelers)</div>
    </Link>
  );
}

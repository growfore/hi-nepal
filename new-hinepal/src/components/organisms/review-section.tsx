import { placeholderImage } from "@/utils/placeholder-image";
import { LucideVerified } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ReviewSection() {
  return (
    <div className="bg-background border-y">
      <div className="container mx-auto p-4 md:p-8 space-y-4">
        <p className="font-bold text-3xl">Traveler Reviews</p>
        <p>
          See what our adventurers have to say. From Everest Base Camp treks to
          Bhutan and Tibet tours, our travelers share their unforgettable
          experiences with Hi Nepal Travels & Treks. Real stories, real
          adventures, and honest feedback from those who explored Nepal with us.
        </p>
        <div className="flex items-center gap-2 font-medium text-xs md:text-lg text-green-700">
          <LucideVerified /> Recommended by 100% of Travelers
        </div>
        <div className="flex items-center gap-8">
          <div className="space-y-4">
            <Link
              target="_blank"
              href={
                "https://www.tripadvisor.com/Attraction_Review-g293891-d12268304-Reviews-Hi_Nepal_Travels_Treks-Pokhara_Gandaki_Zone_Western_Region.html"
              }
            >
              <Image
                placeholder="blur"
                blurDataURL={placeholderImage}
                width={200}
                height={200}
                className="w-40"
                src={"/assets/tripadvisor-logo.webp"}
                alt="Tripadvisor reviews"
              />
              <p className="text-sm md:text-lg">Reviews: 5/5 (122+ Reviews)</p>
            </Link>
          </div>
          <div className="space-y-4">
            <Link
              href={"https://share.google/BsBaEi8OL5JTsUmV8"}
              target="_blank"
            >
              <Image
                placeholder="blur"
                blurDataURL={placeholderImage}
                width={200}
                height={200}
                className="w-24"
                src={"/assets/google-logo.webp"}
                alt="Tripadvisor reviews"
              />
              <p className="text-sm md:text-lg">Reviews: 4.9/5 (60+ Reviews)</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import Link from "next/link";
import { ReviewCard } from "@/components/molecules/review-card";
import { Button } from "@/components/ui/button";
import { reviews } from "@/constant/reviews";

export default function ReviewsGroup() {
  const handleLike = (index: number) => {
    console.log(`Review ${index + 1} liked!`);
  };

  return (
    <div className="min-h-screen">
      <h2 className="text-xl font-bold text-green-700 mb-8">
        Customer Reviews
      </h2>
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <ReviewCard
            key={review.title}
            {...review}
            onLike={() => handleLike(index)}
          />
        ))}
        <Link
          target="_blank"
          href="https://www.tripadvisor.com/Attraction_Review-g293891-d12268304-Reviews-Hi_Nepal_Travels_Treks-Pokhara_Gandaki_Zone_Western_Region.html"
        >
          <Button className="bg-green-700 p-8 hover:cursor-pointer">
            View More Reviews
          </Button>
        </Link>
      </div>
    </div>
  );
}

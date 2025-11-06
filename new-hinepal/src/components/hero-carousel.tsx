"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ReviewCard } from "./molecules/review-card";
import { reviews } from "@/constant/reviews";
import { Button } from "./ui/button";
import { LucideChevronLeft, LucideChevronRight } from "lucide-react";

export function ReviewCarousel() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className="p-8">
      <h4 className="font-bold text-3xl md:text-5xl text-center mb-4">
        What our Customers Say About Us
      </h4>
      <div className="md:px-12">
        <ReviewCard
          user={reviews[count].user}
          rating={5}
          title={reviews[count].title}
          date={reviews[count].date}
          tripType={reviews[count].tripType}
          content={reviews[count].content}
          likesCount={reviews[count].likesCount}
          isLiked
        />
      </div>
      <div className="flex justify-center items-center gap-4 p-8">
        <Button variant={'outline'} className="cursor-pointer" disabled={count == 0} onClick={() => setCount(count - 1)}>
          <LucideChevronLeft />
        </Button>
        <Button variant={'outline'} className="cursor-pointer" disabled={count === reviews.length - 1} onClick={() => setCount(count + 1)}>
          <LucideChevronRight />
        </Button>
      </div>
    </div>
  );
}

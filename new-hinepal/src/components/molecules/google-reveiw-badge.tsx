import { siteData } from "@/constant/sitedata";
import { LucideStar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const GoogleReviewBadge = () => {
  return (
    <Link
      href={siteData.reviews.google.link}
      target="_blank"
      referrerPolicy="no-referrer"
      className="w-fit"
    >
      <Image
        src={"/assets/google-logo.webp"}
        alt="google logo"
        height={200}
        width={200}
        className="w-fit mb-2"
      />
      <div className="flex items-center justify-start gap-1">
        <LucideStar stroke="orange" className="" size={16} fill="orange" />
        <span>{siteData.reviews.google.rating}/5</span>
        <span>({siteData.reviews.google.reviewsCount}+ Reviews)</span>
      </div>
    </Link>
  );
};
